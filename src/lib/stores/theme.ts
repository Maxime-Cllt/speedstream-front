import { writable } from 'svelte/store';
import { browser } from '$app/environment';

type Theme = 'light' | 'dark';

function createThemeStore() {
	const { subscribe, set, update } = writable<Theme>('dark');

	function applyTheme(t: Theme) {
		if (browser) {
			document.documentElement.classList.toggle('dark', t === 'dark');
			localStorage.setItem('theme', t);
		}
	}

	return {
		subscribe,
		init() {
			if (browser) {
				const stored = localStorage.getItem('theme') as Theme | null;
				const t: Theme = stored ?? 'dark';
				set(t);
				applyTheme(t);
			}
		},
		toggle() {
			update((current) => {
				const next: Theme = current === 'dark' ? 'light' : 'dark';
				applyTheme(next);
				return next;
			});
		}
	};
}

export const theme = createThemeStore();
