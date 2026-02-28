import { APP_MODE, API_URL, API_TOKEN } from '$env/static/private';
import type { LayoutServerLoad } from './$types';
import type { DataMode } from '$lib/types/settings';

export const load: LayoutServerLoad = () => {
	const dataMode: DataMode = APP_MODE === 'SIMULATION' ? 'simulation' : 'api';

	return {
		envConfig: {
			dataMode,
			apiUrl: API_URL ?? 'http://localhost:8080',
			apiToken: API_TOKEN ?? ''
		}
	};
};
