<script lang="ts">
	import type { ComponentType } from 'svelte';
	import Card from '../ui/card.svelte';
	import CardHeader from '../ui/card-header.svelte';
	import CardTitle from '../ui/card-title.svelte';
	import CardContent from '../ui/card-content.svelte';
	import { Trophy } from 'lucide-svelte';

	interface Props {
		class?: string;
		title: string;
		value: string | number;
		subtitle?: string;
		icon: ComponentType;
		isNewRecord?: boolean;
	}

	let {
		class: className = '',
		title,
		value,
		subtitle,
		icon: Icon,
		isNewRecord = false
	}: Props = $props();

	// 1. Utilisation de $derived pour garder le template HTML ultra-propre
	let cardClasses = $derived([
		'group relative overflow-hidden transition-all duration-500 hover:-translate-y-1',
		isNewRecord
				? 'border border-amber-500/30 bg-gradient-to-br from-amber-500/5 via-background to-background shadow-[0_4px_20px_-4px_rgba(245,158,11,0.2)] hover:shadow-[0_8px_25px_-4px_rgba(245,158,11,0.3)]'
				: 'border-l-4 border-l-primary bg-card hover:shadow-md',
		className
	].filter(Boolean).join(' '));

	let titleClasses = $derived(
			isNewRecord ? 'text-amber-600 dark:text-amber-400 font-semibold' : 'text-muted-foreground font-medium'
	);

	let valueClasses = $derived(
			isNewRecord ? 'text-amber-600 dark:text-amber-400' : 'text-foreground'
	);
</script>

<Card class={cardClasses}>
	{#if isNewRecord}
		<div class="pointer-events-none absolute -right-8 -top-8 h-32 w-32 rounded-full bg-amber-500/20 blur-2xl transition-all duration-500 group-hover:bg-amber-500/30"></div>
	{/if}

	<CardHeader class="relative z-10 flex flex-row items-center justify-between space-y-0 pb-2">
		<CardTitle class="text-sm {titleClasses}">
			{title}
		</CardTitle>

		<div class="relative flex h-8 w-8 items-center justify-center rounded-full transition-transform duration-300 group-hover:scale-110 {isNewRecord ? 'bg-amber-100 dark:bg-amber-900/30' : 'bg-muted/50'}">
			{#if isNewRecord}
				<Trophy class="h-4 w-4 text-amber-500 drop-shadow-sm" />
			{:else}
				<Icon class="h-4 w-4 text-muted-foreground" />
			{/if}
		</div>
	</CardHeader>

	<CardContent class="relative z-10">
		<div class="flex items-baseline gap-2">
			<div class="text-3xl font-bold tracking-tight transition-colors {valueClasses}">
				{value}
			</div>

			{#if isNewRecord}
              <span class="inline-flex items-center rounded-full bg-amber-100 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-amber-700 dark:bg-amber-500/20 dark:text-amber-400">
                 Record
              </span>
			{/if}
		</div>

		{#if subtitle && !isNewRecord}
			<p class="mt-1 text-xs text-muted-foreground">
				{subtitle}
			</p>
		{:else if isNewRecord}
			<p class="mt-1 text-xs font-medium text-amber-600/80 dark:text-amber-400/80">
				{subtitle ? subtitle : 'Superbe performance !'}
			</p>
		{/if}
	</CardContent>
</Card>