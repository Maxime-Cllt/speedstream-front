<script lang="ts">
	import type { SpeedData } from '../../types/speed-data';
	import { format } from 'date-fns';
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

	let option = $derived({
		tooltip: {
			trigger: 'axis',
			axisPointer: { type: 'cross' },
			backgroundColor: 'rgba(0, 0, 0, 0.8)',
			borderColor: '#333',
			textStyle: { color: '#fff' }
		},
		legend: {
			data: ['Vitesse moyenne', 'Nombre de passages'],
			textStyle: { color: '#999' },
			top: '0%'
		},
		grid: { left: '3%', right: '4%', bottom: '3%', top: '12%', containLabel: true },
		xAxis: {
			type: 'category',
			data: processedData.hours,
			axisLabel: { color: '#999' },
			axisLine: { lineStyle: { color: '#999' } }
		},
		yAxis: [
			{
				type: 'value',
				name: 'Vitesse (km/h)',
				position: 'left',
				nameTextStyle: { color: '#999' },
				axisLine: { lineStyle: { color: '#999' } },
				axisLabel: { color: '#999' },
				splitLine: { lineStyle: { color: '#333', opacity: 0.3 } }
			},
			{
				type: 'value',
				name: 'Passages',
				position: 'right',
				nameTextStyle: { color: '#999' },
				axisLine: { lineStyle: { color: '#999' } },
				axisLabel: { color: '#999' },
				splitLine: { show: false }
			}
		],
		series: [
			{
				name: 'Vitesse moyenne',
				type: 'line',
				yAxisIndex: 0,
				data: processedData.avgSpeeds,
				smooth: true,
				itemStyle: { color: '#ec4899' },
				lineStyle: { width: 3 },
				symbol: 'circle',
				symbolSize: 8,
				areaStyle: {
					color: {
						type: 'linear', x: 0, y: 0, x2: 0, y2: 1,
						colorStops: [
							{ offset: 0, color: 'rgba(236, 72, 153, 0.3)' },
							{ offset: 1, color: 'rgba(236, 72, 153, 0.05)' }
						]
					}
				}
			},
			{
				name: 'Nombre de passages',
				type: 'bar',
				yAxisIndex: 1,
				data: processedData.counts,
				itemStyle: { color: 'rgba(99, 102, 241, 0.6)', borderRadius: [4, 4, 0, 0] }
			}
		]
	});
</script>

<Card>
	<CardHeader>
		<CardTitle>Tendance horaire</CardTitle>
		<CardDescription>Vitesse moyenne et volume d'activité par heure</CardDescription>
	</CardHeader>
	<CardContent>
		{#if data.length === 0}
			<div class="text-muted-foreground flex h-87.5 items-center justify-center">
				Aucune donnée disponible
			</div>
		{:else}
			<EChart {option} style="height: 350px" />
		{/if}
	</CardContent>
</Card>
