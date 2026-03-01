<script lang="ts">
	import type { SpeedData } from '../../types/speed-data';
	import { Target, Activity, Waves, Gauge, Hash, Sigma } from 'lucide-svelte';
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
			return {
				mean: 0,
				median: 0,
				stdDev: 0,
				variance: 0,
				coefficientOfVariation: 0,
				speedRanges: {} as Record<string, number>
			};
		}

		const speeds = data.map((d) => d.speed).sort((a, b) => a - b);
		const mean = speeds.reduce((a, b) => a + b, 0) / speeds.length;
		const median = speeds[Math.floor(speeds.length / 2)];
		const squaredDiffs = speeds.map((speed) => Math.pow(speed - mean, 2));
		const variance = squaredDiffs.reduce((a, b) => a + b, 0) / speeds.length;
		const stdDev = Math.sqrt(variance);
		const coefficientOfVariation = (stdDev / mean) * 100;

		const ranges = ['0-50', '50-100', '100-150', '150-200', '200+'];
		const speedRanges = ranges.reduce(
			(acc, range) => {
				acc[range] = 0;
				return acc;
			},
			{} as Record<string, number>
		);

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
		if (cv < 10)
			return {
				label: 'Très Consistant',
				color: 'bg-emerald-500',
				text: 'text-emerald-500',
				border: 'border-emerald-500/30',
				icon: 'text-emerald-400'
			};
		if (cv < 20)
			return {
				label: 'Consistant',
				color: 'bg-blue-500',
				text: 'text-blue-500',
				border: 'border-blue-500/30',
				icon: 'text-blue-400'
			};
		if (cv < 30)
			return {
				label: 'Modéré',
				color: 'bg-yellow-500',
				text: 'text-yellow-500',
				border: 'border-yellow-500/30',
				icon: 'text-yellow-400'
			};
		return {
			label: 'Variable',
			color: 'bg-red-500',
			text: 'text-red-500',
			border: 'border-red-500/30',
			icon: 'text-red-400'
		};
	});

	const rangeColors = ['#3b82f6', '#8b5cf6', '#ec4899', '#f59e0b', '#10b981'];

	let option = $derived({
		tooltip: {
			trigger: 'item',
			backgroundColor: 'rgba(15, 23, 42, 0.95)',
			borderColor: 'rgba(255, 255, 255, 0.1)',
			textStyle: { color: '#f1f5f9', fontFamily: 'system-ui, sans-serif' },
			padding: [12, 16],
			cornerRadius: 8,
			extraCssText: 'box-shadow: 0 4px 20px rgba(0, 0, 0, 0.4); backdrop-filter: blur(8px);',
			formatter: (params: { name: string; value: number; percent: number }) =>
				`${params.name}: ${params.value} passages (${params.percent}%)`
		},
		legend: {
			orient: 'vertical',
			right: '5%',
			top: 'center',
			textStyle: { color: '#94a3b8', fontFamily: 'system-ui, sans-serif' },
			itemWidth: 12,
			itemHeight: 8,
			itemGap: 12
		},
		series: [
			{
				name: 'Distribution des vitesses',
				type: 'pie',
				radius: ['45%', '75%'],
				center: ['35%', '50%'],
				avoidLabelOverlap: false,
				itemStyle: { borderRadius: 6, borderColor: 'rgba(15, 23, 42, 0.8)', borderWidth: 2 },
				label: { show: false },
				emphasis: {
					label: { show: true, fontSize: 14, fontWeight: 'bold', color: '#fff' },
					itemStyle: { shadowBlur: 20, shadowColor: 'rgba(0, 0, 0, 0.5)' }
				},
				labelLine: { show: false },
				data: Object.entries(stats.speedRanges).map(([range, count], index) => ({
					value: count,
					name: `${range} km/h`,
					itemStyle: { color: rangeColors[index] }
				}))
			}
		],
		animation: true,
		animationDuration: 1000,
		animationEasing: 'cubicOut'
	});
