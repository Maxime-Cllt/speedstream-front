<script lang="ts">
	import type { Snippet } from 'svelte';

	interface Option {
		value: string;
		label: string;
	}

	interface Props {
		value?: string | string[];
		onValueChange?: (value: string) => void;
		options: Option[];
		placeholder?: string;
		class?: string;
		multiple?: boolean;
	}

	let {
		value = $bindable(),
		onValueChange,
		options,
		placeholder = 'Select...',
		class: className = '',
		multiple = false
	}: Props = $props();

	let isOpen = $state(false);

	function isSelected(optValue: string): boolean {
		if (multiple && Array.isArray(value)) {
			return value.includes(optValue);
		}
		return value === optValue;
	}

	function toggleOption(optValue: string) {
		if (multiple) {
			const currentValues = Array.isArray(value) ? value : [];
			const newValues = currentValues.includes(optValue)
				? currentValues.filter((v) => v !== optValue)
				: [...currentValues, optValue];
			value = newValues as string[];
			onValueChange?.(newValues.join(','));
		} else {
			value = optValue;
			isOpen = false;
			onValueChange?.(optValue);
		}
	}

	function getDisplayValue(): string {
		if (multiple && Array.isArray(value)) {
			if (value.length === 0) return placeholder;
			if (value.length === 1) {
				const firstVal = value[0];
				return firstVal
					? options.find((o) => o.value === firstVal)?.label || placeholder
					: placeholder;
			}
			return `${value.length} sélectionnés`;
		}
		const val = value as string | undefined;
		return val ? options.find((o) => o.value === val)?.label || placeholder : placeholder;
	}
</script>

<div class={className + ' relative'}>
	<button
		type="button"
		class="flex h-10 w-full items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:ring-2 focus:ring-ring focus:ring-offset-2 focus:outline-none disabled:cursor-not-allowed disabled:opacity-50"
		onclick={() => (isOpen = !isOpen)}
	>
		<span
			class={value && (Array.isArray(value) ? value.length > 0 : value)
				? ''
				: 'text-muted-foreground'}>{getDisplayValue()}</span
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
			class="absolute z-50 mt-1 max-h-60 w-full overflow-auto rounded-md border bg-popover p-1 shadow-md"
		>
			{#each options as option}
				<button
					type="button"
					class="relative flex w-full cursor-default items-center rounded-sm px-2 py-1.5 text-sm outline-none select-none hover:bg-accent hover:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50"
					class:bg-accent={isSelected(option.value)}
					onclick={() => toggleOption(option.value)}
				>
					{#if multiple}
						<span class="mr-2 flex h-4 w-4 items-center justify-center rounded border">
							{#if isSelected(option.value)}
								<svg
									xmlns="http://www.w3.org/2000/svg"
									viewBox="0 0 24 24"
									fill="none"
									stroke="currentColor"
									stroke-width="3"
									class="h-3 w-3"
								>
									<path d="M20 6 9 17l-5-5" />
								</svg>
							{/if}
						</span>
					{/if}
					{option.label}
				</button>
			{/each}
		</div>
	{/if}
</div>
