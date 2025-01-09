<script lang="ts">
	import 'leaflet/dist/leaflet.css';
	import L, { type LatLngExpression } from 'leaflet';

	import { defaultLocation, radarZoom } from '$lib/constants/defaults';
	import { onMount } from 'svelte';

	let map: L.Map | undefined;
	let wmsLayer: L.TileLayer.WMS | undefined;

	const parser = new DOMParser();
	const radarTimes: Date[] = $state([]);

	onMount(async () => {
		// create a map
		map = L.map('radar').setView(defaultLocation as LatLngExpression, radarZoom);

		// base tile layer
		L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
			attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
		}).addTo(map);

		// radar wms layer
		// https://eccc-msc.github.io/open-data/usage/tutorial_web-maps_en/
		wmsLayer = L.tileLayer
			.wms('https://geo.weather.gc.ca/geomet?', {
				layers: 'RADAR_1KM_RRAI',
				version: '1.3.0',
				opacity: 0.5
			})
			.addTo(map);

		// get radar time set
		const [start, end, def] = await getRadarStartEndTime();
		radarTimes.length = 0;
		for (let time = start; time < end; time.setMinutes(time.getMinutes() + 30)) {
			radarTimes.push(new Date(time));
		}
		// console.log('radarTimes:', radarTimes);
	});

	// Async function used to retrieve start and end time from
	// RADAR_1KM_RRAI layer GetCapabilities document
	// https://eccc-msc.github.io/open-data/usage/tutorial_web-maps_en/
	async function getRadarStartEndTime() {
		const res = await fetch(
			'https://geo.weather.gc.ca/geomet/?lang=en&service=WMS&request=GetCapabilities&version=1.3.0&LAYERS=RADAR_1KM_RRAI&t=' +
				new Date().getTime()
		);
		const data = await res.text();
		const xml = parser.parseFromString(data, 'text/xml');
		const [start, end] = xml.getElementsByTagName('Dimension')[0].innerHTML.split('/');
		const def = xml.getElementsByTagName('Dimension')[0].getAttribute('default');
		return [new Date(start), new Date(end), def ? new Date(def) : new Date()];
	}

	function onClickTime(time: Date) {
		// console.log(time);
		if (wmsLayer) {
			// false error: type definition of L.WMSParam is not correct
			// server does not understand millisec part
			wmsLayer.setParams({ TIME: time.toISOString().split('.')[0] + 'Z' });
		}
	}
</script>

<div>
	<div id="radar"></div>
	<!-- radar time buttons -->
	<div
		class="join join-vertical absolute right-2 top-2 z-[999] sm:join-horizontal sm:bottom-2 sm:left-2 sm:right-auto sm:top-auto"
	>
		{#each radarTimes as time, index}
			<input
				class="btn join-item btn-sm"
				type="radio"
				name="options"
				aria-label={time.toLocaleTimeString().slice(0, 5)}
				onclick={() => onClickTime(time)}
				checked={radarTimes.length === index + 1}
			/>
		{/each}
	</div>
</div>

<style>
	#radar {
		height: 80vh;
	}
</style>
