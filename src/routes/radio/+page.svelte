<script lang="ts">
	import { radioStations } from '$lib/constants/stations';
	import { getContext, onMount } from 'svelte';
	import { playingStationId } from '$lib/stores/station';

	let playRadio: (staitonId: string) => void;
	let stations: RadioStation[] = $state([]);

	onMount(() => {
		playRadio = getContext('playRadio');
		stations = radioStations.sort((a, b) => a.short_name.localeCompare(b.short_name));
	});

	function play(stationId: string) {
		// console.log(`play:${stationId}`);
		if (playRadio) {
			playRadio(stationId);
		}
	}
</script>

<div
	class="flex flex-col gap-3 px-4 py-2 sm:flex-row sm:flex-wrap sm:justify-center sm:gap-6 sm:px-0 sm:py-6"
>
	{#each stations as station}
		<button
			class={station.stationuuid === $playingStationId
				? 'shadow-xl shadow-accent'
				: 'shadow-sm shadow-accent/20'}
			onclick={() => play(station.stationuuid)}
		>
			<!-- icon -->
			<div class=" p-2">
				<img
					class="object-fit h-[4rem] w-[4rem] rounded-[0.5rem] bg-white/80 sm:h-[7rem] sm:w-[8rem]"
					src={station.favicon}
					alt={station.name}
					loading="lazy"
				/>
			</div>
			<!-- station title -->
			<div class="flex flex-col justify-around text-start sm:hidden">
				<div class="text-large line-clamp-1 font-semibold">
					{station.name}
				</div>
				<div class="line-clamp-1 font-light text-primary">
					{station.tags}
				</div>
			</div>
			<div class="line-clamp-1 hidden w-[9rem] p-2 font-medium sm:block">
				{station.short_name}
			</div>
		</button>
	{/each}
</div>

<style>
	button {
		display: flex;
		flex-direction: row;
		align-items: center;
		border-radius: 1rem;
		background-color: oklch(var(--b3));
	}
	@media (min-width: 640px) {
		button {
			display: flex;
			flex-direction: column;
			align-items: center;
			border-radius: 1rem;
			width: 9rem;
		}
	}
</style>
