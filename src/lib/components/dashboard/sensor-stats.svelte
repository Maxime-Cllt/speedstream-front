<script lang="ts">
	import type { SpeedData } from '../../types/speed-data';
	import { Radio, Activity, Waves } from 'lucide-svelte';
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
		const sensorData = data.reduce(
			(acc, curr) => {
				const sensorName = curr.sensor_name || 'Unknown';
				if (!acc[sensorName]) acc[sensorName] = { speeds: [], count: 0 };
				acc[sensorName].speeds.push(curr.speed);
				acc[sensorName].count++;
				return acc;
			},
			{} as Record<string, { speeds: number[]; count: number }>
		);

		const sensors = Object.keys(sensorData);
		const avgSpeeds = sensors.map(
			(sensor) =>
				Math.round(
					(sensorData[sensor].speeds.reduce((a, b) => a + b, 0) /
						sensorData[sensor].speeds.length) *
						10
				) / 10
		);

		const sortedIndices = avgSpeeds.map((_, i) => i).sort((a, b) => avgSpeeds[b] - avgSpeeds[a]);
		const sortedSensors = sortedIndices.map((i) => sensors[i]);
		const sortedAvgSpeeds = sortedIndices.map((i) => avgSpeeds[i]);
		const sortedCounts = sortedIndices.map((i) => sensorData[sensors[i]].count);

		return { sensors: sortedSensors, avgSpeeds: sortedAvgSpeeds, counts: sortedCounts };
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
			formatter: (params: Array<{ name: string; value: number }>) => {
				const sensor = params[0].name;
				const idx = processedData.sensors.indexOf(sensor);
				const count = processedData.counts[idx];
				return `<strong>${sensor}</strong><br/>Vitesse moyenne: <strong>${params[0].value} km/h</strong><br/>Passages: <strong>${count}</strong>`;
			}
		},
		grid: { left: '2%', right: '4%', bottom: '2%', top: '12%', containLabel: true },
		xAxis: {
			type: 'category',
			data: processedData.sensors,
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
				data: processedData.avgSpeeds,
				itemStyle: {
					color: {
						type: 'linear',
						x: 0,
						y: 0,
						x2: 0,
						y2: 1,
						colorStops: [
							{ offset: 0, color: '#ef4444' },
							{ offset: 1, color: '#ea580c' }
						]
					},
					borderRadius: [4, 4, 0, 0]
				},
				emphasis: {
					itemStyle: {
						shadowBlur: 10,
						shadowColor: 'rgba(239, 68, 68, 0.5)'
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
				<Radio class="h-4 w-4 text-primary" />
			</div>
			Statistiques par-capteur
		</CardTitle>
		<CardDescription class="mt-1">Vitesse moyenne par point de mesure</CardDescription>
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
					<div class="flex h-8 w-8 items-center justify-center rounded-lg bg-red-500/10">
						<Activity class="h-4 w-4 text-red-500" />
					</div>
					<div>
						<div class="text-xs text-muted-foreground">Total capteurs actifs</div>
						<div class="text-sm font-bold text-red-500">{processedData.sensors.length}</div>
					</div>
				</div>
			</div>
		{/if}
	</CardContent>
</Card>