</script>

<Card class="overflow-hidden border-border/50 bg-gradient-to-b from-card to-card/50">
	<CardHeader class="pb-4">
		<CardTitle class="flex items-center gap-2 text-lg">
			<div class="flex h-8 w-8 items-center justify-center rounded-lg bg-primary/10">
				<Target class="h-4 w-4 text-primary" />
			</div>
			Consistance des vitesses
		</CardTitle>
		<CardDescription class="mt-1"
			>Coefficient de variation, écart-type et distribution des vitesses</CardDescription
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
			<div class="mb-4 flex items-center justify-between rounded-xl bg-muted/30 p-3">
				<div class="flex items-center gap-2">
					<div
						class="flex h-8 w-8 items-center justify-center rounded-lg {consistencyLevel.color}/10"
					>
						<Activity class="h-4 w-4 {consistencyLevel.icon}" />
					</div>
					<div>
						<div class="text-xs text-muted-foreground">Niveau de consistance</div>
						<div class="text-sm font-semibold {consistencyLevel.text}">
							{consistencyLevel.label}
						</div>
					</div>
				</div>
				<div class="flex items-center gap-2 rounded-full bg-muted px-3 py-1.5">
					<Sigma class="h-4 w-4 text-muted-foreground" />
					<span class="text-sm font-medium"
						>CV: <span class="text-foreground">{stats.coefficientOfVariation}%</span></span
					>
				</div>
			</div>

			<EChart {option} style="height: 300px" />

			<div class="mt-4 grid grid-cols-2 gap-3 lg:grid-cols-4">
				<div
					class="group relative overflow-hidden rounded-xl border border-blue-500/20 bg-gradient-to-br from-blue-500/10 to-transparent p-3 transition-all hover:border-blue-500/40"
				>
					<div class="relative z-10">
						<div class="mb-1 flex items-center gap-1.5">
							<Gauge class="h-3.5 w-3.5 text-blue-500" />
							<span class="text-xs text-muted-foreground">Moyenne</span>
						</div>
						<div class="text-xl font-bold text-blue-500">
							{stats.mean} <span class="text-xs font-normal">km/h</span>
						</div>
					</div>
				</div>
				<div
					class="group relative overflow-hidden rounded-xl border border-purple-500/20 bg-gradient-to-br from-purple-500/10 to-transparent p-3 transition-all hover:border-purple-500/40"
				>
					<div class="relative z-10">
						<div class="mb-1 flex items-center gap-1.5">
							<Hash class="h-3.5 w-3.5 text-purple-500" />
							<span class="text-xs text-muted-foreground">Médiane</span>
						</div>
						<div class="text-xl font-bold text-purple-500">
							{stats.median} <span class="text-xs font-normal">km/h</span>
						</div>
					</div>
				</div>
				<div
					class="group relative overflow-hidden rounded-xl border border-amber-500/20 bg-gradient-to-br from-amber-500/10 to-transparent p-3 transition-all hover:border-amber-500/40"
				>
					<div class="relative z-10">
						<div class="mb-1 flex items-center gap-1.5">
							<Activity class="h-3.5 w-3.5 text-amber-500" />
							<span class="text-xs text-muted-foreground">Écart-type</span>
						</div>
						<div class="text-xl font-bold text-amber-500">{stats.stdDev}</div>
					</div>
				</div>
				<div
					class="group relative overflow-hidden rounded-xl border border-rose-500/20 bg-gradient-to-br from-rose-500/10 to-transparent p-3 transition-all hover:border-rose-500/40"
				>
					<div class="relative z-10">
						<div class="mb-1 flex items-center gap-1.5">
							<Sigma class="h-3.5 w-3.5 text-rose-500" />
							<span class="text-xs text-muted-foreground">Variance</span>
						</div>
						<div class="text-xl font-bold text-rose-500">{stats.variance}</div>
					</div>
				</div>
			</div>
		{/if}
	</CardContent>
</Card>
