<script lang="ts">
	import type { SpeedData } from '../../types/speed-data';
	import { Lane } from '../../types/speed-data';
	import { format } from 'date-fns';
	import { Trophy, ArrowUpDown, ArrowUp, ArrowDown, Search, X, GripVertical } from 'lucide-svelte';
	import Card from '../ui/card.svelte';
	import CardHeader from '../ui/card-header.svelte';
	import CardTitle from '../ui/card-title.svelte';
	import CardContent from '../ui/card-content.svelte';
	import CardDescription from '../ui/card-description.svelte';

	interface Props {
		data: SpeedData[];
	}

	let { data }: Props = $props();

	type SortKey = keyof SpeedData | null;
	type SortDirection = 'asc' | 'desc';

	let sortKey = $state<SortKey>(null);
	let sortDirection = $state<SortDirection>('asc');

	let filterIdValue = $state('');
	let filterSensorValue = $state('');
	let filterSpeedValue = $state('');
	let filterLaneValue = $state('');
	let filterDateValue = $state('');

	let currentPage = $state(1);
	let itemsPerPage = $state(20);

	// Column widths
	let colWidthId = $state(60);
	let colWidthSensor = $state(200);
	let colWidthSpeed = $state(120);
	let colWidthLane = $state(100);
	let colWidthDate = $state(180);

	// Resizing
	let isResizing = $state(false);
	let resizingColumn = $state<string | null>(null);
	let startX = $state(0);
	let startWidth = $state(0);

	function handleResizeStart(e: MouseEvent, column: string, currentWidth: number) {
		e.preventDefault();
		e.stopPropagation();
		isResizing = true;
		resizingColumn = column;
		startX = e.clientX;
		startWidth = currentWidth;

		const handleMove = (ev: MouseEvent) => {
			if (!isResizing) return;
			const diff = ev.clientX - startX;
			const newWidth = Math.max(50, startWidth + diff);
			if (column === 'id') colWidthId = newWidth;
			else if (column === 'sensor_name') colWidthSensor = newWidth;
			else if (column === 'speed') colWidthSpeed = newWidth;
			else if (column === 'lane') colWidthLane = newWidth;
			else if (column === 'created_at') colWidthDate = newWidth;
		};

		const handleUp = () => {
			isResizing = false;
			resizingColumn = null;
			document.removeEventListener('mousemove', handleMove);
			document.removeEventListener('mouseup', handleUp);
		};

		document.addEventListener('mousemove', handleMove);
		document.addEventListener('mouseup', handleUp);
	}

	function handleSort(key: keyof SpeedData) {
		if (sortKey === key) {
			sortDirection = sortDirection === 'asc' ? 'desc' : 'asc';
		} else {
			sortKey = key;
			sortDirection = 'asc';
		}
	}

	function clearFilters() {
		filterIdValue = '';
		filterSensorValue = '';
		filterSpeedValue = '';
		filterLaneValue = '';
		filterDateValue = '';
		currentPage = 1;
	}

	let hasActiveFilters = $derived(
		filterIdValue !== '' ||
			filterSensorValue !== '' ||
			filterSpeedValue !== '' ||
			filterLaneValue !== '' ||
			filterDateValue !== ''
	);

	let filteredAndSortedData = $derived.by(() => {
		let filtered = [...data];

		if (filterIdValue) filtered = filtered.filter((d) => d.id.toString().includes(filterIdValue));
		if (filterSensorValue)
			filtered = filtered.filter((d) =>
				(d.sensor_name || '').toLowerCase().includes(filterSensorValue.toLowerCase())
			);
		if (filterSpeedValue)
			filtered = filtered.filter((d) => d.speed.toString().includes(filterSpeedValue));
		if (filterLaneValue)
			filtered = filtered.filter((d) =>
				d.lane.toLowerCase().includes(filterLaneValue.toLowerCase())
			);
		if (filterDateValue)
			filtered = filtered.filter((d) =>
				format(new Date(d.created_at), 'dd/MM/yyyy HH:mm:ss')
					.toLowerCase()
					.includes(filterDateValue.toLowerCase())
			);

		if (sortKey) {
			filtered.sort((a, b) => {
				const aValue = a[sortKey!];
				const bValue = b[sortKey!];
				if (aValue === null || aValue === undefined) return 1;
				if (bValue === null || bValue === undefined) return -1;
				let comparison = 0;
				if (typeof aValue === 'string' && typeof bValue === 'string') {
					comparison = aValue.localeCompare(bValue);
				} else if (typeof aValue === 'number' && typeof bValue === 'number') {
					comparison = aValue - bValue;
				} else {
					comparison = String(aValue).localeCompare(String(bValue));
				}
				return sortDirection === 'asc' ? comparison : -comparison;
			});
		}

		return filtered;
	});

	let totalPages = $derived(Math.ceil(filteredAndSortedData.length / itemsPerPage));

	let paginatedData = $derived(
		filteredAndSortedData.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage)
	);

	function onFilterChange() {
		currentPage = 1;
	}
