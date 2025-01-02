import { writable } from 'svelte/store';
import { defaultSettings } from '$lib/constants/defaults';
import { loadSettings, saveSettings } from '$lib/database/indexed_db';

//
// settings
//
function createSettingsStore() {
	const { subscribe, set, update } = writable<Settings>(defaultSettings);
	return {
		subscribe,
		set,
		update,
		load: async () => {
			const data = await loadSettings();
			// console.log('settings.load:', data);
			if (data) set(data);
		},
		save: async (data: Settings) => {
			await saveSettings(data);
			console.log('settings.save:', data);
			set(data);
		}
	};
}

export const settings = createSettingsStore();

//
// snooze
//
function createSnoozeStore() {
	const { subscribe, set, update } = writable<Snooze>({ remaining: 0, duration: 0 });
	const durations = [60, 30, 15, 10, 5, 1, 0];
	let interval = 0;
	return {
		subscribe, set, update,
		next: (callback: () => void) =>
			update((v) => {
				// select next duration from durations
				const nextDuration = durations[
					(durations.findIndex((e) => e === v.duration) + 1) % durations.length
				]
				// set up interval timer
				if (interval) {
					clearInterval(interval);
				}
				interval = setInterval(() => {
					update((v) => {
						const remaining = v.remaining - 1;
						// console.log('remaining:', remaining);
						if (remaining <= 0) {
							clearInterval(interval);
							interval = 0;
							callback();
						}
						return {
							start: v.start,
							duration: v.duration,
							remaining
						}
					});
				}, 1000);
				return {
					start: new Date(),
					duration: nextDuration,
					remaining: nextDuration * 60,
				}
			}),
		tick: () => {
			update((v) => {
				console.log(v.remaining);
				return {
					start: v.start,
					duration: v.duration,
					remaining: v.remaining - 1,
				}
			});
		}
	}
}

export const snooze = createSnoozeStore();
