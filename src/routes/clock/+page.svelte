<script lang="ts">
	import { onMount, getContext } from 'svelte';
	import { settings, snooze } from '$lib/stores/settings';
	import { defaultTimezones } from '$lib/constants/defaults';
	import { radioStations } from '$lib/constants/stations';
	import { playingStationId } from '$lib/stores/station';

	type ClockTime = {
		today: string;
		home: string;
		ampm: string;
		hrmn: string;
		sec: string;
	};

	let alarmSettingDialog: HTMLDialogElement;
	let tzoneSettingDialog: HTMLDialogElement;
	let radioSettingDialog: HTMLDialogElement;

	let playRadio: (stationId: string) => void;
	let pauseRadio: () => void;

	let time: ClockTime | undefined = $state();
	let amColor: string | undefined = $state();
	let pmColor: string | undefined = $state();

	let homeTZ = $state($settings.homeTZ);
	let alarm = $state($settings.alarm);
	let stations = $settings.stations.slice();

	// start 1 sec tick when mount
	onMount(() => {
		// get playRadio function from context
		playRadio = getContext('playRadio');
		// get PauseRadio function from context
		pauseRadio = getContext('pauseRadio');
		// set initial value
		getClockTime();
		// start tick
		const interval = setInterval(() => getClockTime(), 1000);
		// stop tick when out of scope
		return function stop(): void {
			clearInterval(interval);
		};
	});

	function getClockTime(): void {
		let now = new Date();
		let set = $settings;

		let timeStr = Intl.DateTimeFormat('en-US', {
			timeStyle: 'medium',
			hour12: true,
			timeZone: set.localTZ
		}).format(now);
		let timeHr;
		let timeMn;
		let timeSec;
		let timeAmPm = timeStr.split(' ')[1];
		[timeHr, timeMn, timeSec] = timeStr.split(' ')[0].split(':');
		// hour digit may need leading zero
		if (timeHr.length === 1) {
			timeHr = '0' + timeHr;
		}

		// set time object
		time = {
			// 1. current date
			today: Intl.DateTimeFormat(set.locale, {
				// dateStyle: 'short',
				weekday: 'short',
				// month: "short",
				day: 'numeric',
				timeZone: set.localTZ
			}).format(now),
			// 2. main clock
			ampm: timeAmPm,
			hrmn: `${timeHr}:${timeMn}`,
			sec: timeSec,
			// 3. home time zone
			home: Intl.DateTimeFormat(set.locale, {
				// dateStyle: 'short',
				// timeStyle: 'short',
				weekday: 'short',
				day: '2-digit',
				hour12: false,
				hour: 'numeric',
				minute: 'numeric',
				timeZone: set.homeTZ
			}).format(now)
		};

		// set AM/PM color
		// https://tailwindcss.com/docs/upgrade-guide#new-opacity-modifier-syntax
		amColor = time.ampm === 'AM' ? 'text-orange-500' : 'text-orange-500/15';
		pmColor = time.ampm === 'PM' ? 'text-orange-500' : 'text-orange-500/15';
	}

	async function updateSettings(value: Record<string, any>) {
		console.log('updateSettings:', $settings, value);
		settings.save({ ...$settings, ...value });
	}

	function switchStation(index: number, event: Event) {
		const value = (event.target as HTMLSelectElement).value;
		// console.log('switchStation:', index, value);
		if (value) {
			const targetStation = radioStations.find((e) => e.stationuuid == value);
			if (targetStation) {
				// console.log('targetStation:', targetStation);
				stations[index] = targetStation;
			}
		}
	}

	function handleSnooze(event: Event) {
		event.stopPropagation();
		snooze.next(pauseRadio);
	}

	function onStationSel(event: Event, stationId: string) {
		event.stopPropagation();
		if (playRadio) {
			// console.log(`play:${stationId}`);
			playRadio(stationId);
		}
	}
</script>

