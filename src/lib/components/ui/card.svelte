<script lang="ts">
	import type { Snippet } from 'svelte';

	interface Props {
		class?: string;
		children: Snippet;
	}

	let { class: className = '', children }: Props = $props();
</script>

<div
	class={'bg-card/70 backdrop-blur-xl text-card-foreground rounded-2xl border border-border/50 shadow-xl shadow-primary/5 transition-all duration-300 hover:shadow-2xl hover:shadow-primary/10 hover:-translate-y-1 ' +
		className}
>
	{@render children()}
</div>
