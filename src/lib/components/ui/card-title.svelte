<script lang="ts">
	import type { Snippet } from 'svelte';

	interface Props {
		class?: string;
		children: Snippet;
	}

	let { class: className = '', children }: Props = $props();
</script>

<h3 class={'text-xl font-bold tracking-tight text-foreground ' + className}>
	{@render children()}
</h3>
