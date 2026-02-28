<script lang="ts">
	import './layout.css';
	import favicon from '$lib/assets/favicon.svg';
	import Sidebar from '$lib/components/sidebar.svelte';
	import { theme } from '$lib/stores/theme';
	import { settings } from '$lib/stores/settings';
	import { browser } from '$app/environment';
	import { onMount } from 'svelte';
	import type { LayoutData } from './$types';

	let { children, data }: { children: import('svelte').Snippet; data: LayoutData } = $props();

	// Exécution synchrone côté client : initialise les settings AVANT
	// que le onMount de la page ne se déclenche (onMount enfant > onMount parent)
	if (browser) {
		settings.init();
		settings.update((s) => ({
			...s,
			dataMode: data.envConfig.dataMode,
			apiUrl: data.envConfig.apiUrl || s.apiUrl,
			apiToken: data.envConfig.apiToken || s.apiToken
		}));
	}

	onMount(() => {
		theme.init();
	});
</script>

<svelte:head><link rel="icon" href={favicon} /></svelte:head>

<div class="flex min-h-screen bg-background">
	<Sidebar />
	<div class="min-w-0 flex-1">
		{@render children()}
	</div>
</div>
