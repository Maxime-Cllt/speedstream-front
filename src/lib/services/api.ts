import type { SpeedData, SpeedDataAPI } from '../types/speed-data';
import { apiToSpeedData } from '../types/speed-data';

function authHeaders(token: string): HeadersInit {
	return { Authorization: `Bearer ${token}` };
}

export async function fetchRecentSpeeds(
	apiUrl: string,
	token: string,
	limit = 100
): Promise<SpeedData[]> {
	const res = await fetch(`${apiUrl}/api/speeds?limit=${limit}`, {
		headers: authHeaders(token)
	});
	if (!res.ok) throw new Error(`HTTP ${res.status}: ${res.statusText}`);
	const data: SpeedDataAPI[] = await res.json();
	return data.map(apiToSpeedData);
}

export async function fetchTodaySpeeds(
	apiUrl: string,
	token: string,
	limit = 500
): Promise<SpeedData[]> {
	const res = await fetch(`${apiUrl}/api/speeds/today?limit=${limit}`, {
		headers: authHeaders(token)
	});
	if (!res.ok) throw new Error(`HTTP ${res.status}: ${res.statusText}`);
	const data: SpeedDataAPI[] = await res.json();
	return data.map(apiToSpeedData);
}

export async function fetchSpeedsByRange(
	apiUrl: string,
	token: string,
	startDate: string,
	endDate: string
): Promise<SpeedData[]> {
	const params = new URLSearchParams({ start_date: startDate, end_date: endDate });
	const res = await fetch(`${apiUrl}/api/speeds/range?${params}`, {
		headers: authHeaders(token)
	});
	if (!res.ok) throw new Error(`HTTP ${res.status}: ${res.statusText}`);
	const data: SpeedDataAPI[] = await res.json();
	return data.map(apiToSpeedData);
}

export async function checkApiHealth(apiUrl: string): Promise<boolean> {
	try {
		const res = await fetch(`${apiUrl}/health`, { signal: AbortSignal.timeout(3000) });
		return res.ok;
	} catch {
		return false;
	}
}

// SSE via fetch + ReadableStream (EventSource ne supporte pas les headers custom)
export function createSSEConnection(
	apiUrl: string,
	token: string,
	onData: (data: SpeedData) => void,
	onOpen: () => void,
	onError: () => void
): () => void {
	let abortController: AbortController | null = null;
	let reconnectTimer: ReturnType<typeof setTimeout> | null = null;
	let closed = false;

	async function connect() {
		abortController = new AbortController();

		try {
			const response = await fetch(`${apiUrl}/api/speeds/stream`, {
				headers: { Authorization: `Bearer ${token}` },
				signal: abortController.signal
			});

			if (!response.ok) throw new Error(`HTTP ${response.status}`);
			if (!response.body) throw new Error('No response body');

			onOpen();

			const reader = response.body.getReader();
			const decoder = new TextDecoder();
			let buffer = '';

			while (!closed) {
				const { done, value } = await reader.read();
				if (done) break;

				buffer += decoder.decode(value, { stream: true });
				const lines = buffer.split('\n');
				buffer = lines.pop() ?? ''; // keep incomplete last line

				for (const line of lines) {
					if (line.startsWith('data: ')) {
						try {
							const raw: SpeedDataAPI = JSON.parse(line.slice(6));
							onData(apiToSpeedData(raw));
						} catch (e) {
							console.error('[SSE] Parse error:', e);
						}
					}
				}
			}
		} catch (err) {
			if ((err as Error).name === 'AbortError') return;
			console.error('[SSE] Connection error:', err);
			onError();
		}

		if (!closed) {
			reconnectTimer = setTimeout(connect, 3000);
		}
	}

	connect();

	return () => {
		closed = true;
		if (reconnectTimer) clearTimeout(reconnectTimer);
		abortController?.abort();
	};
}
