<script lang="ts">
	import type { Snippet } from 'svelte';

	interface Props {
		class?: string;
		children: Snippet;
	}

	let { class: className = '', children }: Props = $props();
</script>

<p class={className + ' text-sm text-muted-foreground'}>
	{@render children()}
</p>
