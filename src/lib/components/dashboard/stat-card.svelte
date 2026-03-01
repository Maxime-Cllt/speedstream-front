<script lang="ts">
	import type { ComponentType } from 'svelte';
	import Card from '../ui/card.svelte';
	import CardHeader from '../ui/card-header.svelte';
	import CardContent from '../ui/card-content.svelte';
	import { Timer, TrendingUp, TrendingDown, Minus } from 'lucide-svelte';

	interface Props {
		class?: string;
		title: string;
		value: string | number;
		subtitle?: string;
		icon: ComponentType;
		isNewRecord?: boolean; // Record absolu (Violet)
		isPersonalBest?: boolean; // Record perso (Vert - optionnel)
		trend?: 'up' | 'down' | 'stable';
		trendValue?: string; // Ex: "-0.234s" ou "+1.5km/h"
	}

	let {
		class: className = '',
		title,
		value,
		subtitle,
		icon: Icon,
		isNewRecord = false,
		isPersonalBest = false,
		trend,
		trendValue
	}: Props = $props();

	// Style de la carte : Plus sombre, plus technique, aspect "dashboard"
	let cardClasses = $derived(
			[
				'group relative overflow-hidden transition-all duration-200 border bg-card',
				isNewRecord
						? 'border-purple-500/50 shadow-[0_0_15px_rgba(168,85,247,0.15)] hover:shadow-[0_0_25px_rgba(168,85,247,0.25)]'
						: 'border-border/40 hover:border-primary/50 hover:bg-muted/10',
				className
			]
					.filter(Boolean)
					.join(' ')
	);

	// Titre : Majuscules, espacé (tracking-wider) pour le style ingénierie
	let titleClasses = $derived(
			isNewRecord
					? 'text-purple-500 font-bold uppercase tracking-wider text-xs'
					: 'text-muted-foreground font-semibold uppercase tracking-wider text-xs'
	);

	// Valeur : Police monospace obligatoire pour l'aspect chrono/data
	let valueClasses = $derived(
			isNewRecord ? 'text-purple-500' : 'text-foreground'
	);

	// Icône : Fond technique
	let iconBgClasses = $derived(
			isNewRecord
					? 'bg-purple-500/10 text-purple-500'
					: 'bg-muted text-muted-foreground group-hover:bg-primary/10 group-hover:text-primary'
	);

	const TrendIcon = $derived(trend === 'up' ? TrendingUp : trend === 'down' ? TrendingDown : Minus);

	// Les couleurs de delta en course : Vert = plus rapide/meilleur, Rouge = plus lent/pire
	// (Attention : selon le KPI, "down" peut être positif, ex: temps au tour)
	const trendColor = $derived(
			trend === 'down' // Assumant qu'une baisse (de temps) est positive en course
					? 'text-emerald-500 bg-emerald-500/10'
					: trend === 'up'
							? 'text-rose-500 bg-rose-500/10'
							: 'text-muted-foreground bg-muted'
	);
</script>

<Card class={cardClasses}>
	{#if isNewRecord}
		<div class="absolute -top-10 -right-10 h-32 w-32 rounded-full bg-purple-500/10 blur-3xl"></div>
	{/if}

	{#if isNewRecord}
		<div class="absolute top-0 left-0 h-1 w-full bg-gradient-to-r from-purple-600 to-purple-400"></div>
	{:else if isPersonalBest}
		<div class="absolute top-0 left-0 h-1 w-full bg-gradient-to-r from-emerald-500 to-emerald-400"></div>
	{/if}

	<CardHeader class="relative z-10 flex flex-row items-center justify-between pb-2 pt-5">
		<h3 class={titleClasses}>
			{title}
		</h3>

		<div class="flex h-8 w-8 items-center justify-center rounded-md transition-colors {iconBgClasses}">
			{#if isNewRecord}
				<Timer class="h-4 w-4" /> {:else}
				<Icon class="h-4 w-4" />
			{/if}
		</div>
	</CardHeader>

	<CardContent class="relative z-10 pt-0">
		<div class="flex flex-col gap-1">
			<div class="flex items-baseline gap-2">
             <span class="font-mono text-3xl font-bold tracking-tight tabular-nums {valueClasses}">
                {value}
             </span>

				{#if trend && trendValue && !isNewRecord}
                <span class="font-mono text-sm font-medium px-1.5 py-0.5 rounded flex items-center gap-0.5 {trendColor}">
                   {#if trend === 'down'}-{:else if trend === 'up'}+{/if}{trendValue}
                </span>
				{/if}
			</div>

			<div class="mt-2 min-h-[20px]">
				{#if isNewRecord}
                <span class="inline-flex animate-pulse items-center rounded bg-purple-500 px-2 py-0.5 font-mono text-[10px] font-bold uppercase tracking-widest text-white">
                   Fastest Sector / Record
                </span>
				{:else if subtitle}
					<p class="font-mono text-xs text-muted-foreground/60">
						{subtitle}
					</p>
				{/if}
			</div>
		</div>
	</CardContent>
</Card>