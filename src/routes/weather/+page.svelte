<script lang="ts">
	import { onMount } from 'svelte';
	import { wmo } from './weather';
	import type { WeatherData } from '../../ambient';

	import WindIcon from '$lib/icons/WindIcon.svelte';
	import WaterIcon from '$lib/icons/WaterIcon.svelte';
	import GuageIcon from '$lib/icons/GuageIcon.svelte';
	import SunIcon from '$lib/icons/SunIcon.svelte';
	import RadarIcon from '$lib/icons/RadarIcon.svelte';
	import RadarImage from './RadarImage.svelte';

	type MyProp = {
		weather: string;
	};
	let { data }: { data: MyProp } = $props();

	const now = new Date();
	const oneday = 24 * 60 * 60 * 1000;
	// const oneweek = 7 * 24 * 60 * 60 * 1000;
	const tendays = 10 * 24 * 60 * 60 * 1000;

	let dlgRadar: HTMLDialogElement | undefined = $state();
	let weather: WeatherData | undefined = $state();
	/* eslint svelte/no-unused-svelte-ignore: "off" */
	// svelte-ignore non_reactive_update
	let hourlySlider: HTMLElement | undefined = $state();
	// svelte-ignore non_reactive_update
	let dailySlider: HTMLElement | undefined = $state();

	let isDown = false;
	let startX: number;
	let scrollLeft: number;

	onMount(() => {
		const dateFormat = /^(\d{4})-(\d{2})-(\d{2})T(\d{2}):(\d{2}):(\d{2}(?:\.\d*)?)Z$/;
		const dateTimeReviver = (key: string, value: string) => {
			if (typeof value === 'string' && dateFormat.test(value)) {
				return new Date(value);
			}
			return value;
		};
		weather = JSON.parse(data.weather, dateTimeReviver);
		console.log(weather);
	});

	$effect(() => {
		if (hourlySlider) {
			enableSlider(hourlySlider);
		}
		if (dailySlider) {
			enableSlider(dailySlider);
		}
	});

	function enableSlider(slider: HTMLElement) {
		// console.log('enableSlider:', slider);
		// https://stackoverflow.com/questions/4817029/whats-the-best-way-to-detect-a-touch-screen-device-using-javascript
		if ('ontouchstart' in window || navigator.maxTouchPoints > 0) {
			console.log('touch device detected');
			return;
		}
		// https://stackoverflow.com/questions/28576636/mouse-click-and-drag-instead-of-horizontal-scroll-bar-to-view-full-content-of-c
		// console.log('slider actions activated for non-touch device');
		slider.addEventListener('mousedown', (e) => {
			// console.log(e);
			isDown = true;
			slider.classList.add('active');
			startX = e.pageX - slider.offsetLeft;
			scrollLeft = slider.scrollLeft;
		});
		slider.addEventListener('mouseleave', () => {
			isDown = false;
			slider.classList.remove('active');
		});
		slider.addEventListener('mouseup', () => {
			isDown = false;
			slider.classList.remove('active');
		});
		slider.addEventListener('mousemove', (e) => {
			// console.log(e);
			if (!isDown) return;
			e.preventDefault();
			const x = e.pageX - slider.offsetLeft;
			const walk = (x - startX) * 1; //scroll speed
			slider.scrollLeft = scrollLeft - walk;
			// console.log(walk);
		});
	}
</script>

