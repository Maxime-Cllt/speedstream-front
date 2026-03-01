<script lang="ts">
	import { Zap, Sun, Moon, ChevronRight, ChevronLeft } from 'lucide-svelte';
	import { theme } from '$lib/stores/theme';
	import { settings } from '$lib/stores/settings';
	import { availableSensors } from '$lib/stores/data';
	import pkg from '../../../package.json';

	let open = $state(false);
</script>

<aside
	class="sticky top-0 flex h-screen shrink-0 flex-col border-r border-border bg-card transition-[width] duration-200 {open
		? 'w-56'
		: 'w-14'}"
>
	<!-- Header: toggle button -->
	<button
		onclick={() => (open = !open)}
		class="flex h-14 w-full items-center justify-between border-b border-border px-3 transition-colors hover:bg-muted/50"
	>
		<Zap class="h-5 w-5 shrink-0 text-primary" />
		{#if open}
			<span class="flex-1 truncate px-2 text-left text-sm font-semibold text-foreground">
				SpeedStream
			</span>
			<ChevronLeft class="h-4 w-4 shrink-0 text-muted-foreground" />
		{:else}
			<ChevronRight class="h-4 w-4 shrink-0 text-muted-foreground" />
		{/if}
	</button>

	<!-- Content -->
	<div class="flex-1 overflow-hidden">
		{#if open}
			<div class="space-y-4 p-4">
				<!-- Capteurs -->
				{#if $availableSensors.length > 0}
					<div>
						<p class="mb-2 text-xs font-semibold tracking-wider text-muted-foreground uppercase">
							Capteurs
						</p>
						<div class="mb-2 flex gap-1">
							<button
								onclick={() =>
									settings.update((s) => ({ ...s, selectedSensors: [...$availableSensors] }))}
								class="flex-1 rounded px-2 py-1 text-xs text-muted-foreground hover:bg-muted hover:text-foreground"
							>
								Tout cocher
							</button>
							<button
								onclick={() => settings.update((s) => ({ ...s, selectedSensors: [] }))}
								class="flex-1 rounded px-2 py-1 text-xs text-muted-foreground hover:bg-muted hover:text-foreground"
							>
								Tout décocher
							</button>
						</div>
						<div class="max-h-48 space-y-1 overflow-y-auto">
							{#each $availableSensors as sensor}
								<label class="flex cursor-pointer items-center gap-2 text-sm">
									<input
										type="checkbox"
										checked={$settings.selectedSensors.length === 0 ||
											$settings.selectedSensors.includes(sensor)}
										onchange={() => {
											const current = $settings.selectedSensors;
											const newSensors = current.includes(sensor)
												? current.filter((s) => s !== sensor)
												: [...current, sensor];
											settings.update((s) => ({ ...s, selectedSensors: newSensors }));
										}}
										class="h-4 w-4 rounded border-input"
									/>
									<span class="truncate">{sensor}</span>
								</label>
							{/each}
						</div>
					</div>
				{/if}

				<!-- Apparence -->
				<div>
					<p class="mb-2 text-xs font-semibold tracking-wider text-muted-foreground uppercase">
						Apparence
					</p>
					<div class="space-y-1">
						<button
							onclick={() => {
								if ($theme !== 'light') theme.toggle();
							}}
							class="flex w-full items-center gap-2 rounded-md px-3 py-2 text-sm transition-colors {$theme ===
							'light'
								? 'bg-primary/10 font-medium text-primary'
								: 'text-muted-foreground hover:bg-muted hover:text-foreground'}"
						>
							<Sun class="h-4 w-4 shrink-0" />
							Mode clair
						</button>
						<button
							onclick={() => {
								if ($theme !== 'dark') theme.toggle();
							}}
							class="flex w-full items-center gap-2 rounded-md px-3 py-2 text-sm transition-colors {$theme ===
							'dark'
								? 'bg-primary/10 font-medium text-primary'
								: 'text-muted-foreground hover:bg-muted hover:text-foreground'}"
						>
							<Moon class="h-4 w-4 shrink-0" />
							Mode sombre
						</button>
					</div>
				</div>
			</div>
		{/if}
	</div>

	<!-- Footer: version -->
	<div class="border-t border-border py-3 {open ? 'px-4' : 'flex justify-center'}">
		{#if open}
			<div class="flex items-center justify-between text-xs text-muted-foreground">
				<span>Version</span>
				<span class="font-medium text-foreground">v{pkg.version}</span>
			</div>
		{:else}
			<span class="text-[10px] text-muted-foreground">v{pkg.version}</span>
		{/if}
	</div>
</aside>
