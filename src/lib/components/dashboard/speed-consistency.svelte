<script lang="ts">
	import type { SpeedData } from '../../types/speed-data';
	import { Target } from 'lucide-svelte';
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

	let stats = $derived.by(() => {
		if (data.length === 0) {
			return { mean: 0, median: 0, stdDev: 0, variance: 0, coefficientOfVariation: 0, speedRanges: {} as Record<string, number> };
		}

		const speeds = data.map((d) => d.speed).sort((a, b) => a - b);
		const mean = speeds.reduce((a, b) => a + b, 0) / speeds.length;
		const median = speeds[Math.floor(speeds.length / 2)];
		const squaredDiffs = speeds.map((speed) => Math.pow(speed - mean, 2));
		const variance = squaredDiffs.reduce((a, b) => a + b, 0) / speeds.length;
		const stdDev = Math.sqrt(variance);
		const coefficientOfVariation = (stdDev / mean) * 100;

		const ranges = ['0-50', '50-100', '100-150', '150-200', '200+'];
		const speedRanges = ranges.reduce((acc, range) => { acc[range] = 0; return acc; }, {} as Record<string, number>);

		speeds.forEach((speed) => {
			if (speed < 50) speedRanges['0-50']++;
			else if (speed < 100) speedRanges['50-100']++;
			else if (speed < 150) speedRanges['100-150']++;
			else if (speed < 200) speedRanges['150-200']++;
			else speedRanges['200+']++;
		});

		return {
			mean: Math.round(mean * 10) / 10,
			median: Math.round(median * 10) / 10,
			stdDev: Math.round(stdDev * 10) / 10,
			variance: Math.round(variance * 10) / 10,
			coefficientOfVariation: Math.round(coefficientOfVariation * 10) / 10,
			speedRanges
		};
	});

	let consistencyLevel = $derived.by(() => {
		const cv = stats.coefficientOfVariation;
		if (cv < 10) return { label: 'Très Consistant', color: 'bg-green-500' };
		if (cv < 20) return { label: 'Consistant', color: 'bg-blue-500' };
		if (cv < 30) return { label: 'Modéré', color: 'bg-yellow-500' };
		return { label: 'Variable', color: 'bg-red-500' };
	});

	let option = $derived({
		tooltip: {
			trigger: 'item',
			backgroundColor: 'rgba(0, 0, 0, 0.8)',
			borderColor: '#333',
			textStyle: { color: '#fff' },
			formatter: (params: { name: string; value: number; percent: number }) =>
				`${params.name}: ${params.value} passages (${params.percent}%)`
		},
		legend: {
			orient: 'vertical',
			right: '5%',
			top: 'center',
			textStyle: { color: '#999' }
		},
		series: [
			{
				name: 'Distribution des vitesses',
				type: 'pie',
				radius: ['40%', '70%'],
				center: ['35%', '50%'],
				avoidLabelOverlap: false,
				itemStyle: { borderRadius: 10, borderColor: '#1a1a1a', borderWidth: 2 },
				label: { show: false },
				emphasis: {
					label: { show: true, fontSize: 16, fontWeight: 'bold', color: '#fff' }
				},
				labelLine: { show: false },
				data: Object.entries(stats.speedRanges).map(([range, count]) => ({
					value: count,
					name: `${range} km/h`
				})),
				color: ['#3b82f6', '#8b5cf6', '#ec4899', '#f59e0b', '#10b981']
			}
		]
	});
</script>

<Card>
	<CardHeader>
		<CardTitle class="flex items-center gap-2">
			<Target class="text-primary h-5 w-5" />
			Consistance des vitesses
		</CardTitle>
		<CardDescription>Analyse de la variabilité et distribution des vitesses</CardDescription>
	</CardHeader>
	<CardContent>
		{#if data.length === 0}
			<div class="text-muted-foreground flex h-[350px] items-center justify-center">
				Aucune donnée disponible
			</div>
		{:else}
			<div class="mb-4 flex items-center justify-between">
				<div class="flex items-center gap-2">
					<span class="text-muted-foreground text-sm">Niveau de consistance:</span>
					<span class="rounded-full px-2.5 py-0.5 text-xs font-semibold text-white {consistencyLevel.color}">
						{consistencyLevel.label}
					</span>
				</div>
				<div class="text-muted-foreground text-sm">CV: {stats.coefficientOfVariation}%</div>
			</div>

			<EChart {option} style="height: 300px" />

			<div class="mt-4 grid grid-cols-4 gap-3">
				<div class="bg-card rounded-lg border p-3">
					<div class="text-muted-foreground mb-1 text-xs">Moyenne</div>
					<div class="text-lg font-bold">{stats.mean} km/h</div>
				</div>
				<div class="bg-card rounded-lg border p-3">
					<div class="text-muted-foreground mb-1 text-xs">Médiane</div>
					<div class="text-lg font-bold">{stats.median} km/h</div>
				</div>
				<div class="bg-card rounded-lg border p-3">
					<div class="text-muted-foreground mb-1 text-xs">Écart-type</div>
					<div class="text-lg font-bold">{stats.stdDev}</div>
				</div>
				<div class="bg-card rounded-lg border p-3">
					<div class="text-muted-foreground mb-1 text-xs">Variance</div>
					<div class="text-lg font-bold">{stats.variance}</div>
				</div>
			</div>
		{/if}
	</CardContent>
</Card>