{#if weather}
	<div class="my-6 flex flex-col items-center gap-6">
		<!-- current condition -->
		<div class="items.center flex flex-col items-center">
			<!-- weather description -->
			<div class="text-xl font-semibold">
				{wmo(weather.current.weatherCode, weather.current.isDay).text}
			</div>
			<!-- temperature / icon / today max min -->
			<div class="flex items-center gap-2">
				<!-- current temperature -->
				<div class="text-[5rem] font-extrabold">
					{Math.round(weather.current.temperature2m)}
				</div>
				<!-- weather icon -->
				<img
					class="h-[100px] w-[128px]"
					src={wmo(weather.current.weatherCode, weather.current.isDay).icon}
					alt="weather"
				/>
				<!-- today max / min -->
				<div class="flex flex-col items-center gap-2 text-sm">
					<div>
						High {Math.round(weather.daily.temperature2mMax[0])}
					</div>
					<div>
						Low {Math.round(weather.daily.temperature2mMin[0])}
					</div>
				</div>
			</div>
			<!-- temperature feels like -->
			<div class="text-lg text-secondary">
				Feels like {Math.round(weather.current.apparentTemperature)}
			</div>
		</div>
		<!-- hourly forecast -->
		<div class="flex flex-col items-center rounded-box bg-neutral p-4">
			<!-- <div class="mb-4 font-semibold">Hourly</div> -->
			<div
				class="carousel carousel-center max-w-xs space-x-4 sm:max-w-sm md:max-w-md lg:max-w-lg"
				bind:this={hourlySlider}
			>
				{#each weather.hourly.time as time, index}
					<!-- show only next 24 hours -->
					{#if time >= now && time.getTime() < now.getTime() + oneday}
						<div class="carousel-item flex cursor-pointer flex-col items-center">
							<!-- hour -->
							<div class="my-4 font-semibold">
								{time.toLocaleTimeString('en-CA', {
									hour: 'numeric',
									timeZone: 'America/Toronto'
								})}
							</div>
							<!-- temperature -->
							<div>
								{Math.round(weather.hourly.temperature2m[index])}
							</div>
							<!-- icon -->
							<img
								class="my-2 h-10 w-10"
								src={wmo(weather.hourly.weatherCode[index], weather.hourly.isDay[index]).icon}
								alt="weather"
							/>
							<!-- preciptation probability -->
							<div class="text-primary">
								{Math.round(weather.hourly.precipitationProbability[index])} %
							</div>
							<!-- preciptation sum -->
							{#if weather.hourly.snowfall[index]}
								<div class="text-error">
									<!-- snowfall sum -->
									{Math.round(weather.hourly.snowfall[index])} cm
								</div>
							{:else if weather.hourly.rain[index]}
								<div class="text-warn">
									<!-- rain sum -->
									{Math.round(weather.hourly.rain[index])} mm
								</div>
							{/if}
						</div>
					{/if}
				{/each}
			</div>
		</div>
		<!-- daily forecast -->
		<div class="flex flex-col items-center rounded-box bg-neutral p-4">
			<!-- <div class="mb-4 font-semibold">Daily</div> -->
			<div
				class="carousel carousel-center max-w-xs cursor-pointer space-x-4 sm:max-w-sm md:max-w-md lg:max-w-lg"
				bind:this={dailySlider}
			>
				{#each weather.daily.time as time, index}
					<!-- show next 10 days -->
					{#if time.getDate() >= now.getDate() && time.getDate() < now.getDate() + 10}
						<div class="carousel-item flex flex-col items-center">
							<!-- day -->
							<div class="my-4 font-semibold">
								{time
									.toLocaleTimeString('en-CA', {
										weekday: 'short',
										timeZone: 'America/Toronto'
									})
									.split(' ')[0]}
							</div>
							<!-- max temperature -->
							<div>
								{Math.round(weather.daily.temperature2mMax[index])}
							</div>
							<!-- min temperature -->
							<div class="font-light">
								{Math.round(weather.daily.temperature2mMin[index])}
							</div>
							<!-- icon -->
							<img
								class="my-4 h-10 w-10"
								src={wmo(weather.daily.weatherCode[index]).icon}
								alt="weather"
							/>
							<!-- precipitation probability -->
							<div class="text-primary">
								{Math.round(weather.daily.precipitationProbabilityMax[index])} %
							</div>
							<!-- precipitation -->
							{#if weather.daily.snowfallSum[index]}
								<div class="text-error">
									<!-- snowfall sum -->
									{Math.round(weather.daily.snowfallSum[index])} cm
								</div>
							{:else if weather.daily.rainSum[index]}
								<div class="text-warn">
									<!-- rain sum -->
									{Math.round(weather.daily.rainSum[index])} mm
								</div>
							{/if}
						</div>
					{/if}
				{/each}
			</div>
		</div>
		<!-- others -->
		<div class="flex flex-col items-start gap-3">
			<!-- current:wind -->
			<div class="flex items-center gap-4">
				<!-- <img class="h-8 w-6 text-info" src="/icons/wind.svg" alt="wind" /> -->
				<WindIcon width="1.25rem" height="1.25rem" />
				<div class="font-light">Wind</div>
				<div>{Math.round(weather.current.windSpeed10m)} km/h</div>
				<div class="font-light">Gusts</div>
				<div>{Math.round(weather.current.windGusts10m)} km/h</div>
			</div>
			<!-- current:relative humidity -->
			<div class="flex items-center gap-4">
				<WaterIcon width="1.25rem" height="1.25rem" />
				<div class="font-light">Relative humidity</div>
				<div>{weather.current.relativeHumidity2m} %</div>
			</div>
			<!-- current: surface pressure -->
			<div class="flex items-center gap-4">
				<GuageIcon width="1.25rem" height="1.25rem" />
				<div class="font-light">Surface pressure</div>
				<div>{Math.round(weather.current.surfacePressure)} hPa</div>
			</div>
			<!-- daily: uvIndexMax -->
			<div class="flex items-center gap-4">
				<SunIcon width="1.25rem" height="1.25rem" />
				<div class="font-light">UV index</div>
				<div>
					{Math.round(
						weather.daily.uvIndexMax[
							weather.daily.time.findIndex((e) => e.getDate() === now.getDate())
						]
					)}
				</div>
			</div>
		</div>
		<div class="mb-4 flex items-center text-sm font-light">
			<div>Coutersy of</div>
			<a href="https://open-meteo.com/" target="_blank" class="mx-1 text-info">Open-Meteo</a>
			<div>and</div>
			<a href="https://weather.gc.ca/" target="_blank" class="mx-1 text-info">Environment Canada</a>
		</div>
	</div>

	<!-- radar image button -->
	<div class="absolute right-[20px] top-[80px] z-[10] sm:top-[20px]">
		<button class="btn btn-circle btn-primary opacity-50" onclick={() => dlgRadar?.showModal()}>
			<RadarIcon width="1.75rem" height="1.75rem" />
		</button>
	</div>
{/if}

<dialog class="modal" bind:this={dlgRadar}>
	<div class="modal-box max-w-none p-0">
		<!-- <h3 class="text-lg font-bold">Hello!</h3>
		<p class="py-4">Press ESC key or click outside to close</p> -->
		<RadarImage />
	</div>
	<form method="dialog" class="modal-backdrop">
		<button>close</button>
	</form>
</dialog>
