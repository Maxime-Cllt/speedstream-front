<script lang="ts">
	import type { Snippet } from 'svelte';

	interface Props {
		class?: string;
		children: Snippet;
	}

	let { class: className = '', children }: Props = $props();
</script>

<h2 class={className + ' text-foreground text-lg font-semibold'}>
	{@render children()}
</h2>
