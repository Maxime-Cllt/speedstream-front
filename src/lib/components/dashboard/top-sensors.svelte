<script lang="ts">
	import type { SpeedData } from '../../types/speed-data';
	import { Radio, TrendingUp, Zap } from 'lucide-svelte';
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
		if (index === 0) return 'bg-yellow-500 text-white';
		if (index === 1) return 'bg-gray-400 text-white';
		if (index === 2) return 'bg-amber-600 text-white';
		return 'bg-muted text-muted-foreground';
	}
</script>

<Card>
	<CardHeader>
		<CardTitle class="flex items-center gap-2">
			<Radio class="text-primary h-5 w-5" />
			Top capteurs actifs
		</CardTitle>
		<CardDescription>Les 5 capteurs les plus actifs avec leurs statistiques</CardDescription>
	</CardHeader>
	<CardContent>
		{#if data.length === 0}
			<div class="text-muted-foreground flex h-[300px] items-center justify-center">
				Aucune donnée disponible
			</div>
		{:else}
			<div class="space-y-4">
				{#each topSensors as sensor, index}
					<div class="bg-card hover:bg-accent/50 rounded-lg border p-4 transition-colors">
						<div class="mb-3 flex items-start justify-between">
							<div class="flex items-center gap-3">
								<div class="flex h-10 w-10 items-center justify-center rounded-full font-bold {rankClass(index)}">
									#{index + 1}
								</div>
								<div>
									<div class="flex items-center gap-2 text-lg font-semibold">
										{sensor.name}
										<Zap class="h-4 w-4 text-yellow-500" />
									</div>
									<div class="text-muted-foreground text-sm">
										{sensor.count} passages enregistrés
									</div>
								</div>
							</div>
							<span class="bg-primary/10 rounded-full border px-2.5 py-0.5 text-xs font-semibold">
								Actif
							</span>
						</div>
						<div class="grid grid-cols-3 gap-3">
							<div class="rounded border border-blue-500/20 bg-blue-500/10 p-2">
								<div class="text-muted-foreground mb-1 text-xs">Moyenne</div>
								<div class="text-sm font-bold text-blue-500">{sensor.avgSpeed} km/h</div>
							</div>
							<div class="rounded border border-green-500/20 bg-green-500/10 p-2">
								<div class="text-muted-foreground mb-1 flex items-center gap-1 text-xs">
									<TrendingUp class="h-3 w-3" />
									Max
								</div>
								<div class="text-sm font-bold text-green-500">{sensor.maxSpeed} km/h</div>
							</div>
							<div class="rounded border border-orange-500/20 bg-orange-500/10 p-2">
								<div class="text-muted-foreground mb-1 text-xs">Min</div>
								<div class="text-sm font-bold text-orange-500">{sensor.minSpeed} km/h</div>
							</div>
						</div>
					</div>
				{/each}
			</div>
		{/if}
	</CardContent>
</Card>
