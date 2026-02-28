import type { SpeedData } from './types/speed-data';
import { Lane } from './types/speed-data';

const sensors = [
	'Sector 1 Entry',
	'Sector 1 Exit',
	'Sector 2 Entry',
	'Sector 2 Exit',
	'Sector 3 Entry',
	'Sector 3 Exit',
	'Finish Line',
	'Pit Entry'
];

function generateSpeedData(count: number): SpeedData[] {
	const data: SpeedData[] = [];
	const now = new Date();

	for (let i = 0; i < count; i++) {
		const minutesAgo = count - i;
		const timestamp = new Date(now.getTime() - minutesAgo * 60 * 1000);

		const baseSpeed = 150 + Math.random() * 150;
		const variation = (Math.random() - 0.5) * 40;
		const speed = Math.max(80, Math.min(350, baseSpeed + variation));

		data.push({
			id: i + 1,
			sensor_name: sensors[Math.floor(Math.random() * sensors.length)],
			speed: Math.round(speed * 10) / 10,
			lane: Math.random() > 0.5 ? Lane.Left : Lane.Right,
			created_at: timestamp.toISOString()
		});
	}

	return data.sort((a, b) => new Date(a.created_at).getTime() - new Date(b.created_at).getTime());
}

export function generateRealtimeData(id: number): SpeedData {
	const baseSpeed = 150 + Math.random() * 150;
	const variation = (Math.random() - 0.5) * 40;
	const speed = Math.max(80, Math.min(350, baseSpeed + variation));

	return {
		id,
		sensor_name: sensors[Math.floor(Math.random() * sensors.length)],
		speed: Math.round(speed * 10) / 10,
		lane: Math.random() > 0.5 ? Lane.Left : Lane.Right,
		created_at: new Date().toISOString()
	};
}

export const mockSpeedData: SpeedData[] = generateSpeedData(120);
