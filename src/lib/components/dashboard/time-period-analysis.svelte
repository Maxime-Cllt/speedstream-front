<script lang="ts">
	import type { SpeedData } from '../../types/speed-data';
	import { Clock } from 'lucide-svelte';
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

	const periods = ['Matin (6h-12h)', 'Après-midi (12h-18h)', 'Soirée (18h-22h)', 'Nuit (22h-6h)'];

	function getTimePeriod(hour: number): string {
		if (hour >= 6 && hour < 12) return 'Matin (6h-12h)';
		if (hour >= 12 && hour < 18) return 'Après-midi (12h-18h)';
		if (hour >= 18 && hour < 22) return 'Soirée (18h-22h)';
		return 'Nuit (22h-6h)';
	}

	let processedData = $derived.by(() => {
		const periodData = data.reduce(
			(acc, curr) => {
				const hour = new Date(curr.created_at).getHours();
				const period = getTimePeriod(hour);
				if (!acc[period]) acc[period] = { speeds: [], count: 0 };
				acc[period].speeds.push(curr.speed);
				acc[period].count += 1;
				return acc;
			},
			{} as Record<string, { speeds: number[]; count: number }>
		);

		const periodStats = periods.map((period) => {
			const pd = periodData[period];
			if (!pd || pd.speeds.length === 0) return { period, avgSpeed: 0, maxSpeed: 0, count: 0 };
			const avgSpeed = pd.speeds.reduce((a, b) => a + b, 0) / pd.speeds.length;
			return {
				period,
				avgSpeed: Math.round(avgSpeed * 10) / 10,
				maxSpeed: Math.round(Math.max(...pd.speeds) * 10) / 10,
				count: pd.count
			};
		});

		return { periods, periodStats };
	});

	let mostActivePeriod = $derived(
		processedData.periodStats.reduce((max, curr) => (curr.count > max.count ? curr : max), {
			period: '-',
			avgSpeed: 0,
			maxSpeed: 0,
			count: 0
		})
	);

	let option = $derived({
		tooltip: {
			trigger: 'axis',
			backgroundColor: 'rgba(0, 0, 0, 0.8)',
			borderColor: '#333',
			textStyle: { color: '#fff' },
			axisPointer: { type: 'shadow' }
		},
		legend: {
			data: ['Vitesse moyenne', 'Vitesse max', 'Nombre de passages'],
			textStyle: { color: '#999' },
			top: '0%'
		},
		grid: { left: '3%', right: '4%', bottom: '3%', top: '15%', containLabel: true },
		xAxis: {
			type: 'category',
			data: processedData.periods,
			axisLabel: { color: '#999', interval: 0, rotate: 15 },
			axisLine: { lineStyle: { color: '#999' } }
		},
		yAxis: [
			{
				type: 'value',
				name: 'Vitesse (km/h)',
				position: 'left',
				nameTextStyle: { color: '#999' },
				axisLabel: { color: '#999' },
				axisLine: { lineStyle: { color: '#999' } },
				splitLine: { lineStyle: { color: '#333', opacity: 0.3 } }
			},
			{
				type: 'value',
				name: 'Passages',
				position: 'right',
				nameTextStyle: { color: '#999' },
				axisLabel: { color: '#999' },
				axisLine: { lineStyle: { color: '#999' } },
				splitLine: { show: false }
			}
		],
		series: [
			{
				name: 'Vitesse moyenne',
				type: 'bar',
				yAxisIndex: 0,
				data: processedData.periodStats.map((s) => s.avgSpeed),
				itemStyle: {
					color: {
						type: 'linear', x: 0, y: 0, x2: 0, y2: 1,
						colorStops: [
							{ offset: 0, color: '#3b82f6' },
							{ offset: 1, color: '#1d4ed8' }
						]
					},
					borderRadius: [4, 4, 0, 0]
				}
			},
			{
				name: 'Vitesse max',
				type: 'bar',
				yAxisIndex: 0,
				data: processedData.periodStats.map((s) => s.maxSpeed),
				itemStyle: {
					color: {
						type: 'linear', x: 0, y: 0, x2: 0, y2: 1,
						colorStops: [
							{ offset: 0, color: '#10b981' },
							{ offset: 1, color: '#059669' }
						]
					},
					borderRadius: [4, 4, 0, 0]
				}
			},
			{
				name: 'Nombre de passages',
				type: 'line',
				yAxisIndex: 1,
				data: processedData.periodStats.map((s) => s.count),
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
			}
		]
	});
</script>

<Card>
	<CardHeader>
		<CardTitle class="flex items-center gap-2">
			<Clock class="text-primary h-5 w-5" />
			Analyse par période
		</CardTitle>
		<CardDescription>Vitesses et activité selon les périodes de la journée</CardDescription>
	</CardHeader>
	<CardContent>
		{#if data.length === 0}
			<div class="text-muted-foreground flex h-[350px] items-center justify-center">
				Aucune donnée disponible
			</div>
		{:else}
			<EChart {option} style="height: 350px" />
			<div class="border-primary/20 bg-primary/10 mt-4 rounded-lg border p-3">
				<div class="flex items-center justify-between">
					<div>
						<div class="text-muted-foreground text-sm">Période la plus active</div>
						<div class="text-primary text-lg font-bold">{mostActivePeriod.period}</div>
					</div>
					<div class="text-right">
						<div class="text-muted-foreground text-sm">Passages</div>
						<div class="text-lg font-bold">{mostActivePeriod.count}</div>
					</div>
				</div>
			</div>
		{/if}
	</CardContent>
</Card>
