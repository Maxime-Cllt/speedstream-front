<script lang="ts">
	import type { SpeedData } from '../../types/speed-data';
	import Card from '../ui/card.svelte';
	import CardHeader from '../ui/card-header.svelte';
	import CardTitle from '../ui/card-title.svelte';
	import CardContent from '../ui/card-content.svelte';
	import CardDescription from '../ui/card-description.svelte';
	import EChart from '../ui/echart.svelte';
	import { Lane } from '../../types/speed-data';
	import { format } from 'date-fns';
	import { Activity, Waves } from 'lucide-svelte';

	interface Props {
		data: SpeedData[];
		title?: string;
		description?: string;
	}

	let { data, title = 'Vitesses en temps réel', description }: Props = $props();

	let processedData = $derived.by(() => {
		const leftLaneData = data.filter((d) => d.lane === Lane.Left);
		const rightLaneData = data.filter((d) => d.lane === Lane.Right);

		const allTimestamps = Array.from(new Set(data.map((d) => d.created_at))).sort();

		const leftLaneMap = new Map(leftLaneData.map((d) => [d.created_at, d.speed]));
		const rightLaneMap = new Map(rightLaneData.map((d) => [d.created_at, d.speed]));

		const leftSpeeds = allTimestamps.map((ts) => leftLaneMap.get(ts) ?? null);
		const rightSpeeds = allTimestamps.map((ts) => rightLaneMap.get(ts) ?? null);
		const timestamps = allTimestamps.map((ts) => format(new Date(ts), 'HH:mm'));

		return { leftSpeeds, rightSpeeds, timestamps };
	});

	let minSpeed = $derived(
		Math.min(...data.map((d) => d.speed).filter((s) => s !== null && !isNaN(s)))
	);

	let maxSpeed = $derived(
		Math.max(...data.map((d) => d.speed).filter((s) => s !== null && !isNaN(s)))
	);

	let option = $derived({
		tooltip: {
			trigger: 'axis',
			axisPointer: {
				type: 'line',
				lineStyle: {
					color: 'rgba(255, 255, 255, 0.3)',
					width: 1,
					type: 'dashed'
				}
			},
			backgroundColor: 'rgba(15, 23, 42, 0.95)',
			borderColor: 'rgba(255, 255, 255, 0.1)',
			textStyle: {
				color: '#f1f5f9',
				fontFamily: 'system-ui, sans-serif',
				fontSize: 12
			},
			padding: [12, 16],
			cornerRadius: 8,
			extraCssText: 'box-shadow: 0 4px 20px rgba(0, 0, 0, 0.4); backdrop-filter: blur(8px);'
		},
		legend: {
			data: [
				{
					name: 'Voie gauche',
					icon: 'roundRect',
					itemWidth: 12,
					itemHeight: 4
				},
				{
					name: 'Voie droite',
					icon: 'roundRect',
					itemWidth: 12,
					itemHeight: 4
				}
			],
			textStyle: {
				color: '#94a3b8',
				fontFamily: 'system-ui, sans-serif'
			},
			top: 8,
			itemGap: 24
		},
		grid: {
			left: '2%',
			right: '2%',
			bottom: '2%',
			top: '18%',
			containLabel: true
		},
		xAxis: {
			type: 'category',
			boundaryGap: false,
			data: processedData.timestamps,
			axisLine: {
				lineStyle: {
					color: 'rgba(148, 163, 184, 0.2)'
				}
			},
			axisTick: {
				show: false
			},
			axisLabel: {
				color: '#64748b',
				fontFamily: 'system-ui, sans-serif',
				fontSize: 11,
				interval: Math.floor(processedData.timestamps.length / 8)
			}
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
			axisLine: {
				show: false
			},
			axisTick: {
				show: false
			},
			axisLabel: {
				color: '#64748b',
				fontFamily: 'system-ui, sans-serif',
				fontSize: 11
			},
			splitLine: {
				lineStyle: {
					color: 'rgba(148, 163, 184, 0.1)',
					type: 'dashed'
				}
			}
		},
		series: [
			{
				name: 'Voie gauche',
				type: 'line',
				smooth: 0.35,
				symbol: 'circle',
				symbolSize: 6,
				showSymbol: false,
				sampling: 'lttb',
				connectNulls: true,
				triggerLineEvent: true,
				itemStyle: {
					color: '#0ea5e9'
				},
				lineStyle: {
					width: 3,
					shadowColor: 'rgba(14, 165, 233, 0.5)',
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
							{
								offset: 0,
								color: 'rgba(14, 165, 233, 0.25)'
							},
							{
								offset: 0.5,
								color: 'rgba(14, 165, 233, 0.08)'
							},
							{
								offset: 1,
								color: 'rgba(14, 165, 233, 0.02)'
							}
						]
					}
				},
				emphasis: {
					focus: 'series',
					itemStyle: {
						borderColor: '#fff',
						borderWidth: 2
					}
				},
				data: processedData.leftSpeeds
			},
			{
				name: 'Voie droite',
				type: 'line',
				smooth: 0.35,
				symbol: 'circle',
				symbolSize: 6,
				showSymbol: false,
				sampling: 'lttb',
				connectNulls: true,
				triggerLineEvent: true,
				itemStyle: {
					color: '#f97316'
				},
				lineStyle: {
					width: 3,
					shadowColor: 'rgba(249, 115, 22, 0.5)',
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
							{
								offset: 0,
								color: 'rgba(249, 115, 22, 0.25)'
							},
							{
								offset: 0.5,
								color: 'rgba(249, 115, 22, 0.08)'
							},
							{
								offset: 1,
								color: 'rgba(249, 115, 22, 0.02)'
							}
						]
					}
				},
				emphasis: {
					focus: 'series',
					itemStyle: {
						borderColor: '#fff',
						borderWidth: 2
					}
				},
				data: processedData.rightSpeeds
			}
		],
		animation: true,
		animationDuration: 800,
		animationEasing: 'cubicOut'
	});
