import { env } from '$env/dynamic/private';
import type { LayoutServerLoad } from './$types';
import type { DataMode } from '$lib/types/settings';

export const load: LayoutServerLoad = async () => {
	const appMode = env.APP_MODE || 'SIMULATION';
	const dataMode: DataMode = appMode === 'SIMULATION' ? 'simulation' : 'api';

	return {
		envConfig: {
			dataMode,
			apiUrl: env.API_URL || 'http://localhost:8080',
			apiToken: env.API_TOKEN || ''
		}
	};
};
