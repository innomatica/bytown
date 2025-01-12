<script lang="ts">
	import { radio } from '$lib/stores/radio';
	import type { RadioStation } from '../../ambient';

	// export let station: RadioStation;
	// $: if ($radio.currentStation === station.stationuuid) {
	// 	select = 'panel-selected';
	// } else {
	// 	select = '';
	// }
	type MyProp = {
		station: RadioStation;
	};
	let { station }: MyProp = $props();
	let select: string = $state('');

	$effect(() => {
		if ($radio.currentStation === station.stationuuid) {
			select = 'panel-selected';
		} else {
			select = '';
		}
	});
</script>

<!-- https://stackoverflow.com/questions/36247140/why-dont-flex-items-shrink-past-content-size -->
<button class="panel {select} flex h-20 w-full min-w-0 sm:h-28 sm:w-40 sm:flex-col">
	<div class="station-content flex sm:flex-col sm:self-center">
		<!-- station image -->
		<div class="station-image shrink-06 flex sm:self-center">
			<img
				src={station?.favicon}
				alt={station?.favicon}
				loading="lazy"
				class="rounded-lg"
				width="64"
				height="64"
			/>
		</div>
		<!-- station info -->
		<div class="station-info flex flex-grow flex-col">
			<!-- station name -->
			<div class="station-name self-start text-lg font-bold">
				<span class="sm:hidden">{station?.name}</span>
				<span class="hidden sm:block">{station?.short_name}</span>
			</div>
			<!-- station tag -->
			<div class="station-tag self-start text-sm sm:hidden">{station?.tags}</div>
		</div>
	</div>
</button>

<style>
	.panel {
		border-radius: 0.5rem;
		border-color: transparent;
		padding: 0.5rem 0.25rem;
		margin: 0.5rem;
		background-color: oklch(var(--b1));
		color: oklch(var(--bc));
		box-shadow: 1px 1px 4px 0px oklch(var(--bc));
	}
	.panel-selected {
		background-color: oklch(var(--n));
		color: oklch(var(--nc));
		box-shadow: 1px 2px 10px 4px oklch(var(--bc));
	}
	.station-content {
		align-self: center;
		min-width: 0px;
	}
	.station-image {
		border-radius: 0.5rem;
		width: 4rem;
		height: 4rem;
		margin: 0 0.2rem;
		background-color: rgb(200 200 200 / 1);
		/* background-color: oklch(var(--bc)); */
	}
	.station-info {
		margin: 0.25rem;
		padding: 0.25rem;
		min-width: 0px;
	}
	.station-tag {
		color: oklch(var(--su));
	}
	.station-name,
	.station-tag {
		white-space: nowrap;
		min-width: 0px;
		overflow: hidden;
		text-overflow: ellipsis;
	}
</style>
