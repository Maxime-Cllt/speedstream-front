<script lang="ts">
	import type { Snippet } from 'svelte';

	interface Props {
		class?: string;
		children: Snippet;
	}

	let { class: className = '', children }: Props = $props();
</script>

<h3 class={className + ' text-lg leading-none font-semibold tracking-tight'}>
	{@render children()}
</h3>
