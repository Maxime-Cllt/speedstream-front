<script lang="ts">
	import type { Snippet } from 'svelte';

	interface Props {
		class?: string;
		children: Snippet;
	}

	let { class: className = '', children }: Props = $props();
</script>

<h2 class={className + ' text-lg font-semibold text-foreground'}>
	{@render children()}
</h2>
