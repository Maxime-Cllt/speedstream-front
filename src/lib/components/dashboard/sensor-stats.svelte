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
				Math.round((sensorData[sensor].speeds.reduce((a, b) => a + b, 0) / sensorData[sensor].speeds.length) * 10) / 10
		);

		return { sensorData, sensors, avgSpeeds };
	});

	let option = $derived({
		tooltip: {
			trigger: 'axis',
			axisPointer: { type: 'shadow' },
			backgroundColor: 'rgba(0, 0, 0, 0.8)',
			borderColor: '#333',
			textStyle: { color: '#fff' },
			formatter: (params: Array<{ name: string; value: number }>) => {
				const sensor = params[0].name;
				const avgSpeed = params[0].value;
				const count = processedData.sensorData[sensor]?.count ?? 0;
				return `${sensor}<br/>Vitesse moyenne: ${avgSpeed} km/h<br/>Passages: ${count}`;
			}
		},
		grid: { left: '3%', right: '4%', bottom: '3%', top: '10%', containLabel: true },
		xAxis: {
			type: 'category',
			data: processedData.sensors,
			axisLabel: { rotate: 45, color: '#666' },
			axisLine: { lineStyle: { color: '#999' } }
		},
		yAxis: {
			type: 'value',
			name: 'Vitesse moy. (km/h)',
			nameTextStyle: { color: '#999' },
			axisLine: { lineStyle: { color: '#999' } },
			splitLine: { lineStyle: { color: '#333', opacity: 0.3 } }
		},
		series: [
			{
				name: 'Vitesse moyenne',
				type: 'bar',
				data: processedData.avgSpeeds,
				itemStyle: {
					color: {
						type: 'linear',
						x: 0, y: 0, x2: 0, y2: 1,
						colorStops: [
							{ offset: 0, color: '#dc2626' },
							{ offset: 1, color: '#ea580c' }
						]
					},
					borderRadius: [4, 4, 0, 0]
				}
			}
		]
	});
</script>

<Card>
	<CardHeader>
		<CardTitle>Statistiques par capteur</CardTitle>
		<CardDescription>Vitesse moyenne par point de mesure</CardDescription>
	</CardHeader>
	<CardContent>
		{#if data.length === 0}
			<div class="text-muted-foreground flex h-[300px] items-center justify-center">
				Aucune donnée disponible
			</div>
		{:else}
			<EChart {option} style="height: 300px" />
		{/if}
	</CardContent>
</Card>
