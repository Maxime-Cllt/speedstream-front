<script lang="ts">
	import { settings } from '../stores/settings';
	import { Lane } from '../types/speed-data';
	import type { DateRangeMode } from '../types/settings';
	import Button from './ui/button.svelte';
	import Switch from './ui/switch.svelte';
	import Label from './ui/label.svelte';
	import Select from './ui/select.svelte';
	import Sheet from './ui/sheet.svelte';
	import SheetTrigger from './ui/sheet-trigger.svelte';
	import SheetContent from './ui/sheet-content.svelte';
	import SheetHeader from './ui/sheet-header.svelte';
	import SheetTitle from './ui/sheet-title.svelte';
	import SheetDescription from './ui/sheet-description.svelte';
	import { Settings, RotateCcw } from 'lucide-svelte';

	interface Props {
		availableSensors: string[];
	}

	let { availableSensors }: Props = $props();

	let open = $state(false);

	const updateIntervals = [
		{ value: '1000', label: '1 seconde' },
		{ value: '3000', label: '3 secondes' },
		{ value: '5000', label: '5 secondes' },
		{ value: '10000', label: '10 secondes' }
	];

	const maxDataPointsOptions = [
		{ value: '50', label: '50 points' },
		{ value: '100', label: '100 points' },
		{ value: '120', label: '120 points' },
		{ value: '200', label: '200 points' }
	];

	const dateRangeModes: { value: DateRangeMode; label: string }[] = [
		{ value: 'realtime', label: 'Temps réel' },
		{ value: 'today', label: "Aujourd'hui" },
		{ value: 'custom', label: 'Période personnalisée' }
	];

	function toggleSensor(sensor: string) {
		const currentSensors = $settings.selectedSensors;
		const newSensors = currentSensors.includes(sensor)
			? currentSensors.filter((s) => s !== sensor)
			: [...currentSensors, sensor];
		settings.update((s) => ({ ...s, selectedSensors: newSensors }));
	}

	function toggleLane(lane: Lane) {
		const currentLanes = $settings.selectedLanes;
		const newLanes = currentLanes.includes(lane)
			? currentLanes.filter((l) => l !== lane)
			: [...currentLanes, lane];
		settings.update((s) => ({ ...s, selectedLanes: newLanes }));
	}

	function isSensorSelected(sensor: string) {
		return $settings.selectedSensors.length === 0 || $settings.selectedSensors.includes(sensor);
	}

	function toggleChart(key: string, value: boolean) {
		settings.update((s) => ({ ...s, [key]: value }));
	}
</script>

