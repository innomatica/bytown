import type { Settings, Timezone } from '../../ambient';
//
// Default Map Setteings
//
const latLngImpactHubOttawa = [45.4208, -75.6967];
export const defaultLocation = latLngImpactHubOttawa;
export const defaultZoom = 15;
export const radarZoom = 9;

//
// Default Settings
//
export const defaultSettings: Settings = {
	locale: 'en-CA',
	localTZ: 'America/Toronto',
	homeTZ: 'America/Vancouver',
	alarm: {
		time: '00:00',
		active: false,
		station: 0
	},
	stations: [
		{
			stationuuid: '281573ae-410a-480c-9963-b9e0e25efc6b',
			name: 'CBC Radio 1 Ottawa',
			short_name: 'CBC Radio 1',
			url: 'https://cbcradiolive.akamaized.net/hls/live/2041037/ES_R1ETT/adaptive_128/chunklist_ao.m3u8',
			url_resolved:
				'https://cbcradiolive.akamaized.net/hls/live/2041037/ES_R1ETT/adaptive_128/chunklist_ao.m3u8',
			homepage: 'https://www.cbc.ca/mediacentre/program/cbc-radio-one-ottawa',
			favicon: 'https://www.cbc.ca/favicon.ico',
			tags: 'information, news, talk',
			country: 'Canada',
			countrycode: 'CA',
			language: 'english',
			languagecodes: 'en',
			codec: 'UNKNOWN',
			bitrate: 0,
			hls: 1,
			lastcheckok: 1,
			lastchecktime_iso8601: '2024-12-31T16:29:31Z',
			lastcheckoktime_iso8601: '2024-12-31T16:29:31Z'
		},
		{
			stationuuid: '9621df06-0601-11e8-ae97-52543be04c81',
			name: 'CIHT "Hot 89.9" Ottawa, ON',
			short_name: 'Hot 89.9',
			url: 'http://newcap.leanstream.co/CIHTFM',
			url_resolved: 'http://newcap.leanstream.co/CIHTFM',
			homepage: 'http://www.hot899.com/',
			favicon: 'http://www.hot899.com/favicon.ico',
			tags: 'contemporary',
			country: 'Canada',
			countrycode: 'CA',
			language: 'english',
			languagecodes: '',
			codec: 'AAC',
			bitrate: 133,
			hls: 0,
			lastcheckok: 1,
			lastchecktime_iso8601: '2025-01-01T06:25:08Z',
			lastcheckoktime_iso8601: '2025-01-01T06:25:08Z'
		},
		{
			stationuuid: '28be7f1d-9c46-4072-8a09-5f53326d7519',
			name: 'CFPT 106.5 "Elmnt FM"',
			short_name: 'Elmnt FM',
			url: 'https://ice10.securenetsystems.net/CFPT',
			url_resolved: 'https://ice10.securenetsystems.net/CFPT',
			homepage: 'https://toronto.elmntfm.ca/',
			favicon:
				'https://toronto.elmntfm.ca/wp-content/uploads/2018/07/ELMNTFM_website_FEB18_SmallBlueIcon-1.png',
			tags: 'hip hop, indigenous, r&b, talk',
			country: 'Canada',
			countrycode: 'CA',
			language: '',
			languagecodes: '',
			codec: 'AAC+',
			bitrate: 32,
			hls: 0,
			lastcheckok: 1,
			lastchecktime_iso8601: '2024-12-31T23:08:40Z',
			lastcheckoktime_iso8601: '2024-12-31T23:08:40Z'
		},
		{
			stationuuid: '530df49b-e845-41d9-beb6-654a0d7efe50',
			name: 'Radio Canada Ici Musique - Ottawa',
			short_name: 'ICI Musique',
			url: 'https://rcavliveaudio.akamaized.net/hls/live/2006986/M-7OOTT0_OTT/master.m3u8',
			url_resolved: 'https://rcavliveaudio.akamaized.net/hls/live/2006986/M-7OOTT0_OTT/master.m3u8',
			homepage: 'https://ici.radio-canada.ca/ohdio/musique',
			favicon: 'https://ici.radio-canada.ca/v5/ohdio/dist/appohdio/assets/pwa/favicon.ico',
			tags: 'blues, classical, jazz, world music',
			country: 'Canada',
			countrycode: 'CA',
			language: 'french',
			languagecodes: '',
			codec: 'AAC',
			bitrate: 48,
			hls: 1,
			lastcheckok: 1,
			lastchecktime_iso8601: '2024-12-31T19:33:57Z',
			lastcheckoktime_iso8601: '2024-12-31T19:33:57Z'
		},
		{
			stationuuid: 'de3b2824-54a7-489c-9204-83a11b3d94f6',
			name: 'CHEZ-FM 106.1 "Chez 106" Ottawa',
			short_name: 'Chez FM',
			url: 'https://rogers-hls.leanstream.co/rogers/ott1061.stream/playlist.m3u8',
			url_resolved: 'https://rogers-hls.leanstream.co/rogers/ott1061.stream/playlist.m3u8',
			homepage: 'https://www.chez106.com/',
			favicon:
				'https://upload.wikimedia.org/wikipedia/en/thumb/0/00/1061CHEZ_newlogo.jpg/150px-1061CHEZ_newlogo.jpg',
			tags: 'mainstream rock',
			country: 'Canada',
			countrycode: 'CA',
			language: 'english',
			languagecodes: '',
			codec: 'AAC+',
			bitrate: 47,
			hls: 1,
			lastcheckok: 1,
			lastchecktime_iso8601: '2024-12-31T22:17:57Z',
			lastcheckoktime_iso8601: '2024-12-31T22:17:57Z'
		},
		{
			stationuuid: '265a40b6-8e96-4102-8ea7-26d162f970ca',
			name: 'Radio-Classique',
			short_name: 'Radio Classique',
			url: 'https://www.radioking.com/play/radio-classique/271810',
			url_resolved: 'https://listen.radioking.com/radio/228241/stream/271810',
			homepage: 'https://www.radioclassique.ca/',
			favicon: 'https://www.radioclassique.ca/upload/5d7f91e07dcae6.18591349.ico',
			tags: 'classical, film music, opera',
			country: 'Canada',
			countrycode: 'CA',
			language: 'french',
			languagecodes: '',
			codec: 'MP3',
			bitrate: 320,
			hls: 0,
			lastcheckok: 1,
			lastchecktime_iso8601: '2025-01-01T08:28:59Z',
			lastcheckoktime_iso8601: '2025-01-01T08:28:59Z'
		}
	]
};

