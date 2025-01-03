<script lang="ts">
	import '../app.css';
	import Hls from 'hls.js';

	import { onMount, setContext } from 'svelte';
	import { radioStations } from '$lib/constants/stations';
	import { playingStationId } from '$lib/stores/station';
	import { settings } from '$lib/stores/settings';

	let { children } = $props();

	let audioElement: HTMLAudioElement | undefined;
	let audioContext: AudioContext | undefined;
	let track: MediaElementAudioSourceNode;

	onMount(() => {
		const interval = setInterval(() => checkAlarm(), 1000);
		return function stop(): void {
			clearInterval(interval);
		};
	});

	function checkAlarm() {
		const alarm = $settings.alarm;
		if (alarm.active) {
			const stations = $settings.stations;
			const now = new Date();
			const time = now.toTimeString().slice(0, 5);
			// console.log(`checkAlarm:${alarm.time} vs ${time}`);
			if (time === alarm.time && now.getSeconds() === 0) {
				// play audio
				playRadio(stations[alarm.station].stationuuid);
			}
		}
	}

	function playRadio(stationId: string) {
		const station = radioStations.find((e) => e.stationuuid === stationId);
		console.log(`station: ${station?.url}, audioElement:${audioElement}`);
		if (station && audioElement) {
			// create audio context if necessary
			if (!audioContext) {
				audioContext = new AudioContext();
				track = audioContext.createMediaElementSource(audioElement);
				track.connect(audioContext.destination);
			}
			// pause if playing
			if (!audioElement.paused) {
				audioElement.pause();
				// same station selected => return here
				// if (audioElement.src.split('?url=')[1] === station.url) {
				if ($playingStationId === station.stationuuid) {
					console.log(`pause: ${audioElement.src}`);
					playingStationId.set('');
					return;
				}
			}

			// check format
			if (station.url.endsWith('m3u8') || station.hls) {
				// HLS format
				if (Hls.isSupported()) {
					const hls = new Hls();
					hls.loadSource(station.url);
					hls.attachMedia(audioElement);
				} else if (audioElement.canPlayType('application/vnd.apple.mpegurl')) {
					// do not need to do nothing
				} else {
					console.error('m3u8 not supported: no MSE enabled');
					return;
				}
				audioElement.play();
				console.log(`playing: ${station.url}`);
			} else {
				// MP3 or PLS formats
				// use proxy
				// audioElement.src = station.url;
				audioElement.src = `/api/radio?url=${station.url}`;
				audioElement.play();
				console.log(`playing: ${station.url}`);
			}
			playingStationId.set(station.stationuuid);
		}
	}

	function pauseRadio() {
		if (audioElement) {
			if (!audioElement.paused) {
				audioElement.pause();
				playingStationId.set('');
			}
		}
	}

	// expose as global fuctions
	setContext('playRadio', playRadio);
	setContext('pauseRadio', pauseRadio);
</script>

<!-- audio element: global use -->
<audio crossorigin="anonymous" bind:this={audioElement}></audio>

