<script lang="ts">
	import { onMount, onDestroy } from 'svelte';
	import * as echarts from 'echarts';

	interface Props {
		option: object;
		style?: string;
		class?: string;
	}

	let { option, style = 'height: 300px', class: className = '' }: Props = $props();

	let container: HTMLDivElement;
	let chart: echarts.ECharts | null = null;

	onMount(() => {
		chart = echarts.init(container);
		chart.setOption(option);

		const resizeObserver = new ResizeObserver(() => chart?.resize());
		resizeObserver.observe(container);

		return () => {
			resizeObserver.disconnect();
		};
	});

	onDestroy(() => {
		chart?.dispose();
		chart = null;
	});

	$effect(() => {
		if (chart) {
			chart.setOption(option, { notMerge: true });
		}
	});
</script>

<div bind:this={container} {style} class={className}></div>