</script>

<Card class="overflow-hidden border-border/50 bg-gradient-to-b from-card to-card/50">
	<CardHeader>
		<div class="flex items-center justify-between">
			<div>
				<CardTitle class="flex items-center gap-2 text-lg">
					<div class="flex h-8 w-8 items-center justify-center rounded-lg bg-yellow-500/10">
						<Trophy class="h-4 w-4 text-yellow-500" />
					</div>
					Historique des mesures
				</CardTitle>
				<CardDescription class="mt-1">
					<span class="font-medium text-foreground">{filteredAndSortedData.length}</span>
					enregistrement{filteredAndSortedData.length > 1 ? 's' : ''} trouvé{filteredAndSortedData.length > 1 ? 's' : ''}
					sur <span class="font-medium text-foreground">{data.length}</span> au total
				</CardDescription>
			</div>
			{#if hasActiveFilters}
				<button
					class="flex items-center gap-1.5 rounded-lg border border-border/50 bg-muted/50 px-3 py-1.5 text-sm transition-colors hover:bg-accent"
					onclick={clearFilters}
				>
					<X class="h-3.5 w-3.5" />
					Effacer les filtres
				</button>
			{/if}
		</div>
	</CardHeader>
	<CardContent>
		{#if data.length === 0}
			<div class="flex h-[300px] items-center justify-center text-muted-foreground">
				Aucune donnée disponible
			</div>
		{:else}
			<div class="overflow-x-auto rounded-md border">
				<table class="w-full text-sm">
					<thead>
						<!-- Sort headers -->
						<tr class="border-b">
							<th style="width:{colWidthId}px" class="relative p-0">
								<button
									class="flex h-9 w-full items-center justify-start gap-1 px-3 text-left text-xs font-medium hover:bg-muted"
									onclick={() => handleSort('id')}
								>
									ID
									{#if sortKey !== 'id'}<ArrowUpDown class="h-3 w-3" />
									{:else if sortDirection === 'asc'}<ArrowUp class="h-3 w-3" />
									{:else}<ArrowDown class="h-3 w-3" />{/if}
								</button>
								<!-- svelte-ignore a11y_no_noninteractive_element_interactions -->
								<span
									role="separator"
									class="group absolute top-0 right-0 flex h-full w-2 cursor-col-resize items-center justify-center hover:bg-primary/50 active:bg-primary"
									onmousedown={(e) => handleResizeStart(e, 'id', colWidthId)}
								>
									<GripVertical
										class="h-4 w-4 text-muted-foreground opacity-0 transition-opacity group-hover:opacity-100"
									/>
								</span>
							</th>
							<th style="width:{colWidthSensor}px" class="relative p-0">
								<button
									class="flex h-9 w-full items-center justify-start gap-1 px-3 text-left text-xs font-medium hover:bg-muted"
									onclick={() => handleSort('sensor_name')}
								>
									Capteur
									{#if sortKey !== 'sensor_name'}<ArrowUpDown class="h-3 w-3" />
									{:else if sortDirection === 'asc'}<ArrowUp class="h-3 w-3" />
									{:else}<ArrowDown class="h-3 w-3" />{/if}
								</button>
								<!-- svelte-ignore a11y_no_noninteractive_element_interactions -->
								<span
									role="separator"
									class="group absolute top-0 right-0 flex h-full w-2 cursor-col-resize items-center justify-center hover:bg-primary/50 active:bg-primary"
									onmousedown={(e) => handleResizeStart(e, 'sensor_name', colWidthSensor)}
								>
									<GripVertical
										class="h-4 w-4 text-muted-foreground opacity-0 transition-opacity group-hover:opacity-100"
									/>
								</span>
							</th>
							<th style="width:{colWidthSpeed}px" class="relative p-0">
								<button
									class="flex h-9 w-full items-center justify-start gap-1 px-3 text-left text-xs font-medium hover:bg-muted"
									onclick={() => handleSort('speed')}
								>
									Vitesse
									{#if sortKey !== 'speed'}<ArrowUpDown class="h-3 w-3" />
									{:else if sortDirection === 'asc'}<ArrowUp class="h-3 w-3" />
									{:else}<ArrowDown class="h-3 w-3" />{/if}
								</button>
								<!-- svelte-ignore a11y_no_noninteractive_element_interactions -->
								<span
									role="separator"
									class="group absolute top-0 right-0 flex h-full w-2 cursor-col-resize items-center justify-center hover:bg-primary/50 active:bg-primary"
									onmousedown={(e) => handleResizeStart(e, 'speed', colWidthSpeed)}
								>
									<GripVertical
										class="h-4 w-4 text-muted-foreground opacity-0 transition-opacity group-hover:opacity-100"
									/>
								</span>
							</th>
							<th style="width:{colWidthLane}px" class="relative p-0">
								<button
									class="flex h-9 w-full items-center justify-start gap-1 px-3 text-left text-xs font-medium hover:bg-muted"
									onclick={() => handleSort('lane')}
								>
									Voie
									{#if sortKey !== 'lane'}<ArrowUpDown class="h-3 w-3" />
									{:else if sortDirection === 'asc'}<ArrowUp class="h-3 w-3" />
									{:else}<ArrowDown class="h-3 w-3" />{/if}
								</button>
								<!-- svelte-ignore a11y_no_noninteractive_element_interactions -->
								<span
									role="separator"
									class="group absolute top-0 right-0 flex h-full w-2 cursor-col-resize items-center justify-center hover:bg-primary/50 active:bg-primary"
									onmousedown={(e) => handleResizeStart(e, 'lane', colWidthLane)}
								>
									<GripVertical
										class="h-4 w-4 text-muted-foreground opacity-0 transition-opacity group-hover:opacity-100"
									/>
								</span>
							</th>
							<th style="width:{colWidthDate}px" class="relative p-0">
								<button
									class="flex h-9 w-full items-center justify-start gap-1 px-3 text-left text-xs font-medium hover:bg-muted"
									onclick={() => handleSort('created_at')}
								>
									Date & Heure
									{#if sortKey !== 'created_at'}<ArrowUpDown class="h-3 w-3" />
									{:else if sortDirection === 'asc'}<ArrowUp class="h-3 w-3" />
									{:else}<ArrowDown class="h-3 w-3" />{/if}
								</button>
								<!-- svelte-ignore a11y_no_noninteractive_element_interactions -->
								<span
									role="separator"
									class="group absolute top-0 right-0 flex h-full w-2 cursor-col-resize items-center justify-center hover:bg-primary/50 active:bg-primary"
									onmousedown={(e) => handleResizeStart(e, 'created_at', colWidthDate)}
								>
									<GripVertical
										class="h-4 w-4 text-muted-foreground opacity-0 transition-opacity group-hover:opacity-100"
									/>
								</span>
							</th>
						</tr>
						<!-- Filter row -->
						<tr class="border-b">
							<th style="width:{colWidthId}px" class="p-1">
								<div class="relative">
									<Search class="absolute top-2 left-2 h-3 w-3 text-muted-foreground" />
									<input
										class="h-7 w-full rounded border bg-background pl-7 text-xs"
										placeholder="ID..."
										bind:value={filterIdValue}
										oninput={onFilterChange}
									/>
								</div>
							</th>
							<th style="width:{colWidthSensor}px" class="p-1">
								<div class="relative">
									<Search class="absolute top-2 left-2 h-3 w-3 text-muted-foreground" />
									<input
										class="h-7 w-full rounded border bg-background pl-7 text-xs"
										placeholder="Rechercher..."
										bind:value={filterSensorValue}
										oninput={onFilterChange}
									/>
								</div>
							</th>
							<th style="width:{colWidthSpeed}px" class="p-1">
								<div class="relative">
									<Search class="absolute top-2 left-2 h-3 w-3 text-muted-foreground" />
									<input
										class="h-7 w-full rounded border bg-background pl-7 text-xs"
										placeholder="Vitesse..."
										bind:value={filterSpeedValue}
										oninput={onFilterChange}
									/>
								</div>
							</th>
							<th style="width:{colWidthLane}px" class="p-1">
								<div class="relative">
									<Search class="absolute top-2 left-2 h-3 w-3 text-muted-foreground" />
									<input
										class="h-7 w-full rounded border bg-background pl-7 text-xs"
										placeholder="Voie..."
										bind:value={filterLaneValue}
										oninput={onFilterChange}
									/>
								</div>
							</th>
							<th style="width:{colWidthDate}px" class="p-1">
								<div class="relative">
									<Search class="absolute top-2 left-2 h-3 w-3 text-muted-foreground" />
									<input
										class="h-7 w-full rounded border bg-background pl-7 text-xs"
										placeholder="Date..."
										bind:value={filterDateValue}
										oninput={onFilterChange}
									/>
								</div>
							</th>
						</tr>
					</thead>
					<tbody>
						{#if paginatedData.length === 0}
							<tr>
								<td colspan="5" class="h-24 text-center text-muted-foreground">
									Aucun résultat trouvé
								</td>
							</tr>
						{:else}
							{#each paginatedData as record (record.id)}
								<tr class="border-b transition-colors hover:bg-muted/50">
									<td style="width:{colWidthId}px" class="px-3 py-2 font-mono text-sm"
										>{record.id}</td
									>
									<td style="width:{colWidthSensor}px" class="px-3 py-2"
										>{record.sensor_name || 'Unknown'}</td
									>
									<td style="width:{colWidthSpeed}px" class="px-3 py-2">
										<span class="font-semibold">{record.speed} km/h</span>
									</td>
									<td style="width:{colWidthLane}px" class="px-3 py-2">
										<span
											class="inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold
											{record.lane === Lane.Left
												? 'border-transparent bg-primary text-primary-foreground'
												: 'border-transparent bg-secondary text-secondary-foreground'}"
										>
											{record.lane === Lane.Left ? 'Gauche' : 'Droite'}
										</span>
									</td>
									<td
										style="width:{colWidthDate}px"
										class="px-3 py-2 text-sm text-muted-foreground"
									>
										{format(new Date(record.created_at), 'dd/MM/yyyy HH:mm:ss')}
									</td>
								</tr>
							{/each}
						{/if}
					</tbody>
				</table>
			</div>

			<!-- Pagination -->
			<div class="mt-4 flex items-center justify-between">
				<div class="flex items-center gap-4">
					<div class="flex items-center gap-2">
						<span class="text-sm text-muted-foreground">Lignes par page:</span>
						<select
							class="h-8 rounded border bg-background px-2 text-sm"
							bind:value={itemsPerPage}
							onchange={() => (currentPage = 1)}
						>
							<option value={10}>10</option>
							<option value={20}>20</option>
							<option value={50}>50</option>
							<option value={100}>100</option>
						</select>
					</div>
					<div class="text-sm text-muted-foreground">
						{totalPages > 0 ? `Page ${currentPage} sur ${totalPages}` : 'Aucune page'}
					</div>
				</div>
				{#if totalPages > 1}
					<div class="flex gap-2">
						<button
							class="rounded-md border px-3 py-1.5 text-sm hover:bg-accent disabled:opacity-50"
							onclick={() => (currentPage = Math.max(1, currentPage - 1))}
							disabled={currentPage === 1}
						>
							Précédent
						</button>
						<button
							class="rounded-md border px-3 py-1.5 text-sm hover:bg-accent disabled:opacity-50"
							onclick={() => (currentPage = Math.min(totalPages, currentPage + 1))}
							disabled={currentPage === totalPages}
						>
							Suivant
						</button>
					</div>
				{/if}
			</div>
		{/if}
	</CardContent>
</Card>
