<script lang="ts">
	import type { Snippet } from 'svelte';

	interface Props {
		class?: string;
		children: Snippet;
	}

	let { class: className = '', children }: Props = $props();
</script>

<div class={className + ' flex flex-col space-y-2 text-center sm:text-left'}>
	{@render children()}
</div>