<Sheet bind:open onOpenChange={(o) => (open = o)}>
	<SheetTrigger asChild>
		<Button variant="outline" size="icon">
			<Settings class="h-5 w-5" />
		</Button>
	</SheetTrigger>
	<SheetContent class="w-full overflow-y-auto sm:max-w-md">
		<SheetHeader>
			<SheetTitle class="flex items-center gap-2">
				<Settings class="h-5 w-5" />
				Paramètres
			</SheetTitle>
			<SheetDescription>
				Configurez les options d'affichage et de filtrage des données
			</SheetDescription>
		</SheetHeader>

		<div class="mt-6 space-y-6">
			<!-- Date Range Mode -->
			<div class="space-y-4 border-t pt-4">
				<h3 class="text-sm font-semibold">Période de données</h3>
				<Select
					value={$settings.dateRangeMode}
					options={dateRangeModes}
					onValueChange={(value) =>
						settings.update((s) => ({ ...s, dateRangeMode: value as DateRangeMode }))}
				/>
			</div>

			<!-- Sensors -->
			<div class="space-y-4 border-t pt-4">
				<div class="flex items-center justify-between">
					<h3 class="text-sm font-semibold">Capteurs</h3>
					{#if $settings.selectedSensors.length > 0}
						<Button
							variant="ghost"
							size="sm"
							onclick={() => settings.update((s) => ({ ...s, selectedSensors: [] }))}
						>
							Tout afficher
						</Button>
					{/if}
				</div>
				<div class="space-y-2">
					{#if availableSensors.length === 0}
						<p class="text-muted-foreground py-4 text-center text-sm">Aucun capteur détecté</p>
					{:else}
						{#each availableSensors as sensor}
							<div class="flex items-center justify-between">
								<Label for={`sensor-${sensor}`} class="cursor-pointer text-sm">
									{sensor}
								</Label>
								<Switch
									id={`sensor-${sensor}`}
									checked={isSensorSelected(sensor)}
									onchange={() => toggleSensor(sensor)}
								/>
							</div>
						{/each}
					{/if}
				</div>
			</div>

			<!-- Lanes -->
			<div class="space-y-4 border-t pt-4">
				<h3 class="text-sm font-semibold">Voies</h3>
				<div class="space-y-2">
					<div class="flex items-center justify-between">
						<Label for="lane-left" class="cursor-pointer text-sm">Voie gauche</Label>
						<Switch
							id="lane-left"
							checked={$settings.selectedLanes.includes(Lane.Left)}
							onchange={() => toggleLane(Lane.Left)}
						/>
					</div>
					<div class="flex items-center justify-between">
						<Label for="lane-right" class="cursor-pointer text-sm">Voie droite</Label>
						<Switch
							id="lane-right"
							checked={$settings.selectedLanes.includes(Lane.Right)}
							onchange={() => toggleLane(Lane.Right)}
						/>
					</div>
				</div>
			</div>

			<!-- Speed Thresholds -->
			<div class="space-y-4 border-t pt-4">
				<h3 class="text-sm font-semibold">Seuils de vitesse</h3>
				<div class="space-y-3">
					<div class="flex items-center justify-between">
						<Label for="enable-alerts" class="cursor-pointer text-sm">Filtrer par seuils</Label>
						<Switch
							id="enable-alerts"
							checked={$settings.enableAlerts}
							onchange={(e) =>
								settings.update((s) => ({ ...s, enableAlerts: e.currentTarget.checked }))}
						/>
					</div>
					{#if $settings.enableAlerts}
						<div class="space-y-2">
							<div class="flex items-center gap-3">
								<Label class="w-16 shrink-0 text-xs">Min (km/h)</Label>
								<input
									type="number"
									class="bg-background h-8 w-full rounded border px-2 text-sm"
									min="0"
									max="500"
									value={$settings.speedThresholdMin}
									oninput={(e) =>
										settings.update((s) => ({
											...s,
											speedThresholdMin: parseInt((e.target as HTMLInputElement).value) || 0
										}))}
								/>
							</div>
							<div class="flex items-center gap-3">
								<Label class="w-16 shrink-0 text-xs">Max (km/h)</Label>
								<input
									type="number"
									class="bg-background h-8 w-full rounded border px-2 text-sm"
									min="0"
									max="500"
									value={$settings.speedThresholdMax}
									oninput={(e) =>
										settings.update((s) => ({
											...s,
											speedThresholdMax: parseInt((e.target as HTMLInputElement).value) || 500
										}))}
								/>
							</div>
						</div>
					{/if}
				</div>
			</div>

			<!-- Update Interval -->
			<div class="space-y-4 border-t pt-4">
				<h3 class="text-sm font-semibold">Mise à jour des données</h3>
				<div class="space-y-2">
					<Label class="text-sm">Intervalle de rafraîchissement</Label>
					<Select
						value={$settings.updateInterval.toString()}
						options={updateIntervals}
						onValueChange={(value) =>
							settings.update((s) => ({ ...s, updateInterval: parseInt(value) }))}
					/>
				</div>
				<div class="space-y-2">
					<Label class="text-sm">Nombre de points de données</Label>
					<Select
						value={$settings.maxDataPoints.toString()}
						options={maxDataPointsOptions}
						onValueChange={(value) =>
							settings.update((s) => ({ ...s, maxDataPoints: parseInt(value) }))}
					/>
				</div>
			</div>

			<!-- Charts - Basic -->
			<div class="space-y-4 border-t pt-4">
				<h3 class="text-sm font-semibold">Graphiques de base</h3>
				<div class="space-y-2">
					<div class="flex items-center justify-between">
						<Label for="show-chart" class="cursor-pointer text-sm">Graphique de vitesses</Label>
						<Switch
							id="show-chart"
							checked={$settings.showSpeedChart}
							onchange={(e) => toggleChart('showSpeedChart', e.currentTarget.checked)}
						/>
					</div>
					<div class="flex items-center justify-between">
						<Label for="show-lane" class="cursor-pointer text-sm">Distribution des voies</Label>
						<Switch
							id="show-lane"
							checked={$settings.showLaneDistribution}
							onchange={(e) => toggleChart('showLaneDistribution', e.currentTarget.checked)}
						/>
					</div>
					<div class="flex items-center justify-between">
						<Label for="show-sensor" class="cursor-pointer text-sm">Statistiques des capteurs</Label>
						<Switch
							id="show-sensor"
							checked={$settings.showSensorStats}
							onchange={(e) => toggleChart('showSensorStats', e.currentTarget.checked)}
						/>
					</div>
				</div>
			</div>

			<!-- Charts - Advanced -->
			<div class="space-y-4 border-t pt-4">
				<h3 class="text-sm font-semibold">Analyses avancées</h3>
				<div class="space-y-2">
					<div class="flex items-center justify-between">
						<Label for="show-hourly" class="cursor-pointer text-sm">Tendance horaire</Label>
						<Switch
							id="show-hourly"
							checked={$settings.showHourlyTrend}
							onchange={(e) => toggleChart('showHourlyTrend', e.currentTarget.checked)}
						/>
					</div>
					<div class="flex items-center justify-between">
						<Label for="show-records" class="cursor-pointer text-sm">Enregistrements</Label>
						<Switch
							id="show-records"
							checked={$settings.showSpeedRecords}
							onchange={(e) => toggleChart('showSpeedRecords', e.currentTarget.checked)}
						/>
					</div>
					<div class="flex items-center justify-between">
						<Label for="show-dist" class="cursor-pointer text-sm">Distribution des vitesses</Label>
						<Switch
							id="show-dist"
							checked={$settings.showSpeedDistribution}
							onchange={(e) => toggleChart('showSpeedDistribution', e.currentTarget.checked)}
						/>
					</div>
					<div class="flex items-center justify-between">
						<Label for="show-avg-sensor" class="cursor-pointer text-sm">Vitesse moy. par capteur</Label>
						<Switch
							id="show-avg-sensor"
							checked={$settings.showAverageSpeedBySensor}
							onchange={(e) => toggleChart('showAverageSpeedBySensor', e.currentTarget.checked)}
						/>
					</div>
					<div class="flex items-center justify-between">
						<Label for="show-heatmap" class="cursor-pointer text-sm">Heatmap d'activité</Label>
						<Switch
							id="show-heatmap"
							checked={$settings.showActivityHeatmap}
							onchange={(e) => toggleChart('showActivityHeatmap', e.currentTarget.checked)}
						/>
					</div>
					<div class="flex items-center justify-between">
						<Label for="show-lane-perf" class="cursor-pointer text-sm">Performance des corridors</Label>
						<Switch
							id="show-lane-perf"
							checked={$settings.showLanePerformance}
							onchange={(e) => toggleChart('showLanePerformance', e.currentTarget.checked)}
						/>
					</div>
					<div class="flex items-center justify-between">
						<Label for="show-consistency" class="cursor-pointer text-sm">Consistance des vitesses</Label>
						<Switch
							id="show-consistency"
							checked={$settings.showSpeedConsistency}
							onchange={(e) => toggleChart('showSpeedConsistency', e.currentTarget.checked)}
						/>
					</div>
					<div class="flex items-center justify-between">
						<Label for="show-top-sensors" class="cursor-pointer text-sm">Top capteurs</Label>
						<Switch
							id="show-top-sensors"
							checked={$settings.showTopSensors}
							onchange={(e) => toggleChart('showTopSensors', e.currentTarget.checked)}
						/>
					</div>
					<div class="flex items-center justify-between">
						<Label for="show-time-period" class="cursor-pointer text-sm">Analyse par période</Label>
						<Switch
							id="show-time-period"
							checked={$settings.showTimePeriodAnalysis}
							onchange={(e) => toggleChart('showTimePeriodAnalysis', e.currentTarget.checked)}
						/>
					</div>
				</div>
			</div>

			<!-- Reset -->
			<div class="border-t pt-4">
				<Button variant="outline" class="w-full" onclick={() => settings.reset()}>
					<RotateCcw class="mr-2 h-4 w-4" />
					Réinitialiser les paramètres
				</Button>
			</div>
		</div>
	</SheetContent>
</Sheet>
