<script lang="ts">
	import 'leaflet/dist/leaflet.css';
	import L, { type LatLngExpression } from 'leaflet';
	import { featureLayer } from 'esri-leaflet';

	import { defaultLocation, defaultZoom } from '$lib/constants/defaults';

	import { buildPopUp } from './helpers';
	import { gisItemsOttawa } from '$lib/constants/gisitems';
	import { onDestroy, onMount } from 'svelte';

	let modalLayerSel: HTMLDialogElement | undefined = $state();
	let gisItems: GisItem[] | undefined = $state();
	let map: L.Map | undefined;

	onMount(() => {
		map = L.map('map').setView(defaultLocation as LatLngExpression, defaultZoom);
		L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
			maxZoom: 19,
			attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
		}).addTo(map);
		// sort layers
		gisItems = gisItemsOttawa.sort((a, b) => a.name_en.localeCompare(b.name_en));
		// replace default marker -> NOT WORKING
		// L.Icon.Default.prototype.options = {
		// 	iconUrl: '/leaflet/marker-icon.png',
		// 	iconRetinaUrl: '/leaflet/marker-icon-2x.png',
		// 	shadowUrl: '/leaflet/marker.shadow.png'
		// };
	});

	onDestroy(() => map?.remove());

	function onCheckLayer(event: Event, item: GisItem) {
		// console.log(event);
		if ((event.target as HTMLInputElement).checked) {
			// console.log('checked');
			item.layer = featureLayer({ url: item.url });
			item.layer.bindPopup((layer: any) => {
				return buildPopUp(item, layer);
			});
			item.layer.addTo(map);
		} else {
			// console.log('unchecked');
			if (item.layer) {
				map?.removeLayer(item.layer);
				delete item.layer;
			}
		}
	}

	// function onClickTransit(e: Event) {
	// 	if ((e.target as HTMLInputElement).checked) {
	// 		// console.log('transit layer activated');
	// 	} else {
	// 		// console.log('transit layer deactivated');
	// 	}
	// }
</script>

<!-- buttons on the top right -->
<div class="absolute right-[10px] top-[74px] z-[999] flex flex-col gap-2 sm:top-[10px]">
	<!-- gis button -->
	<button class="btn btn-sm opacity-75" onclick={() => modalLayerSel?.showModal()}>GIS</button>
	<!-- transit radio -->
	<!-- <input
		type="checkbox"
		aria-label="Transit"
		class="btn btn-sm opacity-75"
		onchange={onClickTransit}
	/> -->
	<a href="https://transit.innomatic.ca" class="btn btn-sm opacity-75" target="_blank">Transit</a>
</div>

<!-- map -->
<div id="map"></div>

<!-- GIS layer select dialog -->
<dialog class="modal" bind:this={modalLayerSel}>
	<div class="modal-box">
		<!-- <h3 class="text-lg font-bold">Hello!</h3>
		<p class="py-4">Press ESC key or click outside to close</p> -->
		{#if gisItems}
			{#each gisItems as item}
				<label class="label cursor-pointer">
					<span class="label-text">
						{item.name_en}
					</span>
					<input
						type="checkbox"
						class="checkbox"
						checked={item.layer}
						onchange={(e) => onCheckLayer(e, item)}
					/>
				</label>
			{/each}
		{/if}
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
