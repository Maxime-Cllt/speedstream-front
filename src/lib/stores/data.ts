import { writable, derived, get } from 'svelte/store';
import type { SpeedData } from '../types/speed-data';
import { mockSpeedData, generateRealtimeData } from '../mock-data';
import { settings } from './settings';
import {
	fetchRecentSpeeds,
	fetchTodaySpeeds,
	fetchSpeedsByRange,
	createSSEConnection
} from '../services/api';

export const speedData = writable<SpeedData[]>(mockSpeedData);
export const isConnected = writable(false);
export const isLoading = writable(false);
export const connectionError = writable<string | null>(null);

export function initRealtimeData(): () => void {
	const $settings = get(settings);
	const {
		dataMode,
		apiUrl,
		apiToken,
		maxDataPoints,
		updateInterval,
		dateRangeMode,
		customStartDate,
		customEndDate
	} = $settings;

	// Reset state
	isLoading.set(true);
	isConnected.set(false);
	connectionError.set(null);
	speedData.set([]);

	// --- Simulation mode ---
	if (dataMode === 'simulation') {
		speedData.set(mockSpeedData);
		isConnected.set(true);
		isLoading.set(false);

		let lastId = mockSpeedData.length;
		const intervalId = setInterval(() => {
			lastId++;
			const newPoint = generateRealtimeData(lastId);
			speedData.update((data) => {
				const next = [...data, newPoint];
				return next.length > maxDataPoints ? next.slice(-maxDataPoints) : next;
			});
		}, updateInterval);

		return () => clearInterval(intervalId);
	}

	// --- API mode ---
	let sseCleanup: (() => void) | null = null;
	let cancelled = false;

	async function start() {
		try {
			let data: SpeedData[];

			if (dateRangeMode === 'today') {
				data = await fetchTodaySpeeds(apiUrl, apiToken, 500);
			} else if (dateRangeMode === 'custom' && customStartDate && customEndDate) {
				data = await fetchSpeedsByRange(apiUrl, apiToken, customStartDate, customEndDate);
			} else {
				// realtime: 100 dernières
				data = await fetchRecentSpeeds(apiUrl, apiToken, 100);
			}

			if (cancelled) return;

			speedData.set(data);
			isLoading.set(false);

			// SSE uniquement en mode realtime
			if (dateRangeMode === 'realtime') {
				sseCleanup = createSSEConnection(
					apiUrl,
					apiToken,
					(newPoint) => {
						speedData.update((current) => {
							const next = [...current, newPoint];
							return next.length > maxDataPoints ? next.slice(-maxDataPoints) : next;
						});
					},
					() => isConnected.set(true),
					() => isConnected.set(false)
				);
			}
		} catch (err) {
			if (cancelled) return;
			const msg = (err as Error).message;
			console.error('[API] Erreur:', msg);
			isLoading.set(false);
			isConnected.set(false);
			connectionError.set(msg);
		}
	}

	start();

	return () => {
		cancelled = true;
		sseCleanup?.();
	};
}

export const filteredData = derived([speedData, settings], ([$speedData, $settings]) => {
	return $speedData.filter((data) => {
		const sensorMatch =
			$settings.selectedSensors.length === 0 ||
			$settings.selectedSensors.includes(data.sensor_name || '');

		const laneMatch = $settings.selectedLanes.includes(data.lane);

		const speedMatch =
			!$settings.enableAlerts ||
			(data.speed >= $settings.speedThresholdMin && data.speed <= $settings.speedThresholdMax);

		return sensorMatch && laneMatch && speedMatch;
	});
});

export const availableSensors = derived(speedData, ($speedData) => {
	const sensorNames = $speedData
		.map((d) => d.sensor_name)
		.filter((name): name is string => name !== null && name !== undefined);
	return Array.from(new Set(sensorNames)).sort();
});

export const stats = derived(filteredData, ($filteredData) => {
	if ($filteredData.length === 0) {
		return { avgSpeed: 0, maxSpeed: 0, minSpeed: 0, totalReadings: 0 };
	}

	const speeds = $filteredData.map((d) => d.speed);
	const avgSpeed = speeds.reduce((a, b) => a + b, 0) / speeds.length;

	return {
		avgSpeed: Math.round(avgSpeed * 10) / 10,
		maxSpeed: Math.round(Math.max(...speeds) * 10) / 10,
		minSpeed: Math.round(Math.min(...speeds) * 10) / 10,
		totalReadings: $filteredData.length
	};
});
