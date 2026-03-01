<script lang="ts">
	import type { ComponentType } from 'svelte';
	import Card from '../ui/card.svelte';
	import CardHeader from '../ui/card-header.svelte';
	import CardContent from '../ui/card-content.svelte';
	import { Trophy, TrendingUp, TrendingDown, Minus } from 'lucide-svelte';

	interface Props {
		class?: string;
		title: string;
		value: string | number;
		subtitle?: string;
		icon: ComponentType;
		isNewRecord?: boolean;
		trend?: 'up' | 'down' | 'stable';
		trendValue?: string;
	}

	let {
		class: className = '',
		title,
		value,
		subtitle,
		icon: Icon,
		isNewRecord = false,
		trend,
		trendValue
	}: Props = $props();

	let cardClasses = $derived(
		[
			'group relative overflow-hidden transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl',
			isNewRecord
				? 'border border-amber-500/50 bg-gradient-to-br from-amber-500/10 via-card to-card shadow-lg shadow-amber-500/10 hover:shadow-amber-500/20'
				: 'border-border/50 bg-gradient-to-br from-card via-card to-muted/20 shadow-sm hover:border-primary/30',
			className
		]
			.filter(Boolean)
			.join(' ')
	);

	let titleClasses = $derived(
		isNewRecord
			? 'text-amber-600 dark:text-amber-400 font-semibold'
			: 'text-muted-foreground font-medium'
	);

	let valueClasses = $derived(
		isNewRecord ? 'text-amber-600 dark:text-amber-400' : 'text-foreground'
	);

	let iconBgClasses = $derived(
		isNewRecord
			? 'bg-gradient-to-br from-amber-400 to-amber-600 shadow-lg shadow-amber-500/30'
			: 'bg-gradient-to-br from-primary/80 to-primary/40 shadow-md shadow-primary/20'
	);

	let iconClasses = $derived(
		isNewRecord ? 'h-5 w-5 text-white' : 'h-4 w-4 text-primary-foreground'
	);

	const TrendIcon = $derived(trend === 'up' ? TrendingUp : trend === 'down' ? TrendingDown : Minus);

	const trendColor = $derived(
		trend === 'up'
			? 'text-emerald-500'
			: trend === 'down'
				? 'text-rose-500'
				: 'text-muted-foreground'
	);
</script>

<Card class={cardClasses}>
	{#if isNewRecord}
		<div
			class="absolute -top-6 -right-6 h-24 w-24 rounded-full bg-amber-500/20 blur-3xl transition-all duration-500 group-hover:bg-amber-500/40"
		></div>
		<div
			class="absolute -bottom-4 -left-4 h-16 w-16 rounded-full bg-amber-400/10 blur-2xl transition-all duration-500 group-hover:bg-amber-400/30"
		></div>
	{:else}
		<div
			class="absolute -top-4 -right-4 h-20 w-20 rounded-full bg-primary/5 blur-2xl transition-all duration-500 group-hover:bg-primary/10"
		></div>
	{/if}

	<CardHeader class="relative z-10 flex flex-row items-center justify-between space-y-0 pb-3">
		<p class="text-sm tracking-wide {titleClasses}">
			{title}
		</p>

		<div
			class="flex h-10 w-10 items-center justify-center rounded-xl transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3 {iconBgClasses}"
		>
			{#if isNewRecord}
				<Trophy class={iconClasses} />
			{:else}
				<Icon class={iconClasses} />
			{/if}
		</div>
	</CardHeader>

	<CardContent class="relative z-10 pt-0">
		<div class="flex items-end justify-between">
			<div>
				<div class="text-4xl font-extrabold tracking-tight transition-colors {valueClasses}">
					{value}
				</div>
			</div>

			{#if isNewRecord}
				<span
					class="mb-1 inline-flex items-center rounded-full bg-amber-100 px-2.5 py-0.5 text-[10px] font-bold tracking-wider text-amber-700 uppercase shadow-sm dark:bg-amber-500/20 dark:text-amber-400"
				>
					<Trophy class="mr-1 h-3 w-3" />
					Record
				</span>
			{:else if trend && trendValue}
				<div
					class="flex items-center gap-1 rounded-full bg-muted/50 px-2 py-1 text-xs font-medium {trendColor}"
				>
					<TrendIcon class="h-3.5 w-3.5" />
					<span>{trendValue}</span>
				</div>
			{/if}
		</div>

		{#if subtitle && !isNewRecord}
			<p class="mt-2 text-xs text-muted-foreground/80">
				{subtitle}
			</p>
		{:else if isNewRecord}
			<p class="mt-2 text-sm font-medium text-amber-600/90 dark:text-amber-400/90">
				{subtitle ? subtitle : 'Nouveau record battu !'}
			</p>
		{/if}
	</CardContent>
</Card>
