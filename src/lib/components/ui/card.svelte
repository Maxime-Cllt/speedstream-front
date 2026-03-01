<script lang="ts">
	import type { Snippet } from 'svelte';

	interface Props {
		class?: string;
		children: Snippet;
	}

	let { class: className = '', children }: Props = $props();
</script>

<div
	class={'rounded-2xl border border-border/50 bg-card/70 text-card-foreground shadow-xl shadow-primary/5 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-primary/10 ' +
		className}
>
	{@render children()}
</div>
