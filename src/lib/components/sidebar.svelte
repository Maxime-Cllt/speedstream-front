<script lang="ts">
	import { Zap, Sun, Moon, ChevronRight, ChevronLeft, Radio, Check, Minus } from 'lucide-svelte';
	import { theme } from '$lib/stores/theme';
	import { settings } from '$lib/stores/settings';
	import { availableSensors } from '$lib/stores/data';
	import pkg from '../../../package.json';

	let open = $state(false);
	let sensorsOpen = $state(true);

	function toggleAllSensors(selectAll: boolean) {
		settings.update((s) => ({
			...s,
			selectedSensors: selectAll ? [...$availableSensors] : []
		}));
	}

	function toggleSensor(sensor: string) {
		const current = $settings.selectedSensors;
		const newSensors = current.includes(sensor)
			? current.filter((s) => s !== sensor)
			: [...current, sensor];
		settings.update((s) => ({ ...s, selectedSensors: newSensors }));
	}

	// FIX: empty = no explicit selection (visually unchecked), not "all selected"
	function isSensorSelected(sensor: string): boolean {
		return $settings.selectedSensors.includes(sensor);
	}

	let activeCount = $derived(
		$settings.selectedSensors.length === 0
			? $availableSensors.length
			: $settings.selectedSensors.length
	);

	$effect(() => {
		void $availableSensors;
	});
</script>

<aside
	class="sticky top-0 z-10 flex h-screen shrink-0 flex-col border-r border-border/40 bg-card/90 backdrop-blur-sm transition-all duration-300 {open
		? 'w-64'
		: 'w-14'}"
