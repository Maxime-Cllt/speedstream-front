<script lang="ts">
	import type { SpeedData } from '../../types/speed-data';
	import { Radio, Gauge, Waves } from 'lucide-svelte';
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
		const sensorStats = data.reduce(
			(acc, curr) => {
				const sensor = curr.sensor_name || 'Unknown';
				if (!acc[sensor]) acc[sensor] = { total: 0, count: 0 };
				acc[sensor].total += curr.speed;
				acc[sensor].count += 1;
				return acc;
			},
			{} as Record<string, { total: number; count: number }>
		);

		const sensorNames = Object.keys(sensorStats);
		const averageSpeeds = sensorNames.map(
			(sensor) => Math.round((sensorStats[sensor].total / sensorStats[sensor].count) * 10) / 10
		);

		const sortedIndices = averageSpeeds
			.map((_, i) => i)
			.sort((a, b) => averageSpeeds[b] - averageSpeeds[a]);
		const sortedNames = sortedIndices.map((i) => sensorNames[i]);
		const sortedSpeeds = sortedIndices.map((i) => averageSpeeds[i]);

		return { sensorNames: sortedNames, averageSpeeds: sortedSpeeds };
	});

	let maxSpeed = $derived(Math.max(...processedData.averageSpeeds, 1));

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
				`<strong>${params[0].axisValue}</strong><br/>Vitesse moyenne: <strong>${params[0].value} km/h</strong>`
		},
		grid: { left: '2%', right: '4%', bottom: '2%', top: '3%', containLabel: true },
		xAxis: {
			type: 'category',
			data: processedData.sensorNames,
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
			name: 'km/h',
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
		series: [
			{
				name: 'Vitesse moyenne',
				type: 'bar',
				data: processedData.averageSpeeds,
				itemStyle: {
					color: {
						type: 'linear',
						x: 0,
						y: 0,
						x2: 0,
						y2: 1,
						colorStops: [
							{ offset: 0, color: '#8b5cf6' },
							{ offset: 1, color: '#6366f1' }
						]
					},
					borderRadius: [4, 4, 0, 0]
				},
				emphasis: {
					itemStyle: {
						shadowBlur: 10,
						shadowColor: 'rgba(139, 92, 246, 0.5)'
					}
				},
				label: {
					show: true,
					position: 'top',
					formatter: '{c}',
					color: '#94a3b8',
					fontSize: 10,
					fontFamily: 'system-ui, sans-serif'
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
				<Gauge class="h-4 w-4 text-primary" />
			</div>
			Vitesse moyenne par capteur
		</CardTitle>
		<CardDescription class="mt-1"
			>Vitesses moyennes comparées entre les capteurs actifs</CardDescription
		>
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
			<div class="mt-4 flex items-center justify-center rounded-xl bg-muted/30 p-3">
				<div class="flex items-center gap-2">
					<div class="flex h-8 w-8 items-center justify-center rounded-lg bg-violet-500/10">
						<Gauge class="h-4 w-4 text-violet-500" />
					</div>
					<div>
						<div class="text-xs text-muted-foreground">Vitesse la plus élevée</div>
						<div class="text-sm font-bold text-violet-500">
							{Math.max(...processedData.averageSpeeds)} km/h
						</div>
					</div>
				</div>
			</div>
		{/if}
	</CardContent>
</Card>
