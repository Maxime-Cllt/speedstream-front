<script lang="ts">
	import type { SpeedData } from '../../types/speed-data';
	import { TrendingUp, Zap, Activity, Waves } from 'lucide-svelte';
	import Card from '../ui/card.svelte';
	import CardHeader from '../ui/card-header.svelte';
	import CardTitle from '../ui/card-title.svelte';
	import CardContent from '../ui/card-content.svelte';
	import CardDescription from '../ui/card-description.svelte';

	interface Props {
		data: SpeedData[];
	}

	let { data }: Props = $props();

	let topSensors = $derived.by(() => {
		const sensorData = data.reduce(
			(acc, curr) => {
				const sensorName = curr.sensor_name || 'Unknown';
				if (!acc[sensorName]) acc[sensorName] = { name: sensorName, speeds: [], count: 0 };
				acc[sensorName].speeds.push(curr.speed);
				acc[sensorName].count += 1;
				return acc;
			},
			{} as Record<string, { name: string; speeds: number[]; count: number }>
		);

		return Object.values(sensorData)
			.map((sensor) => {
				const avgSpeed = sensor.speeds.reduce((a, b) => a + b, 0) / sensor.speeds.length;
				return {
					name: sensor.name,
					count: sensor.count,
					avgSpeed: Math.round(avgSpeed * 10) / 10,
					maxSpeed: Math.round(Math.max(...sensor.speeds) * 10) / 10,
					minSpeed: Math.round(Math.min(...sensor.speeds) * 10) / 10
				};
			})
			.sort((a, b) => b.count - a.count)
			.slice(0, 5);
	});

	function rankClass(index: number) {
		if (index === 0)
			return 'bg-gradient-to-br from-yellow-400 to-yellow-600 text-white shadow-lg shadow-yellow-500/30';
		if (index === 1)
			return 'bg-gradient-to-br from-gray-300 to-gray-500 text-white shadow-lg shadow-gray-400/30';
		if (index === 2)
			return 'bg-gradient-to-br from-amber-600 to-amber-800 text-white shadow-lg shadow-amber-600/30';
		return 'bg-muted text-muted-foreground';
	}

	function rankBadge(index: number) {
		if (index === 0) return '🏆';
		if (index === 1) return '🥈';
		if (index === 2) return '🥉';
		return `#${index + 1}`;
	}
</script>

<Card class="overflow-hidden border-border/50 bg-gradient-to-b from-card to-card/50">
	<CardHeader class="pb-4">
		<CardTitle class="flex items-center gap-2 text-lg">
			<div class="flex h-8 w-8 items-center justify-center rounded-lg bg-primary/10">
				<TrendingUp class="h-4 w-4 text-primary" />
			</div>
			Top 5 capteurs
		</CardTitle>
		<CardDescription class="mt-1">Capteurs les plus actifs — passages et vitesses</CardDescription>
	</CardHeader>
	<CardContent>
		{#if data.length === 0}
			<div
				class="flex h-[300px] flex-col items-center justify-center gap-3 rounded-xl border-2 border-dashed border-muted-foreground/20 bg-muted/5"
			>
				<div class="flex h-14 w-14 items-center justify-center rounded-full bg-muted">
					<Waves class="h-7 w-7 text-muted-foreground/50" />
				</div>
				<p class="text-sm font-medium text-muted-foreground">Aucune donnée disponible</p>
			</div>
		{:else}
			<div class="space-y-3">
				{#each topSensors as sensor, index (sensor.name)}
					<div
						class="group relative overflow-hidden rounded-xl border border-border/50 bg-gradient-to-br from-muted/30 to-muted/10 p-4 transition-all hover:scale-[1.01] hover:border-primary/30 hover:shadow-md"
					>
						<div
							class="absolute -top-4 -right-4 h-20 w-20 rounded-full bg-primary/5 blur-2xl transition-all duration-500 group-hover:bg-primary/10"
						></div>
						<div class="relative z-10">
							<div class="mb-3 flex items-start justify-between">
								<div class="flex items-center gap-3">
									<div
										class="flex h-10 w-10 items-center justify-center rounded-xl font-bold {rankClass(
											index
										)}"
									>
										{rankBadge(index)}
									</div>
									<div>
										<div class="flex items-center gap-2 text-base font-semibold">
											{sensor.name}
											{#if index === 0}
												<Zap class="h-4 w-4 text-yellow-500" />
											{/if}
										</div>
										<div class="text-xs text-muted-foreground">
											{sensor.count} passages enregistrés
										</div>
									</div>
								</div>
								<span
									class="rounded-full border border-emerald-500/30 bg-emerald-500/10 px-2.5 py-0.5 text-xs font-semibold text-emerald-500"
								>
									Actif
								</span>
							</div>
							<div class="grid grid-cols-3 gap-2">
								<div
									class="rounded-lg border border-blue-500/20 bg-gradient-to-br from-blue-500/10 to-transparent p-2.5 transition-all hover:border-blue-500/40"
								>
									<div class="mb-1 flex items-center gap-1 text-xs text-muted-foreground">
										<Activity class="h-3 w-3" />
										Moyenne
									</div>
									<div class="text-sm font-bold text-blue-500">{sensor.avgSpeed} km/h</div>
								</div>
								<div
									class="rounded-lg border border-green-500/20 bg-gradient-to-br from-green-500/10 to-transparent p-2.5 transition-all hover:border-green-500/40"
								>
									<div class="mb-1 flex items-center gap-1 text-xs text-muted-foreground">
										<TrendingUp class="h-3 w-3" />
										Max
									</div>
									<div class="text-sm font-bold text-green-500">{sensor.maxSpeed} km/h</div>
								</div>
								<div
									class="rounded-lg border border-orange-500/20 bg-gradient-to-br from-orange-500/10 to-transparent p-2.5 transition-all hover:border-orange-500/40"
								>
									<div class="mb-1 flex items-center gap-1 text-xs text-muted-foreground">
										<TrendingUp class="h-3 w-3 rotate-180" />
										Min
									</div>
									<div class="text-sm font-bold text-orange-500">{sensor.minSpeed} km/h</div>
								</div>
							</div>
						</div>
					</div>
				{/each}
			</div>
		{/if}
	</CardContent>
</Card>
