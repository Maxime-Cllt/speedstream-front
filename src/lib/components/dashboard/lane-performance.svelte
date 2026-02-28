<script lang="ts">
	import type { SpeedData } from '../../types/speed-data';
	import { Lane } from '../../types/speed-data';
	import { ArrowLeftRight } from 'lucide-svelte';
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
		const leftLaneData = data.filter((d) => d.lane === Lane.Left);
		const rightLaneData = data.filter((d) => d.lane === Lane.Right);

		const calculateStats = (laneData: SpeedData[]) => {
			if (laneData.length === 0) return { avg: 0, max: 0, min: 0, count: 0 };
			const speeds = laneData.map((d) => d.speed);
			return {
				avg: Math.round((speeds.reduce((a, b) => a + b, 0) / speeds.length) * 10) / 10,
				max: Math.max(...speeds),
				min: Math.min(...speeds),
				count: laneData.length
			};
		};

		return {
			leftStats: calculateStats(leftLaneData),
			rightStats: calculateStats(rightLaneData)
		};
	});

	let option = $derived({
		tooltip: {
			trigger: 'axis',
			backgroundColor: 'rgba(0, 0, 0, 0.8)',
			borderColor: '#333',
			textStyle: { color: '#fff' },
			axisPointer: { type: 'shadow' }
		},
		legend: {
			data: ['Corridor Gauche', 'Corridor Droit'],
			textStyle: { color: '#999' },
			top: '0%'
		},
		grid: { left: '3%', right: '4%', bottom: '3%', top: '15%', containLabel: true },
		xAxis: {
			type: 'category',
			data: ['Vitesse Moyenne', 'Vitesse Max', 'Vitesse Min', 'Nombre de Passages'],
			axisLabel: { color: '#999', interval: 0, rotate: 15 },
			axisLine: { lineStyle: { color: '#999' } }
		},
		yAxis: {
			type: 'value',
			axisLabel: { color: '#999' },
			axisLine: { lineStyle: { color: '#999' } },
			splitLine: { lineStyle: { color: '#333', opacity: 0.3 } }
		},
		series: [
			{
				name: 'Corridor Gauche',
				type: 'bar',
				data: [
					processedData.leftStats.avg,
					processedData.leftStats.max,
					processedData.leftStats.min,
					processedData.leftStats.count
				],
				itemStyle: {
					color: {
						type: 'linear', x: 0, y: 0, x2: 0, y2: 1,
						colorStops: [
							{ offset: 0, color: '#3b82f6' },
							{ offset: 1, color: '#1d4ed8' }
						]
					},
					borderRadius: [4, 4, 0, 0]
				},
				barWidth: '40%'
			},
			{
				name: 'Corridor Droit',
				type: 'bar',
				data: [
					processedData.rightStats.avg,
					processedData.rightStats.max,
					processedData.rightStats.min,
					processedData.rightStats.count
				],
				itemStyle: {
					color: {
						type: 'linear', x: 0, y: 0, x2: 0, y2: 1,
						colorStops: [
							{ offset: 0, color: '#ec4899' },
							{ offset: 1, color: '#be185d' }
						]
					},
					borderRadius: [4, 4, 0, 0]
				},
				barWidth: '40%'
			}
		]
	});
</script>

<Card>
	<CardHeader>
		<CardTitle class="flex items-center gap-2">
			<ArrowLeftRight class="text-primary h-5 w-5" />
			Comparaison des corridors
		</CardTitle>
		<CardDescription>Performance comparative entre corridors gauche et droit</CardDescription>
	</CardHeader>
	<CardContent>
		{#if data.length === 0}
			<div class="text-muted-foreground flex h-[350px] items-center justify-center">
				Aucune donnée disponible
			</div>
		{:else}
			<EChart {option} style="height: 350px" />
			<div class="mt-4 grid grid-cols-2 gap-4">
				<div class="rounded-lg border border-blue-500/20 bg-blue-500/10 p-3">
					<div class="text-muted-foreground mb-1 text-sm">Corridor Gauche</div>
					<div class="text-2xl font-bold text-blue-500">{processedData.leftStats.count}</div>
					<div class="text-muted-foreground text-xs">passages enregistrés</div>
				</div>
				<div class="rounded-lg border border-pink-500/20 bg-pink-500/10 p-3">
					<div class="text-muted-foreground mb-1 text-sm">Corridor Droit</div>
					<div class="text-2xl font-bold text-pink-500">{processedData.rightStats.count}</div>
					<div class="text-muted-foreground text-xs">passages enregistrés</div>
				</div>
			</div>
		{/if}
	</CardContent>
</Card>
