import { writable, derived } from 'svelte/store';
import type { SpeedData } from '../types/speed-data';
import { mockSpeedData, generateRealtimeData } from '../mock-data';
import { settings, systemSettings, filterSettings } from './settings';
import { Lane } from '../types/speed-data';

const MOCK_SENSORS = [
	'Sector 1 Entry',
	'Sector 1 Exit',
	'Sector 2 Entry',
	'Sector 2 Exit',
	'Sector 3 Entry',
	'Sector 3 Exit',
	'Finish Line',
	'Pit Entry'
];

export const speedData = writable<SpeedData[]>([]);
export const isConnected = writable(false);
export const isLoading = writable(true);

let intervalId: ReturnType<typeof setInterval> | null = null;
let lastId = 0;

function getApiUrl(): string {
	let url = 'http://192.168.1.100:8080';
	if (typeof window !== 'undefined') {
		try {
			const stored = localStorage.getItem('speedstream-settings');
			if (stored) {
				const parsed = JSON.parse(stored);
				if (parsed.apiUrl) {
					url = parsed.apiUrl;
				}
			}
		} catch (e) {
			console.error('Error reading API URL:', e);
		}
	}
	return url;
}

const isSimulation = true;

async function fetchInitialData(
	dateRangeMode: string,
	customStartDate: string | null,
	customEndDate: string | null,
	maxDataPoints: number
): Promise<SpeedData[]> {
	if (isSimulation) {
		let data = [...mockSpeedData];

		if (dateRangeMode === 'custom' && customStartDate && customEndDate) {
			const startDate = new Date(customStartDate);
			const endDate = new Date(customEndDate);
			data = data.filter((item) => {
				const itemDate = new Date(item.created_at);
				return itemDate >= startDate && itemDate <= endDate;
			});
		} else if (dateRangeMode === 'today') {
			const today = new Date();
			today.setHours(0, 0, 0, 0);
			const tomorrow = new Date(today);
			tomorrow.setDate(tomorrow.getDate() + 1);
			data = data.filter((item) => {
				const itemDate = new Date(item.created_at);
				return itemDate >= today && itemDate < tomorrow;
			});
		}

		return data;
	}

	const apiUrl = getApiUrl();

	try {
		let url = `${apiUrl}/api/speeds?limit=${maxDataPoints}`;

		if (dateRangeMode === 'today') {
			url = `${apiUrl}/api/speeds/today?limit=${maxDataPoints}`;
		} else if (dateRangeMode === 'custom' && customStartDate && customEndDate) {
			url = `${apiUrl}/api/speeds/range?start_date=${customStartDate}&end_date=${customEndDate}`;
		}

		const response = await fetch(url);
		if (!response.ok) throw new Error('Failed to fetch');
		const rawData = await response.json();
		return rawData.map((d: any) => ({
			...d,
			lane: d.lane === 0 ? Lane.Left : Lane.Right
		}));
	} catch (e) {
		console.error('Error fetching data:', e);
		return [];
	}
}

export function initRealtimeData() {
	let currentSettings: any;
	let currentSystem: any;
	let currentFilter: any;

	settings.subscribe((s) => (currentSettings = s));
	systemSettings.subscribe((s) => (currentSystem = s));
	filterSettings.subscribe((f) => (currentFilter = f));

	const dateRangeMode = currentFilter?.dateRangeMode || 'realtime';
	const customStartDate = currentFilter?.customStartDate || null;
	const customEndDate = currentFilter?.customEndDate || null;
	const maxDataPoints = currentSystem?.maxDataPoints || 120;
	const updateInterval = currentSystem?.updateInterval || 3000;

	isLoading.set(true);

	fetchInitialData(dateRangeMode, customStartDate, customEndDate, maxDataPoints).then((data) => {
		speedData.set(data);
		isConnected.set(true);
		isLoading.set(false);
		lastId = data.length;
	});

	if (intervalId) {
		clearInterval(intervalId);
	}

	if (dateRangeMode === 'realtime' && isSimulation) {
		intervalId = setInterval(() => {
			lastId++;
			const newDataPoint = generateRealtimeData(lastId);

			speedData.update((data) => {
				const newData = [...data, newDataPoint];
				if (newData.length > maxDataPoints) {
					return newData.slice(-maxDataPoints);
				}
				return newData;
			});
		}, updateInterval);
	}

	return () => {
		if (intervalId) {
			clearInterval(intervalId);
			intervalId = null;
		}
	};
}

export const filteredData = derived([speedData, filterSettings], ([$speedData, $filter]) => {
	return $speedData.filter((data) => {
		const sensorMatch =
			$filter.selectedSensors.length === 0 ||
			$filter.selectedSensors.includes(data.sensor_name || '');

		const laneMatch = $filter.selectedLanes.includes(data.lane);

		const speedMatch =
			!$filter.enableAlerts ||
			(data.speed >= $filter.speedThresholdMin && data.speed <= $filter.speedThresholdMax);

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
		return {
			avgSpeed: 0,
			maxSpeed: 0,
			minSpeed: 0,
			totalReadings: 0
		};
	}

	const speeds = $filteredData.map((d) => d.speed);
	const avgSpeed = speeds.reduce((a, b) => a + b, 0) / speeds.length;
	const maxSpeed = Math.max(...speeds);
	const minSpeed = Math.min(...speeds);
	const totalReadings = $filteredData.length;

	return {
		avgSpeed: Math.round(avgSpeed * 10) / 10,
		maxSpeed: Math.round(maxSpeed * 10) / 10,
		minSpeed: Math.round(minSpeed * 10) / 10,
		totalReadings
	};
});
