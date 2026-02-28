<script lang="ts">
	import { onMount, onDestroy } from 'svelte';
	import { Gauge, TrendingUp, Activity, Zap } from 'lucide-svelte';
	import { settings, displaySettings } from '$lib/stores/settings';
	import {
		filteredData,
		stats,
		availableSensors,
		isConnected,
		isLoading,
		initRealtimeData
	} from '$lib/stores/data';
	import StatCard from '$lib/components/dashboard/stat-card.svelte';
	import SpeedChart from '$lib/components/dashboard/speed-chart.svelte';
	import LaneDistribution from '$lib/components/dashboard/lane-distribution.svelte';
	import SensorStats from '$lib/components/dashboard/sensor-stats.svelte';
	import HourlyTrend from '$lib/components/dashboard/hourly-trend.svelte';
	import SpeedRecords from '$lib/components/dashboard/speed-records.svelte';
	import SpeedDistribution from '$lib/components/dashboard/speed-distribution.svelte';
	import AverageSpeedBySensor from '$lib/components/dashboard/average-speed-by-sensor.svelte';
	import ActivityHeatmap from '$lib/components/dashboard/activity-heatmap.svelte';
	import LanePerformance from '$lib/components/dashboard/lane-performance.svelte';
	import SpeedConsistency from '$lib/components/dashboard/speed-consistency.svelte';
	import TopSensors from '$lib/components/dashboard/top-sensors.svelte';
	import TimePeriodAnalysis from '$lib/components/dashboard/time-period-analysis.svelte';
	import SettingsPanel from '$lib/components/settings-panel.svelte';

	let hasNewRecord = $state(false);
	let previousMaxSpeed = $state(0);
	let cleanup: (() => void) | undefined;

	onMount(() => {
		settings.init();
		cleanup = initRealtimeData();
	});

	onDestroy(() => {
		if (cleanup) cleanup();
	});

	$effect(() => {
		const maxSpeed = $stats.maxSpeed;
		if (maxSpeed > previousMaxSpeed && previousMaxSpeed > 0) {
			hasNewRecord = true;
			setTimeout(() => (hasNewRecord = false), 3000);
		}
		previousMaxSpeed = maxSpeed;
	});

	const isSimulation = true;
</script>

