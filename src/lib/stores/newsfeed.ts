import { writable, type Writable } from 'svelte/store';

// const urlRSS = 'https://www.cbc.ca/cmlink/rss-canada-ottawa';
const urlRSS = 'https://www.reddit.com/r/ottawa/.rss';

// //
// // Default Newsfeed
// //
// export const defaultNewsfeeds: Newsfeed[] = [
// 	{
// 		title: 'CTV News Ottawa',
// 		url: 'https://ottawa.ctvnews.ca/rss/ctv-news-ottawa-1.1245493',
// 		logo: 'https://www.ctvnews.ca/content/dam/ctvnews/en/images/logos/CTVNews_horizontal_logo_f.svg'
// 	},
// 	{
// 		title: 'CBC Ottawa',
// 		url: 'https://www.cbc.ca/webfeed/rss/rss-canada-ottawa',
// 		logo: 'https://www.cbc.ca/favicon.ico'
// 	},
// 	{
// 		title: 'Ottawa Citizen',
// 		url: 'https://ottawacitizen.com/feed',
// 		logo: ''
// 	}
// ];

interface NewsfeedStore<T> extends Writable<T> {
	fetch: () => Promise<void>;
}

function createNewsFeedStore(): NewsfeedStore<Array<Newsfeed>> {
	const { subscribe, set, update } = writable([]);
	return {
		subscribe,
		set,
		update,
		fetch: async () => {
			const res = await fetch(urlRSS, {
				method: 'GET',
				credentials: 'include',
				mode: 'no-cors',
				headers: {
					'Access-Control-Allow-Origin': '*'
				}
			});

			const jsonData = await res.json();
			console.log(jsonData);

			// .then(res => res.text())
			// .then(text => console.log(text));
			// .then(text => new window.DOMParser().parseFromString(text, "text/xml"))
			// .then(data => console.log(data));
		}
	};
}

export const newsfeed = createNewsFeedStore();
