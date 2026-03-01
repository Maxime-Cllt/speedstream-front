import { writable, derived } from 'svelte/store';
import type { AppSettings } from '../types/settings';
import { defaultSettings } from '../types/settings';

const STORAGE_KEY = 'speedstream-settings';

function loadSettings(): AppSettings {
	if (typeof window !== 'undefined') {
		const stored = localStorage.getItem(STORAGE_KEY);
		if (stored) {
			try {
				return { ...defaultSettings, ...JSON.parse(stored) };
			} catch (e) {
				console.error('Error loading settings:', e);
			}
		}
	}
	return defaultSettings;
}

function createSettingsStore() {
	const { subscribe, set, update } = writable<AppSettings>(defaultSettings);

	return {
		subscribe,
		set: (value: AppSettings) => {
			if (typeof window !== 'undefined') {
				localStorage.setItem(STORAGE_KEY, JSON.stringify(value));
			}
			set(value);
		},
		update: (fn: (settings: AppSettings) => AppSettings) => {
			update((current) => {
				const newValue = fn(current);
				if (typeof window !== 'undefined') {
					localStorage.setItem(STORAGE_KEY, JSON.stringify(newValue));
				}
				return newValue;
			});
		},
		reset: () => {
			if (typeof window !== 'undefined') {
				localStorage.removeItem(STORAGE_KEY);
			}
			set(defaultSettings);
		},
		init: () => {
			set(loadSettings());
		}
	};
}

export const settings = createSettingsStore();

export const displaySettings = derived(settings, ($settings) => ({
	showLaneDistribution: $settings.showLaneDistribution,
	showSensorStats: $settings.showSensorStats,
	showSpeedChart: $settings.showSpeedChart,
	showHourlyTrend: $settings.showHourlyTrend,
	showSpeedRecords: $settings.showSpeedRecords,
	showSpeedDistribution: $settings.showSpeedDistribution,
	showAverageSpeedBySensor: $settings.showAverageSpeedBySensor,
	showActivityHeatmap: $settings.showActivityHeatmap,
	showLanePerformance: $settings.showLanePerformance,
	showSpeedConsistency: $settings.showSpeedConsistency,
	showTopSensors: $settings.showTopSensors,
	showTimePeriodAnalysis: $settings.showTimePeriodAnalysis
}));

export const filterSettings = derived(settings, ($settings) => ({
	selectedSensors: $settings.selectedSensors,
	selectedLanes: $settings.selectedLanes,
	dateRangeMode: $settings.dateRangeMode,
	customStartDate: $settings.customStartDate,
	customEndDate: $settings.customEndDate,
	speedThresholdMin: $settings.speedThresholdMin,
	speedThresholdMax: $settings.speedThresholdMax,
	enableAlerts: $settings.enableAlerts
}));

export const systemSettings = derived(settings, ($settings) => ({
	updateInterval: $settings.updateInterval,
	maxDataPoints: $settings.maxDataPoints,
	apiUrl: $settings.apiUrl
}));