<div class="flex min-h-screen flex-col">
	<header class="border-border bg-card border-b">
		<div class="mx-auto px-6 py-6">
			<div class="flex items-center justify-between">
				<div>
					<h1 class="text-foreground flex items-center gap-3 text-4xl font-bold">
						<Zap class="text-primary h-8 w-8" />
						RaceTrack Analytics
					</h1>
					<p class="text-muted-foreground mt-1">Racing Speed Analytics Dashboard</p>
				</div>
				<div class="flex items-center gap-4">
					<div class="flex items-center gap-2">
						<span
							class="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors {isSimulation
								? 'border-transparent bg-primary text-primary-foreground'
								: 'border-transparent bg-secondary text-secondary-foreground'}"
						>
							{isSimulation ? '🎮 SIMULATION' : '🔧 DEV'}
						</span>
						<div
							class="h-2 w-2 rounded-full {$isConnected ? 'animate-pulse bg-green-500' : 'bg-yellow-500'}"
						></div>
						<span class="text-muted-foreground text-sm">
							{isSimulation ? 'Données simulées' : $isConnected ? 'SSE connecté' : 'SSE en connexion...'}
						</span>
					</div>
					<SettingsPanel availableSensors={$availableSensors} />
				</div>
			</div>
		</div>
	</header>

	<main class="mx-auto px-6 py-8">
		{#if $isLoading}
			<div class="flex h-64 items-center justify-center">
				<div class="text-muted-foreground">Chargement des données...</div>
			</div>
		{:else}
			<!-- Stat Cards -->
			<div class="mb-8 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
				<StatCard
					title="Vitesse Moyenne"
					value="{$stats.avgSpeed} km/h"
					subtitle="Sur les données filtrées"
					icon={Gauge}
				/>
				<StatCard
					title="Vitesse Maximale"
					value="{$stats.maxSpeed} km/h"
					subtitle="Record de la session"
					icon={TrendingUp}
					isNewRecord={hasNewRecord}
				/>
				<StatCard
					title="Vitesse Minimale"
					value="{$stats.minSpeed} km/h"
					subtitle="Plus basse vitesse"
					icon={Activity}
				/>
				<StatCard
					title="Total Passages"
					value={$stats.totalReadings}
					subtitle="Lectures capteurs"
					icon={Zap}
				/>
			</div>

			<!-- Speed Chart -->
			{#if $displaySettings.showSpeedChart}
				<div class="mb-8">
					<SpeedChart
						data={$filteredData}
						title="Évolution des vitesses"
						description="Vitesses enregistrées (simulation - mise à jour toutes les {$settings.updateInterval / 1000}s)"
					/>
				</div>
			{/if}

			<!-- Lane Distribution + Sensor Stats -->
			{#if $displaySettings.showLaneDistribution || $displaySettings.showSensorStats}
				<div class="mb-8 grid gap-6 lg:grid-cols-2">
					{#if $displaySettings.showLaneDistribution}
						<LaneDistribution data={$filteredData} />
					{/if}
					{#if $displaySettings.showSensorStats}
						<SensorStats data={$filteredData} />
					{/if}
				</div>
			{/if}

			<!-- Advanced Analytics -->
			{#if $displaySettings.showHourlyTrend || $displaySettings.showSpeedRecords || $displaySettings.showSpeedDistribution || $displaySettings.showAverageSpeedBySensor || $displaySettings.showActivityHeatmap || $displaySettings.showLanePerformance || $displaySettings.showSpeedConsistency || $displaySettings.showTopSensors || $displaySettings.showTimePeriodAnalysis}
				<h2 class="text-foreground mb-6 text-2xl font-bold">Analyses avancées</h2>

				{#if $displaySettings.showHourlyTrend}
					<div class="mb-8">
						<HourlyTrend data={$filteredData} />
					</div>
				{/if}

				{#if $displaySettings.showSpeedRecords}
					<div class="mb-8">
						<SpeedRecords data={$filteredData} />
					</div>
				{/if}

				{#if $displaySettings.showSpeedDistribution || $displaySettings.showAverageSpeedBySensor}
					<div class="mb-8 grid gap-6 lg:grid-cols-2">
						{#if $displaySettings.showSpeedDistribution}
							<SpeedDistribution data={$filteredData} />
						{/if}
						{#if $displaySettings.showAverageSpeedBySensor}
							<AverageSpeedBySensor data={$filteredData} />
						{/if}
					</div>
				{/if}

				{#if $displaySettings.showActivityHeatmap}
					<div class="mb-8">
						<ActivityHeatmap data={$filteredData} />
					</div>
				{/if}

				{#if $displaySettings.showLanePerformance || $displaySettings.showSpeedConsistency}
					<div class="mb-8 grid gap-6 lg:grid-cols-2">
						{#if $displaySettings.showLanePerformance}
							<LanePerformance data={$filteredData} />
						{/if}
						{#if $displaySettings.showSpeedConsistency}
							<SpeedConsistency data={$filteredData} />
						{/if}
					</div>
				{/if}

				{#if $displaySettings.showTopSensors || $displaySettings.showTimePeriodAnalysis}
					<div class="mb-8 grid gap-6 lg:grid-cols-2">
						{#if $displaySettings.showTopSensors}
							<TopSensors data={$filteredData} />
						{/if}
						{#if $displaySettings.showTimePeriodAnalysis}
							<TimePeriodAnalysis data={$filteredData} />
						{/if}
					</div>
				{/if}
			{/if}

			<!-- Footer -->
			<div class="border-border bg-card mt-8 rounded-lg border p-6">
				<div class="flex items-start gap-4">
					<div class="bg-primary/10 flex h-10 w-10 items-center justify-center rounded-full">
						<Activity class="text-primary h-5 w-5" />
					</div>
					<div>
						<h3 class="mb-1 text-lg font-semibold">À propos de RaceTrack Analytics</h3>
						<p class="text-muted-foreground text-sm">
							Système de Business Intelligence pour l'analyse des données de vitesse collectées par
							capteurs sur circuit. Mode SIMULATION : Les données affichées sont générées
							aléatoirement pour la démonstration de l'interface.
						</p>
					</div>
				</div>
			</div>
		{/if}
	</main>
</div>