>
	<!-- Header -->
	<button
		onclick={() => (open = !open)}
		class="group relative flex h-14 w-full shrink-0 items-center overflow-hidden border-b border-border/40 px-3 transition-colors hover:bg-primary/5"
	>
		<div
			class="absolute inset-0 bg-gradient-to-r from-primary/8 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"
		></div>
		<div
			class="relative flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-primary/15 ring-1 ring-primary/25 transition-all duration-200 group-hover:bg-primary/20 group-hover:ring-primary/40"
		>
			<Zap class="h-4 w-4 text-primary" />
		</div>
		{#if open}
			<div class="relative ml-3 flex min-w-0 flex-1 items-center justify-between">
				<div class="min-w-0">
					<span class="block truncate text-sm font-bold text-foreground">SpeedStream</span>
					<span class="block text-[10px] font-medium text-muted-foreground/70">
						Analytics v{pkg.version}
					</span>
				</div>
				<ChevronLeft class="h-4 w-4 shrink-0 text-muted-foreground/60" />
			</div>
		{:else}
			<ChevronRight
				class="absolute right-1.5 top-1/2 h-3 w-3 -translate-y-1/2 text-muted-foreground/40"
			/>
		{/if}
	</button>

	{#if open}
		<!-- Expanded content -->
		<div class="flex-1 space-y-2 overflow-y-auto p-3">
			<!-- Sensors section -->
			{#if $availableSensors.length > 0}
				<div>
					<button
						onclick={() => (sensorsOpen = !sensorsOpen)}
						class="group flex w-full items-center justify-between rounded-lg px-2 py-1.5 text-xs font-semibold tracking-wider text-muted-foreground uppercase transition-colors hover:bg-muted/40 hover:text-foreground"
					>
						<span class="flex items-center gap-2">
							<Radio class="h-3.5 w-3.5" />
							Capteurs
							<span
								class="rounded-full bg-primary/10 px-1.5 py-0.5 text-[10px] font-bold text-primary"
							>
								{activeCount}/{$availableSensors.length}
							</span>
						</span>
						<span
							class="text-base leading-none text-muted-foreground/50 transition-transform duration-200 {sensorsOpen
								? 'rotate-90'
								: ''}">›</span
						>
					</button>

					{#if sensorsOpen}
						<div class="mt-1.5 rounded-xl border border-border/40 bg-muted/20 p-2.5">
							<!-- Actions rapides -->
							<div class="mb-2.5 grid grid-cols-2 gap-1.5">
								<button
									onclick={() => toggleAllSensors(true)}
									class="flex items-center justify-center gap-1.5 rounded-lg bg-primary/10 px-2 py-1.5 text-xs font-medium text-primary transition-colors hover:bg-primary/20"
								>
									<Check class="h-3 w-3" />
									Tout cocher
								</button>
								<button
									onclick={() => toggleAllSensors(false)}
									class="flex items-center justify-center gap-1.5 rounded-lg bg-muted px-2 py-1.5 text-xs font-medium text-muted-foreground transition-colors hover:bg-destructive/10 hover:text-destructive"
								>
									<Minus class="h-3 w-3" />
									Tout décocher
								</button>
							</div>

							<!-- Liste des capteurs -->
							<div class="max-h-48 space-y-0.5 overflow-y-auto">
								{#each $availableSensors as sensor}
									<button
										onclick={() => toggleSensor(sensor)}
										class="flex w-full items-center gap-2.5 rounded-lg px-2.5 py-1.5 text-left transition-colors hover:bg-muted/60 {isSensorSelected(sensor)
											? 'text-foreground'
											: 'text-muted-foreground'}"
									>
										<div
											class="flex h-4 w-4 shrink-0 items-center justify-center rounded border transition-all {isSensorSelected(sensor)
												? 'border-primary bg-primary'
												: 'border-border/70 bg-transparent'}"
										>
											{#if isSensorSelected(sensor)}
												<Check class="h-2.5 w-2.5 text-primary-foreground" />
											{/if}
										</div>
										<span class="truncate font-mono text-xs">{sensor}</span>
									</button>
								{/each}
							</div>

							{#if $settings.selectedSensors.length > 0}
								<p class="mt-2 text-center text-[10px] text-muted-foreground/60">
									{$settings.selectedSensors.length} capteur(s) actif(s)
								</p>
							{/if}
						</div>
					{/if}
				</div>

				<div class="h-px bg-border/30"></div>
			{/if}

			<!-- Apparence -->
			<div>
				<p
					class="mb-1.5 flex items-center gap-2 px-2 py-1.5 text-xs font-semibold tracking-wider text-muted-foreground uppercase"
				>
					<Sun class="h-3.5 w-3.5" />
					Apparence
				</p>
				<div class="flex rounded-xl border border-border/40 bg-muted/20 p-1 gap-1">
					<button
						onclick={() => theme.set('light')}
						class="flex flex-1 items-center justify-center gap-2 rounded-lg px-3 py-2 text-sm transition-all duration-200 {$theme ===
						'light'
							? 'bg-card shadow-sm text-foreground font-medium ring-1 ring-border/50'
							: 'text-muted-foreground hover:text-foreground'}"
					>
						<Sun class="h-4 w-4 shrink-0" />
						Clair
					</button>
					<button
						onclick={() => theme.set('dark')}
						class="flex flex-1 items-center justify-center gap-2 rounded-lg px-3 py-2 text-sm transition-all duration-200 {$theme ===
						'dark'
							? 'bg-card shadow-sm text-foreground font-medium ring-1 ring-border/50'
							: 'text-muted-foreground hover:text-foreground'}"
					>
						<Moon class="h-4 w-4 shrink-0" />
						Sombre
					</button>
				</div>
			</div>
		</div>
	{:else}
		<!-- Collapsed icons -->
		<div class="flex flex-1 flex-col items-center gap-1.5 py-4">
			{#if $availableSensors.length > 0}
				<button
					onclick={() => (open = true)}
					class="relative flex h-9 w-9 items-center justify-center rounded-xl text-muted-foreground transition-colors hover:bg-muted/50 hover:text-foreground"
					title="Capteurs"
				>
					<Radio class="h-4 w-4" />
					{#if $settings.selectedSensors.length > 0}
						<span
							class="absolute -top-0.5 -right-0.5 flex h-4 w-4 items-center justify-center rounded-full bg-primary text-[9px] font-bold text-primary-foreground"
						>
							{$settings.selectedSensors.length}
						</span>
					{/if}
				</button>
			{/if}
			<button
				onclick={() => theme.toggle()}
				class="flex h-9 w-9 items-center justify-center rounded-xl text-muted-foreground transition-colors hover:bg-muted/50 hover:text-foreground"
				title="Changer de thème"
			>
				{#if $theme === 'dark'}
					<Moon class="h-4 w-4" />
				{:else}
					<Sun class="h-4 w-4" />
				{/if}
			</button>
		</div>
	{/if}

	<!-- Footer -->
	<div
		class="border-t border-border/40 py-3 {open ? 'px-4' : 'flex items-center justify-center'}"
	>
		{#if open}
			<div class="flex items-center justify-between text-xs text-muted-foreground">
				<span>Version</span>
				<span class="font-mono font-medium text-foreground">v{pkg.version}</span>
			</div>
		{:else}
			<span class="text-[10px] font-mono text-muted-foreground/60">v{pkg.version}</span>
		{/if}
	</div>
</aside>
