<script lang="ts">
	import type { Snippet } from 'svelte';

	interface Props {
		children: Snippet;
	}

	let { children }: Props = $props();
</script>

<div class="bg-card text-card-foreground rounded-lg border shadow-sm">
	{@render children()}
</div>
