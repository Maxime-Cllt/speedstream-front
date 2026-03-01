<script lang="ts">
	import type { Snippet } from 'svelte';

	interface Props {
		class?: string;
		children: Snippet;
	}

	let { class: className = '', children }: Props = $props();
</script>

<header
	class={'flex flex-col space-y-1.5 border-b border-border/40 bg-gradient-to-br from-primary/10 via-transparent to-primary/5 p-6 ' +
		className}
>
	{@render children()}
</header>
