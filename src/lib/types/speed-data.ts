export enum Lane {
	Left = 'Left',
	Right = 'Right'
}

export interface SpeedData {
	id: number;
	sensor_name: string | null;
	speed: number;
	lane: Lane;
	created_at: string;
}

export interface SpeedDataAPI {
	id: number;
	sensor_name: string | null;
	speed: number;
	lane: 0 | 1;
	created_at: string;
}

export function apiToSpeedData(apiData: SpeedDataAPI): SpeedData {
	return {
		...apiData,
		lane: apiData.lane === 0 ? Lane.Left : Lane.Right
	};
}
