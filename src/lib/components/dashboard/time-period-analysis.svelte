<script lang="ts">
	import type { SpeedData } from '../../types/speed-data';
	import { Clock, Sunrise, Sun, Sunset, Moon, Activity, Zap } from 'lucide-svelte';
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

	const periodIcons = {
		'Matin (6h-12h)': Sunrise,
		'Après-midi (12h-18h)': Sun,
		'Soirée (18h-22h)': Sunset,
		'Nuit (22h-6h)': Moon
	};

	const periodColors = {
		'Matin (6h-12h)': {
			bg: 'from-amber-500/20 to-amber-500/5',
			border: 'border-amber-500/30',
			text: 'text-amber-500',
			icon: 'text-amber-400'
		},
		'Après-midi (12h-18h)': {
			bg: 'from-orange-500/20 to-orange-500/5',
			border: 'border-orange-500/30',
			text: 'text-orange-500',
			icon: 'text-orange-400'
		},
		'Soirée (18h-22h)': {
			bg: 'from-purple-500/20 to-purple-500/5',
			border: 'border-purple-500/30',
			text: 'text-purple-500',
			icon: 'text-purple-400'
		},
		'Nuit (22h-6h)': {
			bg: 'from-indigo-500/20 to-indigo-500/5',
			border: 'border-indigo-500/30',
			text: 'text-indigo-500',
			icon: 'text-indigo-400'
		}
	};

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

	let maxCount = $derived(Math.max(...processedData.periodStats.map((p) => p.count), 1));

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
			data: ['Vitesse moyenne', 'Vitesse max', 'Nombre de passages'],
			textStyle: { color: '#94a3b8', fontFamily: 'system-ui, sans-serif' },
			top: 8,
			itemGap: 24
		},
		grid: { left: '2%', right: '2%', bottom: '2%', top: '20%', containLabel: true },
		xAxis: {
			type: 'category',
			data: processedData.periods,
			axisLabel: {
				color: '#64748b',
				fontFamily: 'system-ui, sans-serif',
				fontSize: 11,
				interval: 0
			},
			axisLine: { lineStyle: { color: 'rgba(148, 163, 184, 0.2)' } },
			axisTick: { show: false }
		},
		yAxis: [
			{
				type: 'value',
				name: 'km/h',
				position: 'left',
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
			{
				type: 'value',
				name: 'Passages',
				position: 'right',
				nameTextStyle: {
					color: '#64748b',
					fontFamily: 'system-ui, sans-serif',
					fontSize: 11,
					padding: [0, 0, 0, 30]
				},
				axisLine: { show: false },
				axisTick: { show: false },
				axisLabel: { color: '#64748b', fontFamily: 'system-ui, sans-serif', fontSize: 11 },
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
						type: 'linear',
						x: 0,
						y: 0,
						x2: 0,
						y2: 1,
						colorStops: [
							{ offset: 0, color: '#3b82f6' },
							{ offset: 1, color: '#1d4ed8' }
						]
					},
					borderRadius: [4, 4, 0, 0]
				},
				barWidth: '30%'
			},
			{
				name: 'Vitesse max',
				type: 'bar',
				yAxisIndex: 0,
				data: processedData.periodStats.map((s) => s.maxSpeed),
				itemStyle: {
					color: {
						type: 'linear',
						x: 0,
						y: 0,
						x2: 0,
						y2: 1,
						colorStops: [
							{ offset: 0, color: '#10b981' },
							{ offset: 1, color: '#059669' }
						]
					},
					borderRadius: [4, 4, 0, 0]
				},
				barWidth: '30%'
			},
			{
				name: 'Nombre de passages',
				type: 'line',
				yAxisIndex: 1,
				data: processedData.periodStats.map((s) => s.count),
				smooth: 0.35,
				symbol: 'circle',
				symbolSize: 8,
				showSymbol: false,
				itemStyle: { color: '#ec4899' },
				lineStyle: {
					width: 3,
					shadowColor: 'rgba(236, 72, 153, 0.5)',
					shadowBlur: 8,
					shadowOffsetY: 4
				},
				areaStyle: {
					color: {
						type: 'linear',
						x: 0,
						y: 0,
						x2: 0,
						y2: 1,
						colorStops: [
							{ offset: 0, color: 'rgba(236, 72, 153, 0.25)' },
							{ offset: 1, color: 'rgba(236, 72, 153, 0.02)' }
						]
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
				<Sun class="h-4 w-4 text-primary" />
			</div>
			Analyse par période
		</CardTitle>
		<CardDescription class="mt-1"
			>Performance par période — matin, après-midi, soirée et nuit</CardDescription
		>
	</CardHeader>
	<CardContent>
		{#if data.length === 0}
			<div
				class="flex h-[350px] flex-col items-center justify-center gap-3 rounded-xl border-2 border-dashed border-muted-foreground/20 bg-muted/5"
			>
				<div class="flex h-14 w-14 items-center justify-center rounded-full bg-muted">
					<Activity class="h-7 w-7 text-muted-foreground/50" />
				</div>
				<p class="text-sm font-medium text-muted-foreground">Aucune donnée disponible</p>
			</div>
		{:else}
			<EChart {option} style="height: 350px" />
			<div class="mt-4 grid grid-cols-2 gap-3 lg:grid-cols-4">
				{#each processedData.periodStats as stat}
					{@const colors = periodColors[stat.period as keyof typeof periodColors]}
					{@const Icon = periodIcons[stat.period as keyof typeof periodIcons]}
					<div
						class="group relative overflow-hidden rounded-xl border {colors.border} bg-gradient-to-br {colors.bg} p-3 transition-all hover:scale-[1.02]"
					>
						<div class="relative z-10">
							<div class="mb-2 flex items-center gap-2">
								<Icon class="h-4 w-4 {colors.icon}" />
								<span class="text-xs font-medium text-muted-foreground"
									>{stat.period.split(' ')[0]}</span
								>
							</div>
							<div class="text-lg font-bold {colors.text}">{stat.count}</div>
							<div class="text-xs text-muted-foreground/70">passages</div>
						</div>
					</div>
				{/each}
			</div>
			<div
				class="mt-4 flex items-center justify-between rounded-xl border border-primary/20 bg-primary/5 p-4"
			>
				<div class="flex items-center gap-3">
					<div class="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
						<Zap class="h-5 w-5 text-primary" />
					</div>
					<div>
						<div class="text-xs text-muted-foreground">Période la plus active</div>
						<div class="text-base font-bold">{mostActivePeriod.period}</div>
					</div>
				</div>
				<div class="text-right">
					<div class="text-xs text-muted-foreground">Passages</div>
					<div class="text-xl font-bold text-primary">{mostActivePeriod.count}</div>
				</div>
			</div>
		{/if}
	</CardContent>
</Card>
