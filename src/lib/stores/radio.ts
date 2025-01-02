import { writable, type Writable } from 'svelte/store';

export type AudioPlayer = {
	player: HTMLAudioElement | null;
	currentStation: string | null;
};

interface AudioPlayerStore<T> extends Writable<T> {
	play: (station: RadioStation) => void;
	stop: () => void;
}

function createAudioPlayer(): AudioPlayerStore<AudioPlayer> {
	const { subscribe, set, update } = writable({
		player: null,
		currentStation: ''
	} as AudioPlayer);
	// console.log('createAudioPlayer');

	return {
		subscribe,
		set,
		update,
		// setPlayer: (player) =>
		// 	update((val) => ({
		// 		player: player,
		// 		currentStation: val.currentStation
		// 	})),
		play: (station: RadioStation) =>
			update((val) => {
				// pause current stream first
				if (val.player) {
					// console.log('radio.pause')
					val.player.pause();
					// https://developer.chrome.com/blog/play-request-was-interrupted/
					val.player.src = '';
				}
				if (val.currentStation == station.stationuuid) {
					// console.log('radio stop')
					return { player: val.player, currentStation: null };
				} else {
					// console.log(`radio.play: ${JSON.stringify(station)}`)
					const player: HTMLAudioElement = new Audio(station.url);
					// don't do this!
					// player.crossOrigin = 'anonymous';
					player.play();
					return { player: player, currentStation: station.stationuuid };
				}
			}),
		stop: () =>
			update((val) => {
				val.player?.pause();
				// https://developer.chrome.com/blog/play-request-was-interrupted/
				if (val.player?.src) {
					val.player.src = '';
				}
				return { player: val.player, currentStation: null };
			})
	};
}

export const radio = createAudioPlayer();
