<script lang="ts">
	import type { SpeedData } from '../../types/speed-data';
	import { format } from 'date-fns';
	import { Activity, Waves } from 'lucide-svelte';
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
			backgroundColor: 'rgba(15, 23, 42, 0.95)',
			borderColor: 'rgba(255, 255, 255, 0.1)',
			textStyle: { color: '#f1f5f9', fontFamily: 'system-ui, sans-serif', fontSize: 12 },
			padding: [12, 16],
			cornerRadius: 8,
			extraCssText: 'box-shadow: 0 4px 20px rgba(0, 0, 0, 0.4); backdrop-filter: blur(8px);',
			formatter: (params: { data: [number, number, number] }) => {
				const hour = processedData.hours[params.data[0]];
				const sensor = processedData.sensors[params.data[1]];
				const value = params.data[2];
				return `<strong>${sensor}</strong><br/>${hour}<br/>Passages: <strong>${value}</strong>`;
			}
		},
		grid: { left: '18%', right: '4%', bottom: '18%', top: '3%', containLabel: false },
		xAxis: {
			type: 'category',
			data: processedData.hours,
			splitArea: { show: false },
			axisLabel: { color: '#64748b', fontFamily: 'system-ui, sans-serif', fontSize: 11 },
			axisLine: { lineStyle: { color: 'rgba(148, 163, 184, 0.2)' } },
			axisTick: { show: false }
		},
		yAxis: {
			type: 'category',
			data: processedData.sensors,
			splitArea: { show: false },
			axisLabel: { color: '#64748b', fontFamily: 'system-ui, sans-serif', fontSize: 11 },
			axisLine: { lineStyle: { color: 'rgba(148, 163, 184, 0.2)' } },
			axisTick: { show: false }
		},
		visualMap: {
			min: 0,
			max: processedData.maxValue,
			calculable: true,
			orient: 'horizontal',
			left: 'center',
			bottom: '0%',
			textStyle: { color: '#64748b', fontFamily: 'system-ui, sans-serif' },
			inRange: {
				color: [
					'#0f172a',
					'#1e3a5f',
					'#2563eb',
					'#3b82f6',
					'#60a5fa',
					'#93c5fd',
					'#bfdbfe',
					'#dbeafe'
				]
			},
			itemHeight: 8,
			itemWidth: 16,
			borderRadius: 4
		},
		series: [
			{
				name: 'Activité',
				type: 'heatmap',
				data: processedData.heatmapData,
				label: { show: false },
				itemStyle: {
					borderColor: 'rgba(15, 23, 42, 0.6)',
					borderWidth: 2,
					borderRadius: 3
				},
				emphasis: {
					itemStyle: {
						shadowBlur: 15,
						shadowColor: 'rgba(59, 130, 246, 0.6)',
						borderColor: '#60a5fa',
						borderWidth: 2
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
				<Activity class="h-4 w-4 text-primary" />
			</div>
			Carte d'activité
		</CardTitle>
		<CardDescription class="mt-1"
			>Intensité des passages par capteur et par heure de la journée</CardDescription
		>
	</CardHeader>
	<CardContent>
		{#if data.length === 0}
			<div
				class="flex h-[400px] flex-col items-center justify-center gap-3 rounded-xl border-2 border-dashed border-muted-foreground/20 bg-muted/5"
			>
				<div class="flex h-14 w-14 items-center justify-center rounded-full bg-muted">
					<Waves class="h-7 w-7 text-muted-foreground/50" />
				</div>
				<p class="text-sm font-medium text-muted-foreground">Aucune donnée disponible</p>
			</div>
		{:else}
			<EChart {option} style="height: 400px" />
		{/if}
	</CardContent>
</Card>
