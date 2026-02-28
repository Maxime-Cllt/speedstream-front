<script lang="ts">
	import { Zap, Sun, Moon, ChevronRight, ChevronLeft } from 'lucide-svelte';
	import { theme } from '$lib/stores/theme';
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
				<!-- Apparence -->
				<div>
					<p class="mb-2 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
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