<!-- <p>{formatter.format($time)}</p> -->
<div class="flex h-screen w-full flex-col p-2 sm:justify-center">
	{#if time}
		<div class="clock">
			<!-- alarm, snooze, date -->
			<div class="flex items-center justify-between">
				<div class="flex gap-6 text-pink-500">
					<!-- preset button -->
					<button onclick={(e) => (e.stopPropagation(), radioSettingDialog?.showModal())}>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 576 512"
							class="w-7 fill-current sm:w-8 md:w-9"
							><!--!Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.--><path
								d="M62.6 2.3C46.2-4.3 27.6 3.6 20.9 20C7.4 53.4 0 89.9 0 128s7.4 74.6 20.9 108c6.6 16.4 25.3 24.3 41.7 17.7S86.9 228.4 80.3 212C69.8 186.1 64 157.8 64 128s5.8-58.1 16.3-84C86.9 27.6 79 9 62.6 2.3zm450.8 0C497 9 489.1 27.6 495.7 44C506.2 69.9 512 98.2 512 128s-5.8 58.1-16.3 84c-6.6 16.4 1.3 35 17.7 41.7s35-1.3 41.7-17.7c13.5-33.4 20.9-69.9 20.9-108s-7.4-74.6-20.9-108C548.4 3.6 529.8-4.3 513.4 2.3zM340.1 165.2c7.5-10.5 11.9-23.3 11.9-37.2c0-35.3-28.7-64-64-64s-64 28.7-64 64c0 13.9 4.4 26.7 11.9 37.2L98.9 466.8c-7.3 16.1-.2 35.1 15.9 42.4s35.1 .2 42.4-15.9L177.7 448l220.6 0 20.6 45.2c7.3 16.1 26.3 23.2 42.4 15.9s23.2-26.3 15.9-42.4L340.1 165.2zM369.2 384l-162.4 0 14.5-32 133.3 0 14.5 32zM288 205.3L325.6 288l-75.2 0L288 205.3zM163.3 73.6c5.3-12.1-.2-26.3-12.4-31.6s-26.3 .2-31.6 12.4C109.5 77 104 101.9 104 128s5.5 51 15.3 73.6c5.3 12.1 19.5 17.7 31.6 12.4s17.7-19.5 12.4-31.6C156 165.8 152 147.4 152 128s4-37.8 11.3-54.4zM456.7 54.4c-5.3-12.1-19.5-17.7-31.6-12.4s-17.7 19.5-12.4 31.6C420 90.2 424 108.6 424 128s-4 37.8-11.3 54.4c-5.3 12.1 .2 26.3 12.4 31.6s26.3-.2 31.6-12.4C466.5 179 472 154.1 472 128s-5.5-51-15.3-73.6z"
							/></svg
						>
					</button>
					<!-- alarm button -->
					<button
						class="flex"
						onclick={(e) => {
							e.stopPropagation();
							alarmSettingDialog?.showModal();
						}}
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 448 512"
							class="w-5 fill-current sm:w-6 md:w-7"
							><!--! Font Awesome Pro 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path
								d="M224 0c-17.7 0-32 14.3-32 32V49.9C119.5 61.4 64 124.2 64 200v33.4c0 45.4-15.5 89.5-43.8 124.9L5.3 377c-5.8 7.2-6.9 17.1-2.9 25.4S14.8 416 24 416H424c9.2 0 17.6-5.3 21.6-13.6s2.9-18.2-2.9-25.4l-14.9-18.6C399.5 322.9 384 278.8 384 233.4V200c0-75.8-55.5-138.6-128-150.1V32c0-17.7-14.3-32-32-32zm0 96h8c57.4 0 104 46.6 104 104v33.4c0 47.9 13.9 94.6 39.7 134.6H72.3C98.1 328 112 281.3 112 233.4V200c0-57.4 46.6-104 104-104h8zm64 352H224 160c0 17 6.7 33.3 18.7 45.3s28.3 18.7 45.3 18.7s33.3-6.7 45.3-18.7s18.7-28.3 18.7-45.3z"
							/></svg
						>
						{#if $settings.alarm.active}
							<div class="text-md ml-2 sm:text-xl md:text-2xl">{$settings.alarm.time}</div>
						{/if}
					</button>
					<!-- snooze button -->
					<button class="flex" onclick={handleSnooze}>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 384 512"
							class="w-5 fill-current sm:w-5 md:w-6"
							><!--! Font Awesome Pro 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path
								d="M144.7 98.7c-21 34.1-33.1 74.3-33.1 117.3c0 98 62.8 181.4 150.4 211.7c-12.4 2.8-25.3 4.3-38.6 4.3C126.6 432 48 353.3 48 256c0-68.9 39.4-128.4 96.8-157.3zm62.1-66C91.1 41.2 0 137.9 0 256C0 379.7 100 480 223.5 480c47.8 0 92-15 128.4-40.6c1.9-1.3 3.7-2.7 5.5-4c4.8-3.6 9.4-7.4 13.9-11.4c2.7-2.4 5.3-4.8 7.9-7.3c5-4.9 6.3-12.5 3.1-18.7s-10.1-9.7-17-8.5c-3.7 .6-7.4 1.2-11.1 1.6c-5 .5-10.1 .9-15.3 1c-1.2 0-2.5 0-3.7 0c-.1 0-.2 0-.3 0c-96.8-.2-175.2-78.9-175.2-176c0-54.8 24.9-103.7 64.1-136c1-.9 2.1-1.7 3.2-2.6c4-3.2 8.2-6.2 12.5-9c3.1-2 6.3-4 9.6-5.8c6.1-3.5 9.2-10.5 7.7-17.3s-7.3-11.9-14.3-12.5c-3.6-.3-7.1-.5-10.7-.6c-2.7-.1-5.5-.1-8.2-.1c-3.3 0-6.5 .1-9.8 .2c-2.3 .1-4.6 .2-6.9 .4z"
							/></svg
						>
						<!-- time left -->
						{#if $snooze.remaining}
							<div class="text-md ml-2 sm:text-xl md:text-2xl">
								{Math.floor(($snooze.remaining + 59) / 60)}
							</div>
						{/if}
					</button>
				</div>
				<!-- today -->
				<div class="text-xl text-orange-500 sm:text-2xl md:text-4xl">{time.today}</div>
			</div>

			<!-- main clock -->
			<div class="mainclock">
				<!-- AM / PM -->
				<div class="ampm text-2xl sm:text-3xl md:text-5xl">
					<div class={amColor}>AM</div>
					<div class={pmColor}>PM</div>
				</div>
				<!-- hour: min -->
				<div class="hrmn text-7xl sm:text-8xl md:text-9xl">
					<div>{time.hrmn}</div>
				</div>
				<!-- sec -->
				<div class="sec text-3xl sm:text-5xl md:text-7xl">
					<div>{time.sec}</div>
				</div>
			</div>

			<!-- home time -->
			<button
				class="bottomline text-md flex w-full justify-between sm:text-xl md:text-2xl"
				onclick={(e) => tzoneSettingDialog?.showModal()}
			>
				<div>
					{$settings.homeTZ.split('/')[1]}
				</div>
				<div>
					{time.home}
				</div>
			</button>

			<!-- radio station buttons -->
			<div class="mt-4 flex justify-between pt-4">
				{#each $settings.stations as station, index}
					<button
						class={$playingStationId === station.stationuuid
							? 'btn btn-primary btn-sm px-4 sm:px-6 md:px-10'
							: 'btn btn-outline btn-sm px-4 sm:px-6 md:px-10'}
						onclick={(e) => onStationSel(e, station.stationuuid)}
					>
						{index + 1}
					</button>
				{/each}
			</div>
		</div>
	{/if}
</div>

<!-- alarm setting dialog -->
<dialog bind:this={alarmSettingDialog} class="modal">
	<div class="modal-box w-fit">
		<div class="mb-4 flex items-center justify-between">
			<h3 class="text-lg font-bold">Alarm</h3>
			<!-- alarm.active -->
			<input bind:checked={alarm.active} type="checkbox" class="toggle toggle-primary" />
		</div>
		<div class="flex flex-col gap-2">
			<!-- alarm.time -->
			<div class="flex items-center justify-between">
				<div class="w-[10rem]">Alarm Time</div>
				<input bind:value={alarm.time} type="time" class="px-3" />
			</div>
			<!-- station no -->
			<div class="flex items-center justify-between">
				<div>Preset Channel</div>
				<select bind:value={alarm.station} class="select select-sm">
					{#each stations as station, index}
						<option value={index}>{index + 1}</option>
					{/each}
				</select>
			</div>
		</div>
	</div>
	<form method="dialog" class="modal-backdrop">
		<button
			onclick={() =>
				// you need to use object literals here
				updateSettings({
					alarm: {
						time: alarm.time,
						active: alarm.active,
						station: alarm.station
					}
				})}>close</button
		>
	</form>
</dialog>

<!-- home timezone setting dialog -->
<dialog bind:this={tzoneSettingDialog} class="modal">
	<div class="modal-box w-fit">
		<h3 class="mb-4 text-lg font-bold">Home Timezone</h3>
		<select class="select w-full" bind:value={homeTZ}>
			<!-- <option disabled selected>Select your home timezone</option> -->
			{#each defaultTimezones as option}
				{#if homeTZ === option.value}
					<option value={option.value} selected>{option.title}</option>
				{:else}
					<option value={option.value}>{option.title}</option>
				{/if}
			{/each}
		</select>
	</div>
	<form method="dialog" class="modal-backdrop">
		<button onclick={() => updateSettings({ homeTZ: homeTZ })}>close</button>
	</form>
</dialog>

<!-- radio channel setting dialog -->
<dialog bind:this={radioSettingDialog} class="modal">
	<div class="modal-box w-fit">
		<h3 class="mb-4 text-lg font-bold">Preset Channels</h3>
		<div class="flex flex-col">
			{#each stations as station, index}
				<div class="flex items-center">
					<div class="m-2 text-success">{index + 1}</div>
					<select
						class="select select-ghost w-full"
						value={station.stationuuid}
						onchange={(event) => switchStation(index, event)}
					>
						{#each radioStations as item}
							{#if station.stationuuid === item.stationuuid}
								<option value={item.stationuuid} selected>{item.short_name}</option>
							{:else}
								<option value={item.stationuuid}>{item.short_name}</option>
							{/if}
						{/each}
					</select>
				</div>
			{/each}
		</div>
	</div>
	<form method="dialog" class="modal-backdrop">
		<button
			onclick={() =>
				updateSettings({
					stations: stations
				})}>close</button
		>
	</form>
</dialog>

<style>
	@font-face {
		font-family: 'DSEG';
		src: url('/fonts/DSEG14Classic-BoldItalic.woff2');
	}
	dialog {
		-ms-overflow-style: none; /* Internet Explorer 10+ */
		scrollbar-width: none; /* Firefox */
	}
	dialog::-webkit-scrollbar {
		display: none; /* Safari and Chrome */
	}

	.clock {
		/* flex-grow: 1; */
		font-family: DSEG;
		align-self: center;
		display: flex;
		flex-direction: column;
		margin: 2rem 0;
	}
	.clock:hover {
		cursor: pointer;
	}
	.mainclock {
		/* flex-grow: 1; */
		display: flex;
		margin: 1.5rem 0;
		flex-direction: row;
	}
	.bottomline {
		/* align-self: flex-start; */
		font-weight: bolder;
		color: cornflowerblue;
	}
	.ampm {
		align-self: center;
		margin: 0 0.25rem 0 0;
		display: flex;
		flex-wrap: wrap;
		flex-direction: column;
		height: 100%;
		place-content: space-around;
		/* font-family: DSEG; */
		/* font-weight: 900; */
	}
	.hrmn {
		align-self: center;
		/* font-family: DSEG; */
		/* font-weight: 900; */
		color: greenyellow;
	}
	.sec {
		display: flex;
		flex-direction: column;
		align-self: flex-end;
		/* font-family: DSEG; */
		/* font-weight: 900; */
		color: yellowgreen;
		margin-top: 0.8em;
	}
</style>
