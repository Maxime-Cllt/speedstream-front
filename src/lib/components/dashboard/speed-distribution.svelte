<script lang="ts">
	import type { SpeedData } from '../../types/speed-data';
	import { BarChart3, Gauge, Waves } from 'lucide-svelte';
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

	const binSize = 25;

	let processedData = $derived.by(() => {
		const minSpeed = 0;
		const maxSpeed = 400;
		const bins: Record<string, number> = {};

		for (let i = minSpeed; i < maxSpeed; i += binSize) {
			bins[`${i}-${i + binSize}`] = 0;
		}

		data.forEach((d) => {
			const binIndex = Math.floor(d.speed / binSize) * binSize;
			const rangeLabel = `${binIndex}-${binIndex + binSize}`;
			if (bins[rangeLabel] !== undefined) bins[rangeLabel] += 1;
		});

		return { labels: Object.keys(bins), values: Object.values(bins) };
	});

	let peakRange = $derived.by(() => {
		const max = Math.max(...processedData.values);
		const idx = processedData.values.indexOf(max);
		return processedData.labels[idx] || '-';
	});

	let option = $derived({
		tooltip: {
			trigger: 'axis',
			axisPointer: { type: 'shadow' },
			backgroundColor: 'rgba(15, 23, 42, 0.95)',
			borderColor: 'rgba(255, 255, 255, 0.1)',
			textStyle: { color: '#f1f5f9', fontFamily: 'system-ui, sans-serif', fontSize: 12 },
			padding: [12, 16],
			cornerRadius: 8,
			extraCssText: 'box-shadow: 0 4px 20px rgba(0, 0, 0, 0.4); backdrop-filter: blur(8px);',
			formatter: (params: Array<{ axisValue: string; value: number }>) =>
				`<strong>${params[0].axisValue} km/h</strong><br/>Nombre de passages: <strong>${params[0].value}</strong>`
		},
		grid: { left: '2%', right: '4%', bottom: '2%', top: '3%', containLabel: true },
		xAxis: {
			type: 'category',
			data: processedData.labels,
			axisLabel: {
				rotate: 45,
				color: '#64748b',
				fontFamily: 'system-ui, sans-serif',
				fontSize: 11
			},
			axisLine: { lineStyle: { color: 'rgba(148, 163, 184, 0.2)' } },
			axisTick: { show: false }
		},
		yAxis: {
			type: 'value',
			name: 'Nombre',
			nameTextStyle: {
				color: '#64748b',
				fontFamily: 'system-ui, sans-serif',
				fontSize: 11,
				padding: [0, 0, 0, 30]
			},
			axisLine: { show: false },
			axisTick: { show: false },
			axisLabel: { color: '#64748b', fontFamily: 'system-ui, sans-serif', fontSize: 11 },
			splitLine: { lineStyle: { color: 'rgba(148, 163, 184, 0.1)', type: 'dashed' } }
		},
		series: [
			{
				name: 'Distribution',
				type: 'bar',
				data: processedData.values,
				itemStyle: {
					color: {
						type: 'linear',
						x: 0,
						y: 0,
						x2: 1,
						y2: 0,
						colorStops: [
							{ offset: 0, color: '#10b981' },
							{ offset: 0.5, color: '#14b8a6' },
							{ offset: 1, color: '#0d9488' }
						]
					},
					borderRadius: [4, 4, 0, 0]
				},
				emphasis: {
					itemStyle: {
						shadowBlur: 10,
						shadowColor: 'rgba(16, 185, 129, 0.5)'
					}
				}
			}
		],
		animation: true,
		animationDuration: 800,
		animationEasing: 'cubicOut'
	});
</script>

<Card class="overflow-hidden border-border/50 bg-gradient-to-b from-card to-card/50">
	<CardHeader class="pb-4">
		<CardTitle class="flex items-center gap-2 text-lg">
			<div class="flex h-8 w-8 items-center justify-center rounded-lg bg-primary/10">
				<BarChart3 class="h-4 w-4 text-primary" />
			</div>
			Distribution des vitesses
		</CardTitle>
		<CardDescription class="mt-1"
			>Répartition des vitesses par plages de {binSize} km/h</CardDescription
		>
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
			<div class="mt-4 flex items-center justify-center rounded-xl bg-muted/30 p-3">
				<div class="flex items-center gap-2">
					<div class="flex h-8 w-8 items-center justify-center rounded-lg bg-teal-500/10">
						<Gauge class="h-4 w-4 text-teal-500" />
					</div>
					<div>
						<div class="text-xs text-muted-foreground">Plage de vitesse la plus fréquente</div>
						<div class="text-sm font-bold text-teal-500">{peakRange} km/h</div>
					</div>
				</div>
			</div>
		{/if}
	</CardContent>
</Card>
