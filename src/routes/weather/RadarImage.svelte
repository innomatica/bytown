<script lang="ts">
	import 'leaflet/dist/leaflet.css';
	import L, { type LatLngExpression } from 'leaflet';

	import { defaultLocation } from '$lib/constants/defaults';
	import { onMount } from 'svelte';
	export const ssr = false;
	let map: L.Map | undefined;

	onMount(() => {
		map = L.map('radar').setView(defaultLocation as LatLngExpression, 12);
		L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
			maxZoom: 19,
			attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
		}).addTo(map);
	});
</script>

<div id="radar"></div>

<style>
	#radar {
		height: 80vh;
	}
</style>
