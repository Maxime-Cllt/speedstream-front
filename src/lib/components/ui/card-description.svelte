<script lang="ts">
	import type { Snippet } from 'svelte';

	interface Props {
		class?: string;
		children: Snippet;
	}

	let { class: className = '', children }: Props = $props();
</script>

<p class={'text-sm leading-relaxed text-muted-foreground/80 ' + className}>
	{@render children()}
</p>
