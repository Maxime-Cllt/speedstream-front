<script lang="ts">
	import type { Snippet } from 'svelte';

	interface Option {
		value: string;
		label: string;
	}

	interface Props {
		value?: string;
		onValueChange?: (value: string) => void;
		options: Option[];
		placeholder?: string;
		class?: string;
	}

	let {
		value = $bindable(),
		onValueChange,
		options,
		placeholder = 'Select...',
		class: className = ''
	}: Props = $props();

	let isOpen = $state(false);
</script>

<div class={className + ' relative'}>
	<button
		type="button"
		class="border-input bg-background ring-offset-background placeholder:text-muted-foreground focus:ring-ring flex h-10 w-full items-center justify-between rounded-md border px-3 py-2 text-sm focus:ring-2 focus:ring-offset-2 focus:outline-none disabled:cursor-not-allowed disabled:opacity-50"
		onclick={() => (isOpen = !isOpen)}
	>
		<span class={value ? '' : 'text-muted-foreground'}
			>{value ? options.find((o) => o.value === value)?.label : placeholder}</span
		>
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width="24"
			height="24"
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			stroke-width="2"
			stroke-linecap="round"
			stroke-linejoin="round"
			class="h-4 w-4 opacity-50"
		>
			<path d="m6 9 6 6 6-6" />
		</svg>
	</button>

	{#if isOpen}
		<div
			class="bg-popover absolute z-50 mt-1 max-h-60 w-full overflow-auto rounded-md border p-1 shadow-md"
		>
			{#each options as option}
				<button
					type="button"
					class="hover:bg-accent hover:text-accent-foreground relative flex w-full cursor-default items-center rounded-sm px-2 py-1.5 text-sm outline-none select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50"
					class:bg-accent={value === option.value}
					onclick={() => {
						value = option.value;
						isOpen = false;
						onValueChange?.(option.value);
					}}
				>
					{option.label}
				</button>
			{/each}
		</div>
	{/if}
</div>
