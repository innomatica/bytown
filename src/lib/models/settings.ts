import { type RadioStation } from './station';

export type Settings = {
	locale: string;
	localTZ: string;
	homeTZ: string;
	alarm: {
		time: string;
		active: boolean;
		station: number;
	};
	stations: RadioStation[];
};