<!-- button bar -->
<div class="flex flex-col sm:h-screen sm:flex-row">
	<div class="fixed top-0 z-50 opacity-85">
		<div
			class="flex w-screen flex-row items-center justify-around bg-base-300 py-5 sm:h-screen sm:w-fit sm:flex-col sm:justify-normal sm:gap-8 sm:px-4"
		>
			<a href="/radio">
				<!-- radio -->
				<svg class="h-7 w-7 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"
					><!--!Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path
						d="M494.8 47c12.7-3.7 20-17.1 16.3-29.8S494-2.8 481.2 1L51.7 126.9c-9.4 2.7-17.9 7.3-25.1 13.2C10.5 151.7 0 170.6 0 192l0 4L0 304 0 448c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-256c0-35.3-28.7-64-64-64l-229.5 0L494.8 47zM368 240a80 80 0 1 1 0 160 80 80 0 1 1 0-160zM80 256c0-8.8 7.2-16 16-16l96 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-96 0c-8.8 0-16-7.2-16-16zM64 320c0-8.8 7.2-16 16-16l128 0c8.8 0 16 7.2 16 16s-7.2 16-16 16L80 336c-8.8 0-16-7.2-16-16zm16 64c0-8.8 7.2-16 16-16l96 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-96 0c-8.8 0-16-7.2-16-16z"
					/></svg
				>
			</a>
			<a href="/news">
				<!-- newspapar -->
				<svg class="h-7 w-7 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"
					><!--!Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path
						d="M96 96c0-35.3 28.7-64 64-64l288 0c35.3 0 64 28.7 64 64l0 320c0 35.3-28.7 64-64 64L80 480c-44.2 0-80-35.8-80-80L0 128c0-17.7 14.3-32 32-32s32 14.3 32 32l0 272c0 8.8 7.2 16 16 16s16-7.2 16-16L96 96zm64 24l0 80c0 13.3 10.7 24 24 24l112 0c13.3 0 24-10.7 24-24l0-80c0-13.3-10.7-24-24-24L184 96c-13.3 0-24 10.7-24 24zm208-8c0 8.8 7.2 16 16 16l48 0c8.8 0 16-7.2 16-16s-7.2-16-16-16l-48 0c-8.8 0-16 7.2-16 16zm0 96c0 8.8 7.2 16 16 16l48 0c8.8 0 16-7.2 16-16s-7.2-16-16-16l-48 0c-8.8 0-16 7.2-16 16zM160 304c0 8.8 7.2 16 16 16l256 0c8.8 0 16-7.2 16-16s-7.2-16-16-16l-256 0c-8.8 0-16 7.2-16 16zm0 96c0 8.8 7.2 16 16 16l256 0c8.8 0 16-7.2 16-16s-7.2-16-16-16l-256 0c-8.8 0-16 7.2-16 16z"
					/></svg
				>
			</a>
			<a href="/clock">
				<svg class="h-7 w-7 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"
					><!--!Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path
						d="M464 256A208 208 0 1 1 48 256a208 208 0 1 1 416 0zM0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zM232 120l0 136c0 8 4 15.5 10.7 20l96 64c11 7.4 25.9 4.4 33.3-6.7s4.4-25.9-6.7-33.3L280 243.2 280 120c0-13.3-10.7-24-24-24s-24 10.7-24 24z"
					/></svg
				>
			</a>
			<a href="/weather">
				<svg class="h-7 w-7 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"
					><!--!Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path
						d="M294.2 1.2c5.1 2.1 8.7 6.7 9.6 12.1l10.4 62.4c-23.3 10.8-42.9 28.4-56 50.3c-14.6-9-31.8-14.1-50.2-14.1c-53 0-96 43-96 96c0 35.5 19.3 66.6 48 83.2c.8 31.8 13.2 60.7 33.1 82.7l-56 39.2c-4.5 3.2-10.3 3.8-15.4 1.6s-8.7-6.7-9.6-12.1L98.1 317.9 13.4 303.8c-5.4-.9-10-4.5-12.1-9.6s-1.5-10.9 1.6-15.4L52.5 208 2.9 137.2c-3.2-4.5-3.8-10.3-1.6-15.4s6.7-8.7 12.1-9.6L98.1 98.1l14.1-84.7c.9-5.4 4.5-10 9.6-12.1s10.9-1.5 15.4 1.6L208 52.5 278.8 2.9c4.5-3.2 10.3-3.8 15.4-1.6zM208 144c13.8 0 26.7 4.4 37.1 11.9c-1.2 4.1-2.2 8.3-3 12.6c-37.9 14.6-67.2 46.6-77.8 86.4C151.8 243.1 144 226.5 144 208c0-35.3 28.7-64 64-64zm69.4 276c11 7.4 14 22.3 6.7 33.3l-32 48c-7.4 11-22.3 14-33.3 6.7s-14-22.3-6.7-33.3l32-48c7.4-11 22.3-14 33.3-6.7zm96 0c11 7.4 14 22.3 6.7 33.3l-32 48c-7.4 11-22.3 14-33.3 6.7s-14-22.3-6.7-33.3l32-48c7.4-11 22.3-14 33.3-6.7zm96 0c11 7.4 14 22.3 6.7 33.3l-32 48c-7.4 11-22.3 14-33.3 6.7s-14-22.3-6.7-33.3l32-48c7.4-11 22.3-14 33.3-6.7zm96 0c11 7.4 14 22.3 6.7 33.3l-32 48c-7.4 11-22.3 14-33.3 6.7s-14-22.3-6.7-33.3l32-48c7.4-11 22.3-14 33.3-6.7zm74.5-116.1c0 44.2-35.8 80-80 80l-271.9 0c-53 0-96-43-96-96c0-47.6 34.6-87 80-94.6l0-1.3c0-53 43-96 96-96c34.9 0 65.4 18.6 82.2 46.4c13-9.1 28.8-14.4 45.8-14.4c44.2 0 80 35.8 80 80c0 5.9-.6 11.7-1.9 17.2c37.4 6.7 65.8 39.4 65.8 78.7z"
					/></svg
				>
			</a>
			<a href="/maps">
				<svg class="h-7 w-7 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"
					><!--!Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path
						d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z"
					/></svg
				>
			</a>
			<a href="/info">
				<svg class="h-7 w-7 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"
					><!--!Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path
						d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM216 336l24 0 0-64-24 0c-13.3 0-24-10.7-24-24s10.7-24 24-24l48 0c13.3 0 24 10.7 24 24l0 88 8 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l-80 0c-13.3 0-24-10.7-24-24s10.7-24 24-24zm40-208a32 32 0 1 1 0 64 32 32 0 1 1 0-64z"
					/></svg
				>
			</a>
		</div>
	</div>

	<div class="mt-[60px] w-screen sm:ml-[60px] sm:mt-0">
		{@render children()}
	</div>
</div>