//
// Timezones
//
// https://en.wikipedia.org/wiki/List_of_tz_database_time_zones

export const defaultTimezones: Timezone[] = [
	{ value: 'Pacific/Honolulu', title: '(UTC-10) Pacific/Honolulu' },
	{ value: 'America/Anchorage', title: '(UTC-09) America/Anchorage' },
	{ value: 'America/Vancouver', title: '(UTC-08) America/Vancouver' },
	{ value: 'America/Phoenix', title: '(UTC-07) America/Phoenix' },
	{ value: 'America/Edmonton', title: '(UTC-07) America/Edmonton' },
	{ value: 'America/Mexico_City', title: '(UTC-06) America/Mexico City' },
	{ value: 'America/Winnipeg', title: '(UTC-06) America/Winnipeg' },
	{ value: 'America/Panama', title: '(UTC-05) America/Panama' },
	{ value: 'America/New_York', title: '(UTC-05) America/New York' },
	{ value: 'America/Caracas', title: '(UTC-04) America/Caracas' },
	{ value: 'America/Santiago', title: '(UTC-04) America/Santiago' },
	{ value: 'America/Montevideo', title: '(UTC-03) America/Montevideo' },
	{ value: 'Africa/Monrovia', title: '(UTC-00) Africa/Monrovia' },
	{ value: 'Europe/London', title: '(UTC-00) Europe/London' },
	{ value: 'Africa/Casablanca', title: '(UTC+01) Africa/Casablanca' },
	{ value: 'Africa/Tunis', title: '(UTC+01) Africa/Tunis' },
	{ value: 'Europe/Paris', title: '(UTC+01) Europe/Paris' },
	{ value: 'Europe/Dublin', title: '(UTC+01) Europe/Berlin' },
	{ value: 'Africa/Cairo', title: '(UTC+02) Africa/Cairo' },
	{ value: 'Europe/Athens', title: '(UTC+02) Europe/Athens' },
	{ value: 'Europe/Moscow', title: '(UTC+03) Europe/Moscow' },
	{ value: 'Asia/Dubai', title: '(UTC+04) Asia/Dubai' },
	{ value: 'Asia/Karachi', title: '(UTC+05) Asia/Karachi' },
	{ value: 'Asia/Dhaka', title: '(UTC+06) Asia/Dhaka' },
	{ value: 'Asia/Bangkok', title: '(UTC+07) Asia/Bangkok' },
	{ value: 'Asia/Hong_Kong', title: '(UTC+08) Asia/Hong Kong' },
	{ value: 'Asia/Tokyo', title: '(UTC+09) Asia/Tokyo' },
	{ value: 'Australia/Brisbane', title: '(UTC+10) Australia/Brisbane' },
	{ value: 'Australia/Melbourne', title: '(UTC+10) Australia/Melbourne' },
	{ value: 'Pacific/Fiji', title: '(UTC+12) Pacific/Fiji' }
];
