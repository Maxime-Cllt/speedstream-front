import { writable, derived, get } from 'svelte/store';
import type { SpeedData } from '../types/speed-data';
import { mockSpeedData, generateRealtimeData } from '../mock-data';
import { settings } from './settings';

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

export const speedData = writable<SpeedData[]>(mockSpeedData);
export const isConnected = writable(true);
export const isLoading = writable(false);

let intervalId: ReturnType<typeof setInterval> | null = null;
let lastId = mockSpeedData.length;

const isSimulation = true;

export function initRealtimeData() {
	const currentSettings = get(settings);
	const dateRangeMode = currentSettings?.dateRangeMode || 'realtime';
	const maxDataPoints = currentSettings?.maxDataPoints || 120;
	const updateInterval = currentSettings?.updateInterval || 3000;

	// Set initial data
	speedData.set(mockSpeedData);
	isConnected.set(true);
	isLoading.set(false);

	if (intervalId) {
		clearInterval(intervalId);
	}

	// Start realtime updates
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
