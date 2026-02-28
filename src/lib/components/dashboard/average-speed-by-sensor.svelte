<script lang="ts">
	import type { SpeedData } from '../../types/speed-data';
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

		return { sensorNames, averageSpeeds };
	});

	let option = $derived({
		tooltip: {
			trigger: 'axis',
			axisPointer: { type: 'shadow' },
			backgroundColor: 'rgba(0, 0, 0, 0.8)',
			borderColor: '#333',
			textStyle: { color: '#fff' },
			formatter: (params: Array<{ axisValue: string; value: number }>) =>
				`${params[0].axisValue}<br/>Vitesse moyenne: ${params[0].value} km/h`
		},
		grid: { left: '3%', right: '4%', bottom: '3%', top: '3%', containLabel: true },
		xAxis: {
			type: 'category',
			data: processedData.sensorNames,
			axisLabel: { rotate: 45, color: '#999', fontSize: 11 },
			axisLine: { lineStyle: { color: '#999' } }
		},
		yAxis: {
			type: 'value',
			name: 'Vitesse (km/h)',
			nameTextStyle: { color: '#999' },
			axisLine: { lineStyle: { color: '#999' } },
			splitLine: { lineStyle: { color: '#333', opacity: 0.3 } }
		},
		series: [
			{
				name: 'Vitesse moyenne',
				type: 'bar',
				data: processedData.averageSpeeds,
				itemStyle: {
					color: {
						type: 'linear', x: 0, y: 0, x2: 0, y2: 1,
						colorStops: [
							{ offset: 0, color: '#8b5cf6' },
							{ offset: 1, color: '#6366f1' }
						]
					},
					borderRadius: [4, 4, 0, 0]
				},
				label: {
					show: true,
					position: 'top',
					formatter: '{c} km/h',
					color: '#999',
					fontSize: 10
				}
			}
		]
	});
</script>

<Card>
	<CardHeader>
		<CardTitle>Vitesse moyenne par capteur</CardTitle>
		<CardDescription>Comparaison des performances sur chaque secteur</CardDescription>
	</CardHeader>
	<CardContent>
		{#if data.length === 0}
			<div class="text-muted-foreground flex h-[350px] items-center justify-center">
				Aucune donnée disponible
			</div>
		{:else}
			<EChart {option} style="height: 350px" />
		{/if}
	</CardContent>
</Card>
