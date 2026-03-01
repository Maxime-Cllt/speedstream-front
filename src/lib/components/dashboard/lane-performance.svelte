<script lang="ts">
	import type { SpeedData } from '../../types/speed-data';
	import { Lane } from '../../types/speed-data';
	import { ArrowLeftRight, Gauge, Waves } from 'lucide-svelte';
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
			backgroundColor: 'rgba(15, 23, 42, 0.95)',
			borderColor: 'rgba(255, 255, 255, 0.1)',
			textStyle: { color: '#f1f5f9', fontFamily: 'system-ui, sans-serif', fontSize: 12 },
			padding: [12, 16],
			cornerRadius: 8,
			extraCssText: 'box-shadow: 0 4px 20px rgba(0, 0, 0, 0.4); backdrop-filter: blur(8px);',
			axisPointer: { type: 'shadow' }
		},
		legend: {
			data: ['Corridor Gauche', 'Corridor Droit'],
			textStyle: { color: '#94a3b8', fontFamily: 'system-ui, sans-serif' },
			top: 8,
			itemGap: 24
		},
		grid: { left: '2%', right: '2%', bottom: '2%', top: '18%', containLabel: true },
		xAxis: {
			type: 'category',
			data: ['Vitesse Moyenne', 'Vitesse Max', 'Vitesse Min', 'Passages'],
			axisLabel: { color: '#64748b', fontFamily: 'system-ui, sans-serif', fontSize: 11 },
			axisLine: { lineStyle: { color: 'rgba(148, 163, 184, 0.2)' } },
			axisTick: { show: false }
		},
		yAxis: {
			type: 'value',
			axisLabel: { color: '#64748b', fontFamily: 'system-ui, sans-serif', fontSize: 11 },
			axisLine: { show: false },
			axisTick: { show: false },
			splitLine: { lineStyle: { color: 'rgba(148, 163, 184, 0.1)', type: 'dashed' } }
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
						type: 'linear',
						x: 0,
						y: 0,
						x2: 0,
						y2: 1,
						colorStops: [
							{ offset: 0, color: '#0ea5e9' },
							{ offset: 1, color: '#0284c7' }
						]
					},
					borderRadius: [4, 4, 0, 0]
				},
				barWidth: '35%'
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
						type: 'linear',
						x: 0,
						y: 0,
						x2: 0,
						y2: 1,
						colorStops: [
							{ offset: 0, color: '#ec4899' },
							{ offset: 1, color: '#db2777' }
						]
					},
					borderRadius: [4, 4, 0, 0]
				},
				barWidth: '35%'
			}
		],
		animation: true,
		animationDuration: 800,
		animationEasing: 'cubicOut'
	});
</script>

<Card class="overflow-hidden border-border/50 bg-gradient-to-b from-card to-card/50">
	<CardHeader>
		<CardTitle class="flex items-center gap-2 text-lg">
			<div class="flex h-8 w-8 items-center justify-center rounded-lg bg-primary/10">
				<ArrowLeftRight class="h-4 w-4 text-primary" />
			</div>
			Performance par corridor
		</CardTitle>
		<CardDescription class="mt-1"
			>Vitesse, max, min et volume comparés entre voie gauche et voie droite</CardDescription
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
			<div class="mt-4 grid grid-cols-2 gap-4">
				<div
					class="group relative overflow-hidden rounded-xl border border-sky-500/30 bg-gradient-to-br from-sky-500/10 to-transparent p-4 transition-all hover:border-sky-500/50"
				>
					<div
						class="absolute -top-4 -right-4 h-16 w-16 rounded-full bg-sky-500/10 blur-2xl transition-all duration-500 group-hover:bg-sky-500/20"
					></div>
					<div class="relative z-10">
						<div class="mb-3 flex items-center gap-2">
							<div class="h-2.5 w-2.5 rounded-full bg-sky-500"></div>
							<span class="text-sm font-semibold text-sky-500">Corridor Gauche</span>
						</div>
						<div class="text-3xl font-bold text-sky-500">{processedData.leftStats.count}</div>
						<div class="text-xs text-muted-foreground/70">passages enregistrés</div>
						<div class="mt-3 flex items-center gap-3 text-xs">
							<span class="flex items-center gap-1 text-muted-foreground">
								<Gauge class="h-3 w-3" />
								{processedData.leftStats.avg} km/h moy.
							</span>
						</div>
					</div>
				</div>
				<div
					class="group relative overflow-hidden rounded-xl border border-pink-500/30 bg-gradient-to-br from-pink-500/10 to-transparent p-4 transition-all hover:border-pink-500/50"
				>
					<div
						class="absolute -top-4 -right-4 h-16 w-16 rounded-full bg-pink-500/10 blur-2xl transition-all duration-500 group-hover:bg-pink-500/20"
					></div>
					<div class="relative z-10">
						<div class="mb-3 flex items-center gap-2">
							<div class="h-2.5 w-2.5 rounded-full bg-pink-500"></div>
							<span class="text-sm font-semibold text-pink-500">Corridor Droit</span>
						</div>
						<div class="text-3xl font-bold text-pink-500">{processedData.rightStats.count}</div>
						<div class="text-xs text-muted-foreground/70">passages enregistrés</div>
						<div class="mt-3 flex items-center gap-3 text-xs">
							<span class="flex items-center gap-1 text-muted-foreground">
								<Gauge class="h-3 w-3" />
								{processedData.rightStats.avg} km/h moy.
							</span>
						</div>
					</div>
				</div>
			</div>
		{/if}
	</CardContent>
</Card>
