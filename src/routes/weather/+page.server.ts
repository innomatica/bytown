import type { PageServerLoad } from './$types';
// leaflet won't work with SSR
export const ssr = false;

export const load: PageServerLoad = async (event) => {
	const res = await event.fetch('/api/weather');
	return {
		weather: await res.text()
	};
};
