<script lang="ts">
	import type { Snippet } from 'svelte';
	import type { HTMLButtonAttributes } from 'svelte/elements';

	interface Props extends HTMLButtonAttributes {
		variant?: 'default' | 'destructive' | 'outline' | 'secondary' | 'ghost' | 'link';
		size?: 'default' | 'sm' | 'lg' | 'icon';
		class?: string;
		children: Snippet;
	}

	let {
		variant = 'default',
		size = 'default',
		class: className = '',
		children,
		...rest
	}: Props = $props();

	const variantClasses = {
		default: 'bg-primary text-primary-foreground hover:bg-primary/90',
		destructive: 'bg-destructive text-destructive-foreground hover:bg-destructive/90',
		outline: 'border border-input bg-background hover:bg-accent hover:text-accent-foreground',
		secondary: 'bg-secondary text-secondary-foreground hover:bg-secondary/80',
		ghost: 'hover:bg-accent hover:text-accent-foreground',
		link: 'text-primary underline-offset-4 hover:underline'
	};

	const sizeClasses = {
		default: 'h-10 px-4 py-2',
		sm: 'h-9 rounded-md px-3',
		lg: 'h-11 rounded-md px-8',
		icon: 'h-10 w-10'
	};
</script>

<button
	class={className +
		' ring-offset-background focus-visible:ring-ring inline-flex items-center justify-center rounded-xl text-sm font-medium whitespace-nowrap transition-all duration-300 focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 hover:scale-[1.02] active:scale-[0.98] shadow-sm hover:shadow-md ' +
		variantClasses[variant] +
		' ' +
		sizeClasses[size]}
	{...rest}
>
	{@render children()}
</button>
