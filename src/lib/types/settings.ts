import { Lane } from './speed-data';

export type DateRangeMode = 'realtime' | 'today' | 'custom';

export interface AppSettings {
	selectedSensors: string[];
	selectedLanes: Lane[];

	dateRangeMode: DateRangeMode;
	customStartDate: string | null;
	customEndDate: string | null;

	updateInterval: number;
	maxDataPoints: number;

	apiUrl: string;

	showLaneDistribution: boolean;
	showSensorStats: boolean;
	showSpeedChart: boolean;

	showHourlyTrend: boolean;
	showSpeedRecords: boolean;
	showSpeedDistribution: boolean;
	showAverageSpeedBySensor: boolean;
	showActivityHeatmap: boolean;
	showLanePerformance: boolean;
	showSpeedConsistency: boolean;
	showTopSensors: boolean;
	showTimePeriodAnalysis: boolean;

	speedThresholdMin: number;
	speedThresholdMax: number;
	enableAlerts: boolean;
}

export const defaultSettings: AppSettings = {
	selectedSensors: [],
	selectedLanes: [Lane.Left, Lane.Right],
	dateRangeMode: 'realtime',
	customStartDate: null,
	customEndDate: null,
	updateInterval: 3000,
	maxDataPoints: 120,
	apiUrl: 'http://192.168.1.100:8080',
	showLaneDistribution: true,
	showSensorStats: true,
	showSpeedChart: true,
	showHourlyTrend: true,
	showSpeedRecords: true,
	showSpeedDistribution: true,
	showAverageSpeedBySensor: true,
	showActivityHeatmap: true,
	showLanePerformance: true,
	showSpeedConsistency: true,
	showTopSensors: true,
	showTimePeriodAnalysis: true,
	speedThresholdMin: 80,
	speedThresholdMax: 350,
	enableAlerts: false
};
