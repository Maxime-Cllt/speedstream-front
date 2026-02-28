<script lang="ts">
	import type { Snippet } from 'svelte';
	import type { HTMLLabelAttributes } from 'svelte/elements';

	interface Props extends HTMLLabelAttributes {
		class?: string;
		children: Snippet;
	}

	let { class: className = '', children, ...rest }: Props = $props();
</script>

<label
	class={className +
		' text-sm leading-none font-medium peer-disabled:cursor-not-allowed peer-disabled:opacity-70'}
	{...rest}
>
	{@render children()}
</label>