</script>

<Card class="overflow-hidden border-border/50 bg-linear-to-b from-card to-card/50">
	<CardHeader class="pb-4">
		<div class="flex items-center justify-between">
			<div>
				<CardTitle class="flex items-center gap-2 text-lg">
					<div class="flex h-8 w-8 items-center justify-center rounded-lg bg-primary/10">
						<Activity class="h-4 w-4 text-primary" />
					</div>
					{title}
				</CardTitle>
				{#if description}
					<CardDescription class="mt-1">{description}</CardDescription>
				{/if}
			</div>

			{#if data.length > 0}
				<div class="flex items-center gap-3 rounded-xl bg-muted/50 p-2 pr-3">
					<div class="flex items-center gap-1.5">
						<div class="h-2 w-2 rounded-full bg-sky-500"></div>
						<span class="text-xs font-medium text-muted-foreground">
							Min: <span class="text-foreground">{minSpeed.toFixed(1)}</span>
						</span>
					</div>
					<div class="h-4 w-px bg-border"></div>
					<div class="flex items-center gap-1.5">
						<div class="h-2 w-2 rounded-full bg-orange-500"></div>
						<span class="text-xs font-medium text-muted-foreground">
							Max: <span class="text-foreground">{maxSpeed.toFixed(1)}</span>
						</span>
					</div>
				</div>
			{/if}
		</div>
	</CardHeader>
	<CardContent>
		{#if data.length === 0}
			<div
				class="flex h-[320px] flex-col items-center justify-center gap-3 rounded-xl border-2 border-dashed border-muted-foreground/20 bg-muted/5"
			>
				<div class="flex h-14 w-14 items-center justify-center rounded-full bg-muted">
					<Waves class="h-7 w-7 text-muted-foreground/50" />
				</div>
				<p class="text-sm font-medium text-muted-foreground">Aucune donnée disponible</p>
				<p class="text-xs text-muted-foreground/70">Les données apparaîtront ici</p>
			</div>
		{:else}
			<EChart {option} style="height: 320px" />
		{/if}
	</CardContent>
</Card>
