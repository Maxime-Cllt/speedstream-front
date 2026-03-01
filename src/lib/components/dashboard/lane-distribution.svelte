<script lang="ts">
	import type { SpeedData } from '../../types/speed-data';
	import { Lane } from '../../types/speed-data';
	import { Route, Waves } from 'lucide-svelte';
	import Card from '../ui/card.svelte';
	import CardHeader from '../ui/card-header.svelte';
	import CardTitle from '../ui/card-title.svelte';
	import CardContent from '../ui/card-content.svelte';
	import CardDescription from '../ui/card-description.svelte';

	import EChart from '../ui/echart.svelte';

	interface Props {
		data: SpeedData[];
	}

	let { data }: Props = $props();

	let processedData = $derived.by(() => {
		const leftCount = data.filter((d) => d.lane === Lane.Left).length;
		const rightCount = data.filter((d) => d.lane === Lane.Right).length;
		const total = leftCount + rightCount;
		return {
			leftCount,
			rightCount,
			leftPercent: total > 0 ? Math.round((leftCount / total) * 100) : 0,
			rightPercent: total > 0 ? Math.round((rightCount / total) * 100) : 0
		};
	});

	let option = $derived({
		tooltip: {
			trigger: 'item',
			formatter: '{b}: {c} ({d}%)',
			backgroundColor: 'rgba(15, 23, 42, 0.95)',
			borderColor: 'rgba(255, 255, 255, 0.1)',
			textStyle: { color: '#f1f5f9', fontFamily: 'system-ui, sans-serif' },
			padding: [12, 16],
			cornerRadius: 8,
			extraCssText: 'box-shadow: 0 4px 20px rgba(0, 0, 0, 0.4); backdrop-filter: blur(8px);'
		},
		legend: {
			orient: 'vertical',
			left: 'left',
			textStyle: { color: '#94a3b8', fontFamily: 'system-ui, sans-serif' },
			itemWidth: 12,
			itemHeight: 8,
			itemGap: 16
		},
		series: [
			{
				name: 'Voies',
				type: 'pie',
				radius: ['45%', '75%'],
				center: ['55%', '50%'],
				avoidLabelOverlap: false,
				itemStyle: {
					borderRadius: 8,
					borderColor: 'rgba(15, 23, 42, 0.8)',
					borderWidth: 3
				},
				label: {
					show: true,
					position: 'outside',
					formatter: '{b}\n{d}%',
					color: '#f1f5f9',
					fontSize: 12,
					fontFamily: 'system-ui, sans-serif',
					lineHeight: 18
				},
				emphasis: {
					label: { show: true, fontSize: 14, fontWeight: 'bold' },
					itemStyle: {
						shadowBlur: 20,
						shadowOffsetX: 0,
						shadowColor: 'rgba(0, 0, 0, 0.5)'
					}
				},
				labelLine: {
					show: true,
					lineStyle: { color: 'rgba(255, 255, 255, 0.3)' },
					smooth: 0.2
				},
				data: [
					{
						value: processedData.leftCount,
						name: 'Voie gauche',
						itemStyle: { color: '#0ea5e9' }
					},
					{
						value: processedData.rightCount,
						name: 'Voie droite',
						itemStyle: { color: '#f97316' }
					}
				]
			}
		],
		animation: true,
		animationDuration: 1000,
		animationEasing: 'cubicOut'
	});
</script>

<Card class="overflow-hidden border-border/50 bg-gradient-to-b from-card to-card/50">
	<CardHeader class="pb-4">
		<CardTitle class="flex items-center gap-2 text-lg">
			<div class="flex h-8 w-8 items-center justify-center rounded-lg bg-primary/10">
				<Route class="h-4 w-4 text-primary" />
			</div>
			Répartition par voie
		</CardTitle>
		<CardDescription class="mt-1">Taux de passage entre voie gauche et voie droite</CardDescription>
	</CardHeader>
	<CardContent>
		{#if data.length === 0}
			<div
				class="flex h-[300px] flex-col items-center justify-center gap-3 rounded-xl border-2 border-dashed border-muted-foreground/20 bg-muted/5"
			>
				<div class="flex h-14 w-14 items-center justify-center rounded-full bg-muted">
					<Waves class="h-7 w-7 text-muted-foreground/50" />
				</div>
				<p class="text-sm font-medium text-muted-foreground">Aucune donnée disponible</p>
			</div>
		{:else}
			<EChart {option} style="height: 300px" />
			<div class="mt-4 grid grid-cols-2 gap-4">
				<div
					class="group relative overflow-hidden rounded-xl border border-sky-500/20 bg-gradient-to-br from-sky-500/10 to-transparent p-4 transition-all hover:border-sky-500/40"
				>
					<div
						class="absolute -top-4 -right-4 h-16 w-16 rounded-full bg-sky-500/10 blur-2xl transition-all duration-500 group-hover:bg-sky-500/20"
					></div>
					<div class="relative z-10">
						<div class="flex items-center gap-2">
							<div class="h-2.5 w-2.5 rounded-full bg-sky-500"></div>
							<span class="text-xs font-medium text-muted-foreground">Voie gauche</span>
						</div>
						<div class="mt-2 text-2xl font-bold text-sky-500">{processedData.leftCount}</div>
						<div class="text-xs text-muted-foreground/70">
							{processedData.leftPercent}% du trafic
						</div>
					</div>
				</div>
				<div
					class="group relative overflow-hidden rounded-xl border border-orange-500/20 bg-gradient-to-br from-orange-500/10 to-transparent p-4 transition-all hover:border-orange-500/40"
				>
					<div
						class="absolute -top-4 -right-4 h-16 w-16 rounded-full bg-orange-500/10 blur-2xl transition-all duration-500 group-hover:bg-orange-500/20"
					></div>
					<div class="relative z-10">
						<div class="flex items-center gap-2">
							<div class="h-2.5 w-2.5 rounded-full bg-orange-500"></div>
							<span class="text-xs font-medium text-muted-foreground">Voie droite</span>
						</div>
						<div class="mt-2 text-2xl font-bold text-orange-500">{processedData.rightCount}</div>
						<div class="text-xs text-muted-foreground/70">
							{processedData.rightPercent}% du trafic
						</div>
					</div>
				</div>
			</div>
		{/if}
	</CardContent>
</Card>
