<script lang="ts">
	import L, { type LatLngExpression } from 'leaflet';
	import 'leaflet/dist/leaflet.css';
	import { defaultLocation, defaultZoom } from '$lib/constants/defaults';
	import { gisOttawa } from '$lib/constants/gis';
	import { onMount } from 'svelte';

	let modalGis: HTMLDialogElement | undefined = $state();
	let map: L.Map | undefined;

	// $effect();

	onMount(() => {
		map = L.map('map').setView(defaultLocation as LatLngExpression, defaultZoom);
		L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
			maxZoom: 19,
			attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
		}).addTo(map);
	});

	function onCheckLayer(event: Event, layer: GisLayer) {
		console.log(layer);
		// console.log(event);
		if ((event.target as HTMLInputElement).checked) {
			// console.log('checked');
		} else {
			// console.log('unchecked');
		}
	}
</script>

<div class="absolute right-[10px] top-[74px] z-[999] flex flex-col gap-2 sm:top-[10px]">
	<button class="btn btn-sm opacity-70" onclick={() => modalGis?.showModal()}>maps</button>
	<button class="btn btn-sm opacity-70">transit</button>
</div>
<div id="map"></div>

<!-- City of Ottawa GIS -->
<dialog class="modal" bind:this={modalGis}>
	<div class="modal-box">
		<!-- <h3 class="text-lg font-bold">Hello!</h3>
		<p class="py-4">Press ESC key or click outside to close</p> -->
		{#each gisOttawa as layer}
			<label class="label cursor-pointer">
				<span class="label-text">
					{layer.name}
				</span>
				<input type="checkbox" class="checkbox" onchange={(e) => onCheckLayer(e, layer)} />
			</label>
		{/each}
	</div>
	<form method="dialog" class="modal-backdrop">
		<button>close</button>
	</form>
</dialog>

<style>
	#map {
		height: calc(100vh - 68px);
	}
	@media (min-width: 640px) {
		#map {
			height: 100vh;
		}
	}
</style>
