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
	import { Activity, Radio } from 'lucide-svelte';

	interface Props {
		data: SpeedData[];
		title?: string;
		description?: string;
	}

	let { data, title = 'Télémétrie : Vitesse (kph)', description }: Props = $props();

	let processedData = $derived.by(() => {
		const leftLaneData = data.filter((d) => d.lane === Lane.Left);
		const rightLaneData = data.filter((d) => d.lane === Lane.Right);

		const allTimestamps = Array.from(new Set(data.map((d) => d.created_at))).sort();

		const leftLaneMap = new Map(leftLaneData.map((d) => [d.created_at, d.speed]));
		const rightLaneMap = new Map(rightLaneData.map((d) => [d.created_at, d.speed]));

		const leftSpeeds = allTimestamps.map((ts) => leftLaneMap.get(ts) ?? null);
		const rightSpeeds = allTimestamps.map((ts) => rightLaneMap.get(ts) ?? null);
		// Affichage précis avec secondes et millisecondes si applicable en course
		const timestamps = allTimestamps.map((ts) => format(new Date(ts), 'HH:mm:ss'));

		return { leftSpeeds, rightSpeeds, timestamps };
	});

	let minSpeed = $derived(
			Math.min(...data.map((d) => d.speed).filter((s) => s !== null && !isNaN(s)))
	);

	let maxSpeed = $derived(
			Math.max(...data.map((d) => d.speed).filter((s) => s !== null && !isNaN(s)))
	);

	// Style Télémétrie : Couleurs néon contrastées
	const colorCar1 = '#00f2fe'; // Cyan tech
	const colorCar2 = '#ff0055'; // Magenta/Rouge racing
	const fontMono = 'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace';

	let option = $derived({
		backgroundColor: 'transparent',
		tooltip: {
			trigger: 'axis',
			axisPointer: {
				type: 'cross', // Réticule en croix typique des logiciels d'analyse
				label: {
					backgroundColor: '#1e293b',
					fontFamily: fontMono,
				},
				lineStyle: { color: 'rgba(255, 255, 255, 0.4)', type: 'solid' }
			},
			backgroundColor: 'rgba(15, 23, 42, 0.95)',
			borderColor: 'rgba(255, 255, 255, 0.1)',
			textStyle: { color: '#f1f5f9', fontFamily: fontMono, fontSize: 12 },
			padding: [12, 16],
			cornerRadius: 4, // Bords plus francs
		},
		legend: {
			data: [
				{ name: 'Voie Gauche', icon: 'rect', itemWidth: 16, itemHeight: 4 },
				{ name: 'Voie Droite', icon: 'rect', itemWidth: 16, itemHeight: 4 }
			],
			textStyle: { color: '#94a3b8', fontFamily: fontMono, fontSize: 11 },
			top: 0,
			right: 10,
		},
		grid: {
			left: '2%', right: '2%', bottom: '2%', top: '15%', containLabel: true
		},
		xAxis: {
			type: 'category',
			boundaryGap: false,
			data: processedData.timestamps,
			axisLine: { lineStyle: { color: '#334155' } },
			axisTick: { show: true, lineStyle: { color: '#334155' } },
			axisLabel: {
				color: '#64748b',
				fontFamily: fontMono,
				fontSize: 10,
				interval: 'auto'
			},
			splitLine: { show: true, lineStyle: { color: 'rgba(51, 65, 85, 0.3)', type: 'dashed' } }
		},
		yAxis: {
			type: 'value',
			name: 'VITESSE (KPH)',
			nameTextStyle: { color: '#64748b', fontFamily: fontMono, fontSize: 10, padding: [0, 20, 0, 0] },
			axisLine: { show: true, lineStyle: { color: '#334155' } },
			axisTick: { show: true },
			axisLabel: { color: '#94a3b8', fontFamily: fontMono, fontSize: 11 },
			splitLine: { lineStyle: { color: 'rgba(51, 65, 85, 0.5)', type: 'solid' } } // Grille solide typique
		},
		series: [
			{
				name: 'Voie Gauche',
				type: 'line',
				smooth: 0, // IMPORTANT : Pas de lissage en course auto, on veut la donnée pure
				symbol: 'none',
				step: false,
				sampling: 'lttb',
				connectNulls: true,
				itemStyle: { color: colorCar1 },
				lineStyle: { width: 1.5 }, // Ligne plus fine pour la précision
				areaStyle: {
					color: {
						type: 'linear', x: 0, y: 0, x2: 0, y2: 1,
						colorStops: [
							{ offset: 0, color: 'rgba(0, 242, 254, 0.15)' },
							{ offset: 1, color: 'rgba(0, 242, 254, 0)' }
						]
					}
				},
				data: processedData.leftSpeeds
			},
			{
				name: 'Voie Droite',
				type: 'line',
				smooth: 0, // Donnée pure
				symbol: 'none',
				sampling: 'lttb',
				connectNulls: true,
				itemStyle: { color: colorCar2 },
				lineStyle: { width: 1.5 },
				areaStyle: {
					color: {
						type: 'linear', x: 0, y: 0, x2: 0, y2: 1,
						colorStops: [
							{ offset: 0, color: 'rgba(255, 0, 85, 0.15)' },
							{ offset: 1, color: 'rgba(255, 0, 85, 0)' }
						]
					}
				},
				data: processedData.rightSpeeds
			}
		],
		animation: false // On désactive l'animation pour un rendu "Live Data" immédiat
	});
