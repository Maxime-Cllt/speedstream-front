<script lang="ts">
	import type { SpeedData } from '../../types/speed-data';
	import { format } from 'date-fns';
	import { Clock, TrendingUp, BarChart3, Waves } from 'lucide-svelte';
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
		const hourlyData = data.reduce(
			(acc, curr) => {
				const hour = format(new Date(curr.created_at), 'HH:00');
				if (!acc[hour]) acc[hour] = { speeds: [], count: 0 };
				acc[hour].speeds.push(curr.speed);
				acc[hour].count += 1;
				return acc;
			},
			{} as Record<string, { speeds: number[]; count: number }>
		);

		const hours = Object.keys(hourlyData).sort();
		const avgSpeeds = hours.map((hour) => {
			const speeds = hourlyData[hour].speeds;
			return Math.round((speeds.reduce((a, b) => a + b, 0) / speeds.length) * 10) / 10;
		});
		const counts = hours.map((hour) => hourlyData[hour].count);

		return { hours, avgSpeeds, counts };
	});

	let maxCount = $derived(Math.max(...processedData.counts, 1));

	let option = $derived({
		tooltip: {
			trigger: 'axis',
			axisPointer: {
				type: 'cross',
				crossStyle: { color: '#999' },
				lineStyle: { color: 'rgba(255, 255, 255, 0.3)', width: 1, type: 'dashed' }
			},
			backgroundColor: 'rgba(15, 23, 42, 0.95)',
			borderColor: 'rgba(255, 255, 255, 0.1)',
			textStyle: { color: '#f1f5f9', fontFamily: 'system-ui, sans-serif', fontSize: 12 },
			padding: [12, 16],
			cornerRadius: 8,
			extraCssText: 'box-shadow: 0 4px 20px rgba(0, 0, 0, 0.4); backdrop-filter: blur(8px);'
		},
		legend: {
			data: ['Vitesse moyenne', 'Nombre de passages'],
			textStyle: { color: '#94a3b8', fontFamily: 'system-ui, sans-serif' },
			top: 8,
			itemGap: 24
		},
		grid: { left: '2%', right: '2%', bottom: '2%', top: '18%', containLabel: true },
		xAxis: {
			type: 'category',
			data: processedData.hours,
			axisLabel: {
				color: '#64748b',
				fontFamily: 'system-ui, sans-serif',
				fontSize: 11,
				interval: Math.floor(processedData.hours.length / 10)
			},
			axisLine: { lineStyle: { color: 'rgba(148, 163, 184, 0.2)' } },
			axisTick: { show: false }
		},
		yAxis: [
			{
				type: 'value',
				name: 'km/h',
				position: 'left',
				nameTextStyle: {
					color: '#64748b',
					fontFamily: 'system-ui, sans-serif',
					fontSize: 11,
					padding: [0, 30, 0, 0]
				},
				axisLine: { show: false },
				axisTick: { show: false },
				axisLabel: { color: '#64748b', fontFamily: 'system-ui, sans-serif', fontSize: 11 },
				splitLine: { lineStyle: { color: 'rgba(148, 163, 184, 0.1)', type: 'dashed' } }
			},
			{
				type: 'value',
				name: 'Passages',
				position: 'right',
				nameTextStyle: {
					color: '#64748b',
					fontFamily: 'system-ui, sans-serif',
					fontSize: 11,
					padding: [0, 0, 0, 30]
				},
				axisLine: { show: false },
				axisTick: { show: false },
				axisLabel: { color: '#64748b', fontFamily: 'system-ui, sans-serif', fontSize: 11 },
				splitLine: { show: false }
			}
		],
		series: [
			{
				name: 'Vitesse moyenne',
				type: 'line',
				yAxisIndex: 0,
				data: processedData.avgSpeeds,
				smooth: 0.35,
				symbol: 'circle',
				symbolSize: 6,
				showSymbol: false,
				itemStyle: { color: '#ec4899' },
				lineStyle: {
					width: 3,
					shadowColor: 'rgba(236, 72, 153, 0.5)',
					shadowBlur: 8,
					shadowOffsetY: 4
				},
				areaStyle: {
					color: {
						type: 'linear',
						x: 0,
						y: 0,
						x2: 0,
						y2: 1,
						colorStops: [
							{ offset: 0, color: 'rgba(236, 72, 153, 0.25)' },
							{ offset: 0.5, color: 'rgba(236, 72, 153, 0.08)' },
							{ offset: 1, color: 'rgba(236, 72, 153, 0.02)' }
						]
					}
				},
				emphasis: { focus: 'series' }
			},
			{
				name: 'Nombre de passages',
				type: 'bar',
				yAxisIndex: 1,
				data: processedData.counts,
				itemStyle: {
					color: {
						type: 'linear',
						x: 0,
						y: 0,
						x2: 0,
						y2: 1,
						colorStops: [
							{ offset: 0, color: '#6366f1' },
							{ offset: 1, color: '#4f46e5' }
						]
					},
					borderRadius: [4, 4, 0, 0]
				},
				barWidth: '50%',
				emphasis: { focus: 'series' }
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
				<TrendingUp class="h-4 w-4 text-primary" />
			</div>
			Tendance horaire
		</CardTitle>
		<CardDescription class="mt-1">Évolution de la vitesse et du volume de trafic heure par heure</CardDescription>
	</CardHeader>
	<CardContent>
		{#if data.length === 0}
			<div
				class="flex h-[350px] flex-col items-center justify-center gap-3 rounded-xl border-2 border-dashed border-muted-foreground/20 bg-muted/5"
			>
				<div class="flex h-14 w-14 items-center justify-center rounded-full bg-muted">
					<Waves class="h-7 w-7 text-muted-foreground/50" />
				</div>
				<p class="text-sm font-medium text-muted-foreground">Aucune donnée disponible</p>
			</div>
		{:else}
			<EChart {option} style="height: 350px" />
			<div class="mt-4 flex items-center justify-between rounded-xl bg-muted/30 p-3">
				<div class="flex items-center gap-2">
					<div class="flex h-8 w-8 items-center justify-center rounded-lg bg-pink-500/10">
						<TrendingUp class="h-4 w-4 text-pink-500" />
					</div>
					<div>
						<div class="text-xs text-muted-foreground">Vitesse moy.</div>
						<div class="text-sm font-bold">
							{Math.round(
								processedData.avgSpeeds.reduce((a, b) => a + b, 0) /
									(processedData.avgSpeeds.length || 1)
							)} km/h
						</div>
					</div>
				</div>
				<div class="h-8 w-px bg-border"></div>
				<div class="flex items-center gap-2">
					<div class="flex h-8 w-8 items-center justify-center rounded-lg bg-indigo-500/10">
						<BarChart3 class="h-4 w-4 text-indigo-500" />
					</div>
					<div>
						<div class="text-xs text-muted-foreground">Total passages</div>
						<div class="text-sm font-bold">{processedData.counts.reduce((a, b) => a + b, 0)}</div>
					</div>
				</div>
			</div>
		{/if}
	</CardContent>
</Card>
