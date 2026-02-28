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

	let option = $derived({
		tooltip: {
			trigger: 'axis',
			axisPointer: {
				type: 'cross'
			},
			backgroundColor: 'rgba(0, 0, 0, 0.8)',
			borderColor: '#333',
			textStyle: {
				color: '#fff'
			}
		},
		legend: {
			data: ['Voie gauche', 'Voie droite'],
			textStyle: {
				color: '#999'
			},
			top: '0%'
		},
		grid: {
			left: '3%',
			right: '4%',
			bottom: '3%',
			top: '12%',
			containLabel: true
		},
		xAxis: {
			type: 'category',
			boundaryGap: false,
			data: processedData.timestamps,
			axisLine: {
				lineStyle: {
					color: '#999'
				}
			}
		},
		yAxis: {
			type: 'value',
			name: 'Vitesse (km/h)',
			nameTextStyle: {
				color: '#999'
			},
			axisLine: {
				lineStyle: {
					color: '#999'
				}
			},
			splitLine: {
				lineStyle: {
					color: '#333',
					opacity: 0.3
				}
			}
		},
		series: [
			{
				name: 'Voie gauche',
				type: 'line',
				smooth: true,
				symbol: 'circle',
				symbolSize: 5,
				sampling: 'lttb',
				connectNulls: false,
				itemStyle: {
					color: '#3b82f6'
				},
				lineStyle: {
					width: 2
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
								color: 'rgba(59, 130, 246, 0.3)'
							},
							{
								offset: 1,
								color: 'rgba(59, 130, 246, 0.05)'
							}
						]
					}
				},
				data: processedData.leftSpeeds
			},
			{
				name: 'Voie droite',
				type: 'line',
				smooth: true,
				symbol: 'circle',
				symbolSize: 5,
				sampling: 'lttb',
				connectNulls: false,
				itemStyle: {
					color: '#f97316'
				},
				lineStyle: {
					width: 2
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
								color: 'rgba(249, 115, 22, 0.3)'
							},
							{
								offset: 1,
								color: 'rgba(249, 115, 22, 0.05)'
							}
						]
					}
				},
				data: processedData.rightSpeeds
			}
		]
	});
</script>

<Card>
	<CardHeader>
		<CardTitle>{title}</CardTitle>
		{#if description}
			<CardDescription>{description}</CardDescription>
		{/if}
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
