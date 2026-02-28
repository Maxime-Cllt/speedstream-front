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

	const binSize = 25;

	let processedData = $derived.by(() => {
		const minSpeed = 0;
		const maxSpeed = 400;
		const bins: Record<string, number> = {};

		for (let i = minSpeed; i < maxSpeed; i += binSize) {
			bins[`${i}-${i + binSize}`] = 0;
		}

		data.forEach((d) => {
			const binIndex = Math.floor(d.speed / binSize) * binSize;
			const rangeLabel = `${binIndex}-${binIndex + binSize}`;
			if (bins[rangeLabel] !== undefined) bins[rangeLabel] += 1;
		});

		return { labels: Object.keys(bins), values: Object.values(bins) };
	});

	let option = $derived({
		tooltip: {
			trigger: 'axis',
			axisPointer: { type: 'shadow' },
			backgroundColor: 'rgba(0, 0, 0, 0.8)',
			borderColor: '#333',
			textStyle: { color: '#fff' },
			formatter: (params: Array<{ axisValue: string; value: number }>) =>
				`${params[0].axisValue} km/h<br/>Nombre de passages: ${params[0].value}`
		},
		grid: { left: '3%', right: '4%', bottom: '3%', top: '3%', containLabel: true },
		xAxis: {
			type: 'category',
			data: processedData.labels,
			axisLabel: { rotate: 45, color: '#999', fontSize: 11 },
			axisLine: { lineStyle: { color: '#999' } }
		},
		yAxis: {
			type: 'value',
			name: 'Nombre',
			nameTextStyle: { color: '#999' },
			axisLine: { lineStyle: { color: '#999' } },
			splitLine: { lineStyle: { color: '#333', opacity: 0.3 } }
		},
		series: [
			{
				name: 'Distribution',
				type: 'bar',
				data: processedData.values,
				itemStyle: {
					color: {
						type: 'linear', x: 0, y: 0, x2: 1, y2: 0,
						colorStops: [
							{ offset: 0, color: '#10b981' },
							{ offset: 1, color: '#14b8a6' }
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
		<CardTitle>Distribution des vitesses</CardTitle>
		<CardDescription>Répartition des vitesses par plages de {binSize} km/h</CardDescription>
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
