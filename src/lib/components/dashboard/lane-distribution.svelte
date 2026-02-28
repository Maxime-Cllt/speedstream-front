<script lang="ts">
	import type { SpeedData } from '../../types/speed-data';
	import { Lane } from '../../types/speed-data';
	import Card from '../ui/card.svelte';
	import CardHeader from '../ui/card-header.svelte';
	import CardTitle from '../ui/card-title.svelte';
	import CardContent from '../ui/card-content.svelte';
	import CardDescription from '../ui/card-description.svelte';
	
	import EChart from '../ui/echart.svelte';

	interface Props {
		data: SpeedData[];
	}

	let { data }: Props = $props();

	let processedData = $derived.by(() => {
		const leftCount = data.filter((d) => d.lane === Lane.Left).length;
		const rightCount = data.filter((d) => d.lane === Lane.Right).length;
		return { leftCount, rightCount };
	});

	let option = $derived({
		tooltip: {
			trigger: 'item',
			formatter: '{b}: {c} ({d}%)',
			backgroundColor: 'rgba(0, 0, 0, 0.8)',
			borderColor: '#333',
			textStyle: { color: '#fff' }
		},
		legend: {
			orient: 'vertical',
			left: 'left',
			textStyle: { color: '#666' }
		},
		series: [
			{
				name: 'Voies',
				type: 'pie',
				radius: ['40%', '70%'],
				avoidLabelOverlap: false,
				itemStyle: {
					borderRadius: 10,
					borderColor: '#fff',
					borderWidth: 2
				},
				label: {
					show: true,
					formatter: '{b}\n{d}%',
					color: '#333'
				},
				emphasis: {
					label: { show: true, fontSize: 16, fontWeight: 'bold' }
				},
				data: [
					{ value: processedData.leftCount, name: 'Voie gauche', itemStyle: { color: '#3b82f6' } },
					{ value: processedData.rightCount, name: 'Voie droite', itemStyle: { color: '#f97316' } }
				]
			}
		]
	});
</script>

<Card>
	<CardHeader>
		<CardTitle>Répartition par voie</CardTitle>
		<CardDescription>Distribution des passages par voie</CardDescription>
	</CardHeader>
	<CardContent>
		{#if data.length === 0}
			<div class="text-muted-foreground flex h-75 items-center justify-center">
				Aucune donnée disponible
			</div>
		{:else}
			<EChart {option} style="height: 300px" />
		{/if}
	</CardContent>
</Card>
