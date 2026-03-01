<script lang="ts">
	import type { Snippet } from 'svelte';

	interface Props {
		open?: boolean;
		onOpenChange?: (open: boolean) => void;
		children: Snippet;
	}

	let { open = $bindable(false), onOpenChange, children }: Props = $props();
</script>

{#if open}
	<div
		class="fixed inset-0 z-50 bg-black/80"
		onclick={() => {
			open = false;
			onOpenChange?.(false);
		}}
		onkeydown={(e) => {
			if (e.key === 'Escape') {
				open = false;
				onOpenChange?.(false);
			}
		}}
		role="button"
		tabindex="0"
	></div>
	<div
		class="fixed inset-y-0 right-0 z-50 h-full w-full border-l bg-background p-6 shadow-lg transition-transform duration-300 sm:w-3/4 sm:max-w-md"
		style="transform: translateX(0%);"
	>
		{@render children()}
	</div>
{/if}
