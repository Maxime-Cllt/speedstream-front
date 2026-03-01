<script lang="ts">
	import type { Snippet } from 'svelte';

	interface Props {
		class?: string;
		children: Snippet;
	}

	let { class: className = '', children }: Props = $props();
</script>

<p class={'text-sm text-muted-foreground/80 leading-relaxed ' + className}>
	{@render children()}
</p>
