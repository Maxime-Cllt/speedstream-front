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
		const sensors = Array.from(new Set(data.map((d) => d.sensor_name || 'Unknown')));
		const hours = Array.from(
			new Set(data.map((d) => format(new Date(d.created_at), 'HH:00')))
		).sort();

		const activityMap: Record<string, Record<string, number>> = {};
		sensors.forEach((sensor) => {
			activityMap[sensor] = {};
			hours.forEach((hour) => (activityMap[sensor][hour] = 0));
		});

		data.forEach((d) => {
			const sensor = d.sensor_name || 'Unknown';
			const hour = format(new Date(d.created_at), 'HH:00');
			if (activityMap[sensor] && activityMap[sensor][hour] !== undefined) {
				activityMap[sensor][hour] += 1;
			}
		});

		const heatmapData: [number, number, number][] = [];
		hours.forEach((hour, hourIdx) => {
			sensors.forEach((sensor, sensorIdx) => {
				heatmapData.push([hourIdx, sensorIdx, activityMap[sensor][hour] || 0]);
			});
		});

		const maxValue = Math.max(...heatmapData.map((d) => d[2]), 1);

		return { sensors, hours, heatmapData, maxValue };
	});

	let option = $derived({
		tooltip: {
			position: 'top',
			backgroundColor: 'rgba(0, 0, 0, 0.8)',
			borderColor: '#333',
			textStyle: { color: '#fff' },
			formatter: (params: { data: [number, number, number] }) => {
				const hour = processedData.hours[params.data[0]];
				const sensor = processedData.sensors[params.data[1]];
				const value = params.data[2];
				return `${sensor}<br/>${hour}<br/>Passages: ${value}`;
			}
		},
		grid: { left: '15%', right: '4%', bottom: '15%', top: '3%', containLabel: false },
		xAxis: {
			type: 'category',
			data: processedData.hours,
			splitArea: { show: true },
			axisLabel: { color: '#999', fontSize: 11 },
			axisLine: { lineStyle: { color: '#999' } }
		},
		yAxis: {
			type: 'category',
			data: processedData.sensors,
			splitArea: { show: true },
			axisLabel: { color: '#999', fontSize: 11 },
			axisLine: { lineStyle: { color: '#999' } }
		},
		visualMap: {
			min: 0,
			max: processedData.maxValue,
			calculable: true,
			orient: 'horizontal',
			left: 'center',
			bottom: '0%',
			textStyle: { color: '#999' },
			inRange: {
				color: ['#313695', '#4575b4', '#74add1', '#abd9e9', '#e0f3f8', '#ffffbf', '#fee090', '#fdae61', '#f46d43', '#d73027', '#a50026']
			}
		},
		series: [
			{
				name: 'Activité',
				type: 'heatmap',
				data: processedData.heatmapData,
				label: { show: false },
				emphasis: { itemStyle: { shadowBlur: 10, shadowColor: 'rgba(0, 0, 0, 0.5)' } }
			}
		]
	});
</script>

<Card>
	<CardHeader>
		<CardTitle>Heatmap d'activité</CardTitle>
		<CardDescription>Densité de passages par capteur et par heure</CardDescription>
	</CardHeader>
	<CardContent>
		{#if data.length === 0}
			<div class="text-muted-foreground flex h-[400px] items-center justify-center">
				Aucune donnée disponible
			</div>
		{:else}
			<EChart {option} style="height: 400px" />
		{/if}
	</CardContent>
</Card>
