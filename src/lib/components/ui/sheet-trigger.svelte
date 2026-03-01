<script lang="ts">
	import type { Snippet } from 'svelte';

	interface Props {
		asChild?: boolean;
		children: Snippet;
	}

	let { asChild = false, children }: Props = $props();
</script>

{#if asChild}
	{@render children()}
{:else}
	{@render children()}
{/if}
