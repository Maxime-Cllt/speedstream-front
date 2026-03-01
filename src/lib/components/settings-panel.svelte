<script lang="ts">
	import { settings } from '../stores/settings';
	import { isConnected, connectionError } from '../stores/data';
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
	import { Settings, RotateCcw, Wifi, WifiOff, Eye, EyeOff, Activity } from 'lucide-svelte';

	let showToken = $state(false);
	let sensorSearch = $state('');

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

	const filteredSensorsList = $derived(
		availableSensors.filter((s) => s.toLowerCase().includes(sensorSearch.toLowerCase()))
	);
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
			<!-- Source de données -->
			<div class="space-y-3">
				<h3 class="text-sm font-semibold">Source des données</h3>
				<div class="grid grid-cols-2 gap-2">
					<button
						onclick={() => settings.update((s) => ({ ...s, dataMode: 'simulation' }))}
						class="rounded-md px-3 py-2 text-sm font-medium transition-colors {$settings.dataMode ===
						'simulation'
							? 'bg-primary text-primary-foreground'
							: 'bg-muted text-muted-foreground hover:bg-muted/80 hover:text-foreground'}"
					>
						Simulation
					</button>
					<button
						onclick={() => settings.update((s) => ({ ...s, dataMode: 'api' }))}
						class="rounded-md px-3 py-2 text-sm font-medium transition-colors {$settings.dataMode ===
						'api'
							? 'bg-primary text-primary-foreground'
							: 'bg-muted text-muted-foreground hover:bg-muted/80 hover:text-foreground'}"
					>
						API Live
					</button>
				</div>
			</div>

			<!-- Configuration API (visible si mode api) -->
			{#if $settings.dataMode === 'api'}
				<div class="space-y-4 border-t pt-4">
					<div class="flex items-center justify-between">
						<h3 class="text-sm font-semibold">Configuration API</h3>
						<div class="flex items-center gap-1.5 text-xs">
							{#if $connectionError}
								<WifiOff class="h-3.5 w-3.5 text-destructive" />
								<span class="text-destructive">Erreur</span>
							{:else if $isConnected}
								<Wifi class="h-3.5 w-3.5 text-green-500" />
								<span class="text-green-500">Connecté</span>
							{:else}
								<div class="h-2 w-2 animate-pulse rounded-full bg-yellow-500"></div>
								<span class="text-muted-foreground">En attente...</span>
							{/if}
						</div>
					</div>

					<div class="space-y-1">
						<Label class="text-xs">URL de l'API</Label>
						<input
							type="url"
							class="h-8 w-full rounded border bg-background px-2 text-sm"
							placeholder="http://localhost:8080"
							value={$settings.apiUrl}
							oninput={(e) =>
								settings.update((s) => ({
									...s,
									apiUrl: (e.target as HTMLInputElement).value
								}))}
						/>
					</div>

					<div class="space-y-1">
						<Label class="text-xs">Token d'authentification</Label>
						<div class="relative">
							<input
								type={showToken ? 'text' : 'password'}
								class="h-8 w-full rounded border bg-background px-2 pr-8 text-sm"
								placeholder="Bearer token..."
								value={$settings.apiToken}
								oninput={(e) =>
									settings.update((s) => ({
										...s,
										apiToken: (e.target as HTMLInputElement).value
									}))}
							/>
							<button
								type="button"
								onclick={() => (showToken = !showToken)}
								class="absolute top-1/2 right-2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
							>
								{#if showToken}
									<EyeOff class="h-3.5 w-3.5" />
								{:else}
									<Eye class="h-3.5 w-3.5" />
								{/if}
							</button>
						</div>
					</div>

					{#if $connectionError}
						<p class="rounded-md bg-destructive/10 px-3 py-2 text-xs text-destructive">
							{$connectionError}
						</p>
					{/if}
				</div>
			{/if}

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
					<div class="flex items-center gap-2">
						<Activity class="h-4 w-4 text-primary" />
						<h3 class="text-sm font-semibold">Flux des Capteurs</h3>
					</div>
					<div class="flex gap-1">
						<Button
							variant="ghost"
							class="h-7 px-2 text-[10px] tracking-wider uppercase"
							onclick={() => settings.update((s) => ({ ...s, selectedSensors: [] }))}
						>
							Tous
						</Button>
						{#if availableSensors.length > 0}
							<Button
								variant="ghost"
								class="h-7 px-2 text-[10px] tracking-wider text-muted-foreground uppercase"
								onclick={() => {
									const current = $settings.selectedSensors;
									const next = availableSensors.filter((s) => !current.includes(s));
									settings.update((s) => ({ ...s, selectedSensors: next }));
								}}
							>
								Inverser
							</Button>
						{/if}
					</div>
				</div>

				{#if availableSensors.length > 5}
					<div class="relative">
						<input
							type="text"
							placeholder="Rechercher un capteur..."
							bind:value={sensorSearch}
							class="h-8 w-full rounded-md border border-border bg-background px-3 py-1 text-xs focus:ring-1 focus:ring-primary focus:outline-none"
						/>
						{#if sensorSearch}
							<button
								onclick={() => (sensorSearch = '')}
								class="absolute top-1/2 right-2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
							>
								<RotateCcw class="h-3 w-3" />
							</button>
						{/if}
					</div>
				{/if}

				<div class="grid grid-cols-2 gap-2">
					{#if filteredSensorsList.length === 0}
						<p class="col-span-2 py-4 text-center text-sm text-muted-foreground italic">
							{sensorSearch ? 'Aucun capteur ne correspond' : 'Aucun capteur détecté'}
						</p>
					{:else}
						{#each filteredSensorsList as sensor (sensor)}
							<button
								onclick={() => toggleSensor(sensor)}
								class="group flex items-center justify-between rounded-lg border px-3 py-2.5 transition-all {isSensorSelected(
									sensor
								)
									? 'border-primary/50 bg-primary/5 ring-1 ring-primary/20'
									: 'border-border bg-card hover:border-border/80'}"
							>
								<div class="flex flex-col items-start gap-0.5">
									<span
										class="text-[10px] font-bold tracking-tighter text-muted-foreground uppercase transition-colors group-hover:text-primary/70"
										>Sensor</span
									>
									<span
										class="text-sm font-semibold {isSensorSelected(sensor)
											? 'text-foreground'
											: 'text-muted-foreground'}">{sensor}</span
									>
								</div>
								<div
									class="flex h-5 w-5 items-center justify-center rounded-full border transition-all {isSensorSelected(
										sensor
									)
										? 'border-primary bg-primary text-primary-foreground'
										: 'border-muted-foreground/30 bg-transparent'}"
								>
									{#if isSensorSelected(sensor)}
										<svg
											xmlns="http://www.w3.org/2000/svg"
											viewBox="0 0 24 24"
											fill="none"
											stroke="currentColor"
											stroke-width="4"
											class="h-3 w-3"><path d="M20 6 9 17l-5-5" /></svg
										>
									{/if}
								</div>
							</button>
						{/each}
					{/if}
				</div>
				{#if $settings.selectedSensors.length > 0}
					<p class="text-[10px] text-muted-foreground italic">
						* {$settings.selectedSensors.length} capteur(s) filtré(s) activement
					</p>
				{/if}
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
									class="h-8 w-full rounded border bg-background px-2 text-sm"
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
									class="h-8 w-full rounded border bg-background px-2 text-sm"
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
						<Label for="show-sensor" class="cursor-pointer text-sm">Statistiques des capteurs</Label
						>
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
						<Label for="show-avg-sensor" class="cursor-pointer text-sm"
							>Vitesse moy. par capteur</Label
						>
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
						<Label for="show-lane-perf" class="cursor-pointer text-sm"
							>Performance des corridors</Label
						>
						<Switch
							id="show-lane-perf"
							checked={$settings.showLanePerformance}
							onchange={(e) => toggleChart('showLanePerformance', e.currentTarget.checked)}
						/>
					</div>
					<div class="flex items-center justify-between">
						<Label for="show-consistency" class="cursor-pointer text-sm"
							>Consistance des vitesses</Label
						>
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