</script>

<Card class="overflow-hidden border-border/40 bg-card rounded-lg shadow-xl">
	<CardHeader class="pb-2 border-b border-border/20 bg-muted/10">
		<div class="flex items-center justify-between">
			<div class="flex items-center gap-3">
				<div class="flex h-9 w-9 items-center justify-center rounded bg-primary/10 border border-primary/20">
					<Activity class="h-4 w-4 text-primary" />
				</div>
				<div>
					<CardTitle class="flex items-center gap-3 text-sm font-bold uppercase tracking-wider">
						{title}
						<span class="flex items-center gap-1.5 rounded-sm bg-red-500/10 px-1.5 py-0.5 text-[10px] font-bold uppercase text-red-500 border border-red-500/20">
                      <span class="h-1.5 w-1.5 animate-pulse rounded-full bg-red-500"></span>
                      Live
                   </span>
					</CardTitle>
					{#if description}
						<CardDescription class="mt-0.5 text-xs font-mono">{description}</CardDescription>
					{/if}
				</div>
			</div>

			{#if data.length > 0}
				<div class="flex items-center gap-4 rounded-md bg-black/40 border border-border/30 px-3 py-1.5 font-mono">
					<div class="flex flex-col">
						<span class="text-[9px] text-muted-foreground uppercase tracking-widest">Min Spd</span>
						<div class="flex items-center gap-1">
							<span class="text-sm font-bold text-foreground tabular-nums leading-none">{minSpeed.toFixed(1)}</span>
						</div>
					</div>
					<div class="h-6 w-px bg-border/50"></div>
					<div class="flex flex-col">
						<span class="text-[9px] text-muted-foreground uppercase tracking-widest">Max Spd</span>
						<div class="flex items-center gap-1">
							<span class="text-sm font-bold text-foreground tabular-nums leading-none">{maxSpeed.toFixed(1)}</span>
						</div>
					</div>
				</div>
			{/if}
		</div>
	</CardHeader>
	<CardContent class="p-4 bg-[#0a0f18]"> {#if data.length === 0}
		<div
				class="flex h-80 flex-col items-center justify-center gap-4 rounded-md border border-dashed border-muted-foreground/20 bg-black/20"
		>
			<div class="relative flex h-16 w-16 items-center justify-center rounded-full bg-muted/20">
				<Radio class="h-6 w-6 text-muted-foreground/60 animate-pulse" />
				<div class="absolute inset-0 rounded-full border-2 border-muted-foreground/10 animate-ping"></div>
			</div>
			<div class="text-center font-mono">
				<p class="text-sm font-bold text-muted-foreground uppercase tracking-widest">En attente de connexion radio</p>
				<p class="mt-1 text-xs text-muted-foreground/50">Acquisition des données télémétriques en cours...</p>
			</div>
		</div>
	{:else}
		<EChart {option} style="height: 320px; width: 100%;" />
	{/if}
	</CardContent>
</Card>