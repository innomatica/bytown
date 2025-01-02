// export const ssr = false;

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
		// {
		// 	uuid: '9621df06-0601-11e8-ae97-52543be04c81',
		// 	name: 'CIHT Hot 89.9 Ottawa',
		// 	short_name: 'Hot 89.9',
		// 	url: 'https://newcap.leanstream.co/CIHTFM'
		// },
		// {
		// 	uuid: '96215869-0601-11e8-ae97-52543be04c81',
		// 	name: 'CJOT Boom 99.7 Ottawa',
		// 	short_name: 'Boom 99.7',
		// 	url: 'https://live.leanstream.co/CJOTFM-MP3'
		// },
		// {
		// 	uuid: 'c67ced28-65c3-4cbe-8959-65901b72689c',
		// 	name: 'CISS Kiss FM 105.3 Ottawa',
		// 	short_name: 'Kiss 105.3',
		// 	url: 'https://rogers.leanstream.co/rogers/ott1053.stream/icy'
		// },
		// {
		// 	uuid: '9622018a-0601-11e8-ae97-52543be04c81',
		// 	name: 'CKQB JUMP! 106.9 Ottawa',
		// 	short_name: 'JUMP! 106.9',
		// 	url: 'https://live.leanstream.co/CKQBFM'
		// },
		// {
		// 	uuid: '9618998a-0601-11e8-ae97-52543be04c81',
		// 	name: 'CKDJ 107.9 Algonquin College',
		// 	short_name: '107.9 Algonquin',
		// 	url: 'https://live.leanstream.co/CKDJFM-MP3?tunein'
		// },
		// {
		// 	uuid: '265a40b6-8e96-4102-8ea7-26d162f970ca',
		// 	name: 'Radio-Classique',
		// 	short_name: 'Radio-Classique',
		// 	url: 'https://www.radioking.com/play/radio-classique/271810'
		// }
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

//
// Default Newsfeed
//
export const defaultNewsfeeds: Newsfeed[] = [
	{
		title: 'CTV News Ottawa',
		url: 'https://ottawa.ctvnews.ca/rss/ctv-news-ottawa-1.1245493',
		logo: 'https://www.ctvnews.ca/content/dam/ctvnews/en/images/logos/CTVNews_horizontal_logo_f.svg'
	},
	{
		title: 'CBC Ottawa',
		url: 'https://www.cbc.ca/cmlink/rss-canada-ottawa',
		logo: ''
	},
	{
		title: 'Ottawa Citizen',
		url: 'https://ottawacitizen.com/feed',
		logo: ''
	}
];

//
// Weather
//
type WeatherServer = {
	url: string;
	logo: string;
};
export const defaultWeatherServer: WeatherServer = {
	url: 'https://dd.weather.gc.ca/citypage_weather/xml/ON/s0000430_e.xml',
	logo: '/template/gcweb/v5.0.1/assets/sig-blk-en.svg'
};

//
// Place
//
const latLngImpactHubOttawa = [45.4208, -75.6967];
export const defaultLocation = latLngImpactHubOttawa;

// To get the geojson data, use {url}/query?outFields=*&where=1%3D1&f=geojson
type GisElement = {
	name: string;
	url: string;
	minZoom?: number;
};
export const gisOttawa: GisElement[] = [
	{
		name: 'art and culture',
		url: 'https://maps.ottawa.ca/arcgis/rest/services/City_Facilities/MapServer/0',
		minZoom: 14
	},
	// {
	// 	name: "beaches",
	// 	url: "https://maps.ottawa.ca/arcgis/rest/services/Parks_Inventory/MapServer/0",
	// },
	// {
	// 	name: "benches",
	// 	url: "https://maps.ottawa.ca/arcgis/rest/services/Parks_Inventory/MapServer/28",
	// },
	// {
	// 	name: "bike repair stations",
	// 	url: "https://services.arcgis.com/G6F8XLCl5KtAlZ2G/arcgis/rest/services/Bike_Repair_Stations/FeatureServer/0",
	// },
	{
		name: 'community',
		url: 'https://maps.ottawa.ca/arcgis/rest/services/OfficialPlan/MapServer/129',
		minZoom: 14
	},
	{
		name: 'community gardens',
		url: 'https://maps.ottawa.ca/arcgis/rest/services/Community_Gardens/MapServer/0',
		minZoom: 14
	},
	{
		name: 'cycling',
		url: 'https://maps.ottawa.ca/arcgis/rest/services/CyclingMap/MapServer/3',
		// NCC data covers larger area however not available as a layer at the moment
		// https://www.arcgis.com/home/item.html?id=d69460c2d8df472db1a456183bc624fc
		// url: "https://www.arcgis.com/apps/View/index.html?appid=d69460c2d8df472db1a456183bc624fc",
		minZoom: 14
	},
	{
		name: 'doors open',
		url: 'https://maps.ottawa.ca/arcgis/rest/services/DoorsOpen/MapServer/0',
		minZoom: 15
	},
	{
		name: 'food',
		url: 'https://maps.ottawa.ca/arcgis/rest/services/OfficialPlan/MapServer/134',
		minZoom: 14
	},
	{
		name: 'heritage',
		url: 'https://maps.ottawa.ca/arcgis/rest/services/OfficialPlan/MapServer/133',
		minZoom: 14
	},
	{
		name: 'hospitals',
		url: 'https://maps.ottawa.ca/arcgis/rest/services/Hospitals/MapServer/0',
		minZoom: 12
	},
	// {
	// 	name: "learning",
	// 	url: "https://maps.ottawa.ca/arcgis/rest/services/OfficialPlan/MapServer/131",
	// 	minZoom: 15,
	// },
	{
		name: 'nature',
		url: 'https://maps.ottawa.ca/arcgis/rest/services/OfficialPlan/MapServer/137',
		minZoom: 14
	},
	// NCC Open Data
	// https://www.arcgis.com/home/item.html?id=cdb843a5dbf74467a511076328ca2463
	{
		name: 'NCC Gatineau Park Lookouts',
		url: 'https://services2.arcgis.com/WLyMuW006nKOfa5Z/arcgis/rest/services/Gatineau_Park_Lookouts_view2/FeatureServer/0',
		minZoom: 12
	},
	{
		name: 'NCC Parking lots',
		url: 'https://services2.arcgis.com/WLyMuW006nKOfa5Z/arcgis/rest/services/NCC_Parking_Open_Portal_view2/FeatureServer/0',
		minZoom: 12
	},
	{
		name: 'NCC Picnic area',
		url: 'https://services2.arcgis.com/WLyMuW006nKOfa5Z/arcgis/rest/services/NCC_Picnic_Areas_view2/FeatureServer/0',
		minZoom: 12
	},
	{
		name: 'NCC Recreational Paths and Trails',
		url: 'https://services2.arcgis.com/WLyMuW006nKOfa5Z/arcgis/rest/services/Recreational_Paths_and_Trails/FeatureServer/0',
		minZoom: 12
	},
	// {
	// 	name: "NCC Remarkable trees",
	// 	url: "https://services2.arcgis.com/WLyMuW006nKOfa5Z/arcgis/rest/services/Remarkable_Trees_view2/FeatureServer/0",
	// 	minZoom: 14,
	// },
	{
		name: 'public art',
		url: 'https://maps.ottawa.ca/arcgis/rest/services/OfficialPlan/MapServer/138',
		minZoom: 14
	},
	{
		name: 'public washrooms',
		url: 'https://maps.ottawa.ca/arcgis/rest/services/PublicWashrooms/MapServer/0',
		minZoom: 14
	},
	{
		name: 'public wifi',
		url: 'https://services.arcgis.com/G6F8XLCl5KtAlZ2G/arcgis/rest/services/Public_Wi_Fi_Locations/FeatureServer/0',
		minZoom: 14
	},
	{
		name: 'store',
		url: 'https://maps.ottawa.ca/arcgis/rest/services/OfficialPlan/MapServer/136',
		minZoom: 14
	},
	// {
	// 	name: "studio",
	// 	url: "https://maps.ottawa.ca/arcgis/rest/services/OfficialPlan/MapServer/135",
	// 	minZoom: 14,
	// },
	{
		name: 'street food',
		url: 'https://services.arcgis.com/G6F8XLCl5KtAlZ2G/arcgis/rest/services/Street_Food_Vendors_Test/FeatureServer/0',
		minZoom: 15
	},
	{
		name: 'venue',
		url: 'https://maps.ottawa.ca/arcgis/rest/services/OfficialPlan/MapServer/130',
		minZoom: 14
	}
];
// "ball diamonds": "https://maps.ottawa.ca/arcgis/rest/services/Parks_Inventory/MapServer/1",
// "basketball": "https://maps.ottawa.ca/arcgis/rest/services/Parks_Inventory/MapServer/3",
// "city parking lots": "https://maps.ottawa.ca/arcgis/rest/services/InteractiveMaps/MapServer/22",
// "city parkland": "https://maps.ottawa.ca/arcgis/rest/services/Parks_Inventory/MapServer/14",
// "lawn bowling": "https://maps.ottawa.ca/arcgis/rest/services/Parks_Inventory/MapServer/9",
// "other park features": "https://maps.ottawa.ca/arcgis/rest/services/Parks_Inventory/MapServer/12",
// "outdoor links": "https://maps.ottawa.ca/arcgis/rest/services/Parks_Inventory/MapServer/13",
// "outdoor pools": "https://maps.ottawa.ca/arcgis/rest/services/Parks_Inventory/MapServer/10",
// "paid public parking": "https://services.arcgis.com/G6F8XLCl5KtAlZ2G/arcgis/rest/services/Paid_Public_Parking_Listing/FeatureServer/0",
// "pickleball": "https://maps.ottawa.ca/arcgis/rest/services/Parks_Inventory/MapServer/27",
// "play area": "https://maps.ottawa.ca/arcgis/rest/services/Parks_Inventory/MapServer/15",
// "public art2": "https://services.arcgis.com/G6F8XLCl5KtAlZ2G/arcgis/rest/services/publicart/FeatureServer/0",
// "residences": "https://maps.ottawa.ca/arcgis/rest/services/CommunitySocialServices/MapServer/12",
// "skateboard": "https://maps.ottawa.ca/arcgis/rest/services/Parks_Inventory/MapServer/16",
// "sledding hills": "https://maps.ottawa.ca/arcgis/rest/services/Parks_Inventory/MapServer/17",
// "splash pad": "https://maps.ottawa.ca/arcgis/rest/services/Parks_Inventory/MapServer/18",
// "sport": "https://maps.ottawa.ca/arcgis/rest/services/OfficialPlan/MapServer/132",
// "sports fields": "https://maps.ottawa.ca/arcgis/rest/services/Parks_Inventory/MapServer/19",
// "tennis": "https://maps.ottawa.ca/arcgis/rest/services/Parks_Inventory/MapServer/21",
// "transit stations": "https://maps.ottawa.ca/arcgis/rest/services/TransitServices/MapServer/0",
// "volleyball": "https://maps.ottawa.ca/arcgis/rest/services/Parks_Inventory/MapServer/22",
// "wading pools": "https://maps.ottawa.ca/arcgis/rest/services/Parks_Inventory/MapServer/11",
// "water fountains": "https://services.arcgis.com/G6F8XLCl5KtAlZ2G/arcgis/rest/services/Public_Drinking_Water_Fountains/FeatureServer/0",

//
// Links
//
type Link = {
	title: string;
	url: string;
	logo: string;
};
export const defaultLinks: Record<string, Link[]> = {
	'Event Calendar': [
		{
			title: 'Ottawa Festivals: Calendar',
			url: 'https://www.ottawafestivals.ca/calendar/',
			logo: 'https://www.ottawafestivals.ca/wp-content/themes/ottawafestivals/imgs/logo.png'
		},
		{
			title: 'Ottawa Tourism: Event Calendar',
			url: 'https://ottawatourism.ca/en/event-calendar',
			logo: 'https://ottawatourism.ca/themes/custom/otour/logo-2021.svg'
		}
	],
	Activity: [
		{
			title: 'Ottawa Tourism: What to see and do',
			url: 'https://ottawatourism.ca/en/see-and-do',
			logo: 'https://ottawatourism.ca/themes/custom/otour/logo-2021.svg'
		},
		{
			title: 'The Ottawan: Best of Ottawa',
			url: 'https://theottawan.com/best-of/',
			logo: 'https://theottawan.com/favicon-32x32.png'
		},
		{
			title: 'ToDoCanada: Things to Do in Ottawa This Weekend',
			url: 'https://www.todocanada.ca/things-ottawa-weekend/',
			logo: 'https://www.todocanada.ca/wp-content/uploads/cropped-todocanada-icon-250x165.png'
		},
		{
			title: 'Ottawa Road Trip',
			url: 'https://ottawaroadtrips.com/',
			logo: 'https://ottawaroadtrips.com/wp-content/uploads/2020/01/ofavicon1.png'
		}
	],
	'City of Ottawa': [
		{
			title: 'City of Ottawa: Newsroom',
			url: 'https://ottawa.ca/en/city-hall/city-news/newsroom',
			logo: 'https://ottawa.ca/themes/custom/ottca_theme/logo.svg'
		},
		{
			title: 'City of Ottawa: Living',
			url: 'https://ottawa.ca/en/living-ottawa',
			logo: 'https://ottawa.ca/themes/custom/ottca_theme/logo.svg'
		},
		{
			title: 'City of Ottawa: Tourism',
			url: 'https://ottawa.ca/en/parking-roads-and-travel/active-transportation/tourism',
			logo: 'https://ottawa.ca/themes/custom/ottca_theme/logo.svg'
		}
	]
};

//
// Default Radio Stations
//
export const defaultStations: RadioStation[] = [
	// Ottawa Gatineau
	// {
	// 	uuid: '1acf4213-8c02-41d8-8e37-2721b1a88376',
	// 	name: 'Radio Canada ICI Première',
	// 	short_name: 'ICI Première',
	// 	url: 'https://rcavliveaudio.akamaized.net/hls/live/2006652/P-2OOTT0_OTT/master.m3u8',
	// 	homepage: 'https://ici.radio-canada.ca/ohdio/premiere/',
	// 	favicon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/ICI_Radio-Canada_Premi%C3%A8re.svg/200px-ICI_Radio-Canada_Premi%C3%A8re.svg.png',
	// 	tags: 'ici,french,talk,news',
	// 	language: 'french',
	// 	languagecodes: 'fr'
	// },
	// {
	// 	uuid: '530df49b-e845-41d9-beb6-654a0d7efe50',
	// 	name: 'Radio Canada Ici Musique',
	// 	short_name: 'ICI Musique',
	// 	url: 'https://rcavliveaudio.akamaized.net/hls/live/2006986/M-7OOTT0_OTT/master.m3u8',
	// 	homepage: 'https://ici.radio-canada.ca/ohdio/musique',
	// 	favicon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9f/Ici_Musique_logo.svg/220px-Ici_Musique_logo.svg.png',
	// 	tags: 'ici,french,music,blues,classical,jazz,world music',
	// 	language: 'french',
	// 	languagecodes: 'fr'
	// },
	// {
	// 	uuid: '281573ae-410a-480c-9963-b9e0e25efc6b',
	// 	name: 'CBC Radio 1 Ottawa (CBO-FM)',
	// 	short_name: 'CBC Radio 1',
	// 	url: 'https://cbcradiolive.akamaized.net/hls/live/2041037/ES_R1ETT/adaptive_128/chunklist_ao.m3u8',
	// 	homepage: 'https://www.cbc.ca/mediacentre/program/cbc-radio-one-ottawa',
	// 	favicon: 'https://www.cbc.ca/a/favicon.ico',
	// 	tags: 'ottawa,cbc,news,talk',
	// 	language: 'english',
	// 	languagecodes: 'en'
	// },
	// {
	// 	uuid: 'de3b2824-54a7-489c-9204-83a11b3d94f6',
	// 	name: 'CHEZ-FM 106.1 Ottawa',
	// 	short_name: 'Chez 106',
	// 	url: 'https://rogers-hls.leanstream.co/rogers/ott1061.stream/playlist.m3u8',
	// 	homepage: 'https://www.chez106.com/',
	// 	favicon: 'https://upload.wikimedia.org/wikipedia/en/thumb/0/00/1061CHEZ_newlogo.jpg/150px-1061CHEZ_newlogo.jpg',
	// 	tags: 'ottawa,music,rock',
	// 	language: 'english',
	// 	languagecodes: 'en'
	// },
	// {
	// 	uuid: '0fc331d4-c918-4ef4-bfea-21103d7352da',
	// 	name: 'CKOF FM 104.7 Outaouais',
	// 	short_name: '104.7 Outaouais',
	// 	url: 'https://playerservices.streamtheworld.com/pls/CKOFFMAAC.pls',
	// 	homepage: 'https://www.fm1047.ca/',
	// 	favicon: 'https://cdn.cogecolive.com/websites-public/logo_1047_2021_color_default.svg',
	// 	tags: 'french,talk,news,actualités',
	// 	language: 'french',
	// 	languagecodes: 'fr'
	// },
	// {
	// 	uuid: '0fc331d4-c918-4ef4-bfea-21103d7352da',
	// 	name: 'Ottawa Live 885 (CLIVFM)',
	// 	short_name: 'Live 885',
	// 	url: 'https://newcap.leanstream.co/CILVFM-MP3?args=web_03',
	// 	homepage: 'https://www.live885.com/',
	// 	favicon: 'https://www.live885.com/favicon.ico',
	// 	tags: 'ottawa,music,alternative,rock',
	// 	language: 'english',
	// 	languagecodes: 'en'
	// },
	// {
	// 	uuid: '9621df06-0601-11e8-ae97-52543be04c81',
	// 	name: 'CIHT Hot 89.9 Ottawa',
	// 	short_name: 'Hot 89.9',
	// 	url: 'https://newcap.leanstream.co/CIHTFM',
	// 	homepage: 'http://www.hot899.com/',
	// 	favicon:
	// 		'https://media.socastsrm.com/wordpress/wp-content/blogs.dir/981/files/2021/07/hot899herologo2021-339x300-1.png',
	// 	tags: 'ottawa,music,contemporary',
	// 	language: 'english',
	// 	languagecodes: 'en'
	// },
	// {
	// 	uuid: '96215869-0601-11e8-ae97-52543be04c81',
	// 	name: 'CJOT Boom 99.7 Ottawa',
	// 	short_name: 'Boom 99.7',
	// 	url: 'https://live.leanstream.co/CJOTFM-MP3',
	// 	homepage: 'http://www.boom997.com/',
	// 	favicon:
	// 		'https://boom997.com/wp-content/uploads/sites/31/2017/10/cropped-fm-logos_512x512_boom997.png?w=180',
	// 	tags: 'ottawa,music,70s,80s,90s,classic hits',
	// 	language: 'english',
	// 	languagecodes: 'en'
	// },
	// {
	// 	uuid: 'c67ced28-65c3-4cbe-8959-65901b72689c',
	// 	name: 'CISS Kiss FM 105.3 Ottawa',
	// 	short_name: 'Kiss 105.3',
	// 	url: 'https://rogers.leanstream.co/rogers/ott1053.stream/icy',
	// 	homepage: 'https://www.kissottawa.com/',
	// 	favicon: 'https://upload.wikimedia.org/wikipedia/commons/e/e9/CISS-FM_logo.png',
	// 	tags: 'ottawa,music,pop',
	// 	language: 'english',
	// 	languagecodes: 'en'
	// },
	// {
	// 	uuid: '9622018a-0601-11e8-ae97-52543be04c81',
	// 	name: 'CKQB JUMP! 106.9 Ottawa',
	// 	short_name: 'JUMP! 106.9',
	// 	url: 'https://live.leanstream.co/CKQBFM',
	// 	homepage: 'http://www.jumpradio.ca/',
	// 	favicon:
	// 		'https://jumpradio.ca/wp-content/uploads/sites/15/2019/09/cropped-jump2019_512x512_v1.png?w=180',
	// 	tags: 'ottawa,music,contemporary hits',
	// 	language: 'english',
	// 	languagecodes: 'en'
	// },
	// {
	// 	uuid: '9618998a-0601-11e8-ae97-52543be04c81',
	// 	name: 'CKDJ 107.9 Algonquin College',
	// 	short_name: '107.9 Algonquin',
	// 	url: 'https://live.leanstream.co/CKDJFM-MP3?tunein',
	// 	homepage: 'http://www.ckdj.net/',
	// 	favicon: 'https://www.ckdj.net/favicon.ico',
	// 	tags: 'ottawa,music,college',
	// 	language: 'english',
	// 	languagecodes: 'en'
	// },
	// {
	// 	uuid: '265a40b6-8e96-4102-8ea7-26d162f970ca',
	// 	name: 'Radio-Classique',
	// 	short_name: 'Radio-Classique',
	// 	url: 'https://www.radioking.com/play/radio-classique/271810',
	// 	homepage: 'https://www.radioclassique.ca/',
	// 	favicon: 'https://www.radioclassique.ca/upload/design/5d1cc4fcaad749.59987287.png',
	// 	tags: 'french,music,classical,film,opera',
	// 	language: 'french',
	// 	languagecodes: 'fr'
	// },
	// {
	// 	uuid: '78012206-1aa1-11e9-a80b-52543be04c81',
	// 	name: 'MANGORADIO',
	// 	short_name: 'MANGORADIO',
	// 	url: 'https://stream.mangoradio.de/',
	// 	homepage: 'https://mangoradio.de/',
	// 	favicon: 'https://mangoradio.de/wp-content/uploads/Logo.webp',
	// 	tags: 'german,music,pop',
	// 	language: 'german',
	// 	languagecodes: 'de'
	// },
	// {
	// 	uuid: '98adecf7-2683-4408-9be7-02d3f9098eb8',
	// 	name: 'BBC World Service',
	// 	short_name: 'BBC World',
	// 	url: 'https://stream.live.vc.bbcmedia.co.uk/bbc_world_service',
	// 	homepage: 'https://www.bbc.co.uk/programmes/w172xzjgf6lxp7y',
	// 	favicon: 'https://cdn-profiles.tunein.com/s24948/images/logoq.jpg?t=1',
	// 	tags: 'news,talk',
	// 	language: 'english',
	// 	languagecodes: 'en'
	// },
	// {
	// 	uuid: '9617a958-0601-11e8-ae97-52543be04c81',
	// 	name: 'Radio Paradise',
	// 	short_name: 'Radio Paradise',
	// 	url: 'https://stream-uk1.radioparadise.com/aac-320',
	// 	homepage: 'https://www.radioparadise.com/',
	// 	favicon: 'https://www.radioparadise.com/favicon.ico',
	// 	tags: 'music,eclectic',
	// 	language: 'english',
	// 	languagecodes: 'en'
	// },
	// {
	// 	uuid: 'f592bcd7-c052-11e9-8502-52543be04c81',
	// 	name: 'REYFM',
	// 	short_name: 'REYFM',
	// 	url: 'https://listen.reyfm.de/original_192kbps.mp3',
	// 	homepage: 'https://www.reyfm.de/',
	// 	favicon: 'https://rey.fm/reyfm-sticker.png',
	// 	tags: 'german,music,pop',
	// 	country: 'german',
	// 	countrycode: 'de'
	// },
	// {
	// 	uuid: '932eb148-e6f6-11e9-a96c-52543be04c81',
	// 	name: 'France Inter Paris',
	// 	short_name: 'FIP',
	// 	url: 'https://icecast.radiofrance.fr/fip-hifi.aac',
	// 	homepage: 'https://www.fip.fr/',
	// 	favicon:
	// 		'https://upload.wikimedia.org/wikipedia/fr/thumb/d/d5/FIP_logo_2005.svg/1024px-FIP_logo_2005.svg.png',
	// 	tags: 'french,music,public radio',
	// 	language: 'french',
	// 	languagecodes: 'fr'
	// },
	// {
	// 	uuid: '9606f727-0601-11e8-ae97-52543be04c81',
	// 	name: '1LIVE',
	// 	short_name: '1LIVE',
	// 	url: 'https://wdr-1live-live.icecast.wdr.de/wdr/1live/live/mp3/128/stream.mp3',
	// 	homepage: 'https://einslive.de/',
	// 	favicon: 'https://www1.wdr.de/radio/1live/resources/img/favicon/apple-touch-icon.png',
	// 	tags: 'german,music,pop',
	// 	language: 'german',
	// 	languagecodes: 'de'
	// },
	// {
	// 	uuid: '9605edb3-0601-11e8-ae97-52543be04c81',
	// 	name: 'WDR 5',
	// 	short_name: 'WDR 5',
	// 	url: 'https://wdr-wdr5-live.icecast.wdr.de/wdr/wdr5/live/mp3/128/stream.mp3',
	// 	homepage: 'https://www1.wdr.de/radio/wdr5/',
	// 	favicon: 'https://www1.wdr.de/resources-v5.134.1/img/favicon/apple-touch-icon.png',
	// 	tags: 'germal,news,talk,comedy,kids',
	// 	language: 'german',
	// 	languagecodes: 'de'
	// },
	// {
	// 	uuid: '9622cd46-0601-11e8-ae97-52543be04c81',
	// 	name: 'Europa Plus',
	// 	short_name: 'Europa Plus',
	// 	url: 'https://ep256.hostingradio.ru:8052/europaplus256.mp3',
	// 	homepage: 'https://www.europaplus.ru/',
	// 	favicon: 'https://liveam.tv/img/2494.jpg',
	// 	tags: 'dance, house, pop',
	// 	language: 'russian',
	// 	languagecodes: 'ru'
	// },
	// {
	// 	uuid: '240d28b9-7858-48d2-a816-9cf8e1875fe8',
	// 	name: 'SWR3',
	// 	short_name: 'SWR3',
	// 	url: 'https://liveradio.swr.de/sw282p3/swr3/play.mp3',
	// 	homepage: 'https://swr3.de/',
	// 	favicon: 'https://swr3.de/assets/swr3/icons/apple-touch-icon.png',
	// 	tags: 'news, pop, rock',
	// 	language: 'german',
	// 	languagecodes: 'de'
	// },
	// {
	// 	uuid: '33fcdf94-5605-49bb-8e34-206f38c335dc',
	// 	name: 'Goldy Evergreen',
	// 	short_name: 'Goldy Evergreen',
	// 	url: 'https://stream.zeno.fm/n2fd0edh9k8uv',
	// 	homepage: 'https://zeno.fm/goldy-fm/',
	// 	favicon: 'https://zeno.fm/static/icons/apple-icon-120x120.png',
	// 	tags: '',
	// 	language: 'hindi',
	// 	languagecodes: 'hi'
	// },
	// {
	// 	uuid: '563f5559-105c-11e9-a80b-52543be04c81',
	// 	name: 'DFM RUSSIAN DANCE',
	// 	short_name: 'DFM Dance',
	// 	url: 'https://dfm-dfmrusdance.hostingradio.ru/dfmrusdance96.aacp?0.9987259013359274',
	// 	homepage: 'https://dfm.ru/',
	// 	favicon: 'https://dfm.ru/logo.svg',
	// 	tags: 'dance',
	// 	language: 'russian',
	// 	languagecodes: 'ru'
	// },
	// {
	// 	uuid: '7a3a3989-8f26-44f7-9ae5-fa91e5cf4f9d',
	// 	name: 'RMC FR',
	// 	short_name: 'RMC FR',
	// 	url: 'https://audio.bfmtv.com/rmcradio_128.mp3',
	// 	homepage: 'https://rmc.bfmtv.com/',
	// 	favicon: 'https://i1.wp.com/www.mediasportif.fr/wp-content/uploads/2014/05/Radio-RMC.jpg',
	// 	tags: 'france,info,sport,talk',
	// 	language: 'french',
	// 	languagecodes: 'fr'
	// },
	// {
	// 	uuid: 'c93f9c76-2ad4-464d-bff4-7f46e95f2601',
	// 	name: 'CLASSIC HITS RADIO 70 80',
	// 	short_name: 'Classic Hits',
	// 	url: 'https://radiopanther.radiolebowski.com/play',
	// 	homepage: 'https://classichits.radio/',
	// 	favicon:
	// 		'https://classichits.radio/wp-content/uploads/2021/03/cropped-classichits.radio_logo-180x180.png',
	// 	tags: '70s, 80s, classic hits',
	// 	language: 'english',
	// 	languagecodes: 'en'
	// },
	// {
	// 	uuid: '9627ddc0-0601-11e8-ae97-52543be04c81',
	// 	name: '181.FM - Old School HipHop',
	// 	short_name: '181.FM HipHop',
	// 	url: 'https://listen.181fm.com/181-oldschool_128k.mp3',
	// 	homepage: 'https://www.181.fm/',
	// 	favicon: 'https://www.181.fm/banners/181fm-125x125.gif',
	// 	tags: 'hiphop, oldschool, rnb, waynesboro',
	// 	language: 'english',
	// 	languagecodes: 'en'
	// },
	// {
	// 	uuid: '960594a6-0601-11e8-ae97-52543be04c81',
	// 	name: 'Rock Antenne',
	// 	short_name: 'Rock Antenne',
	// 	url: 'https://mp3channels.webradio.rockantenne.de/rockantenne',
	// 	homepage: 'https://www.rockantenne.de/',
	// 	favicon: 'https://www.rockantenne.de/logos/rock-antenne/apple-touch-icon.png',
	// 	tags: 'rock',
	// 	language: 'german',
	// 	languagecodes: 'de'
	// },
	// {
	// 	uuid: 'bbed394d-8907-435f-8714-8b24c1c56399',
	// 	name: 'Café Romántico (Monterrey)',
	// 	short_name: 'Café Romántico',
	// 	url: 'https://panel.retrolandigital.com/radio/8110/listen',
	// 	url_resolved: 'https://panel.retrolandigital.com/radio/8110/listen',
	// 	homepage: 'https://caferomanticoradio.com/',
	// 	favicon: 'https://caferomanticoradio.com/assets/images/cafe-romantico-radio.jpg',
	// 	tags: '80s en español, clásicos, estación',
	// 	language: 'spanish',
	// 	languagecodes: 'es'
	// },
	// {
	// 	uuid: '165eab56-4a14-11e9-a4d7-52543be04c81',
	// 	name: 'DFM Дискач 90-х',
	// 	short_name: 'DFM Дискач 90',
	// 	url: 'https://dfm-disc90.hostingradio.ru/disc9096.aacp',
	// 	url_resolved: 'https://dfm-disc90.hostingradio.ru/disc9096.aacp',
	// 	homepage: 'https://dfm.ru/',
	// 	favicon: 'https://dfm.ru/favicon.svg',
	// 	tags: 'disco',
	// 	language: 'russian',
	// 	languagecodes: 'ru'
	// },
	// Too slow
	// {
	// 	uuid: '2587e12f-5b2e-4ef9-9710-2510c60e9e35',
	// 	name: 'Cope Directo 2',
	// 	short_name: 'Cope Directo 2',
	// 	url: 'https://flucast07-o-cloud.flumotion.com/cope/net2.mp3',
	// 	homepage: 'https://www.cope.es/',
	// 	favicon: 'https://www.cope.es/favicon/cope/favicon.ico',
	// 	tags: 'deportes',
	// 	language: 'spanish',
	// 	languagecodes: 'es'
	// },
	// {
	// 	uuid: '229a2972-2d42-4f57-94a9-da84211bd575',
	// 	name: 'Evropa 2',
	// 	short_name: 'Evropa 2',
	// 	url: 'https://ice.actve.net/fm-evropa2-128',
	// 	homepage: 'https://www.evropa2.cz/',
	// 	favicon: 'https://m.actve.net/e2/favicon/apple-touch-icon.png',
	// 	tags: '',
	// 	language: 'czech',
	// 	languagecodes: 'cs'
	// },
	// {
	// 	uuid: '9619ea14-0601-11e8-ae97-52543be04c81',
	// 	name: 'Radio 105 Network',
	// 	short_name: 'Radio 105',
	// 	url: 'https://icecast.unitedradio.it/Radio105.mp3',
	// 	homepage: 'https://www.105.net/',
	// 	favicon: 'https://upload.wikimedia.org/wikipedia/it/0/01/105.png',
	// 	tags: 'hits, mediaset, pop, top 40',
	// 	language: 'italian',
	// 	languagecodes: 'it'
	// },
	// {
	// 	uuid: '96063f25-0601-11e8-ae97-52543be04c81',
	// 	name: 'Classic FM UK',
	// 	short_name: 'Classic FM',
	// 	url: 'https://ice-the.musicradio.com/ClassicFMMP3',
	// 	homepage: 'https://www.classicfm.com/',
	// 	favicon: 'https://www.classicfm.com/assets_v4r/classic/img/favicon-196x196.png',
	// 	tags: 'classical',
	// 	language: 'english',
	// 	languagecodes: 'en'
	// },
	// {
	// 	uuid: '961c96ef-0601-11e8-ae97-52543be04c81',
	// 	name: 'ROCK FM',
	// 	short_name: 'ROCK FM',
	// 	url: 'https://nashe1.hostingradio.ru/rock-128.mp3',
	// 	homepage: 'https://www.rockfm.ru/',
	// 	favicon: 'https://www.rockfm.ru/favicons/favicon.ico',
	// 	tags: 'classic rock,pop rock,rock',
	// 	language: 'russian',
	// 	languagecodes: 'ru'
	// },
	// {
	// 	uuid: 'bbae7603-b9c0-42fe-a1f5-da8f424baa8b',
	// 	name: 'PerfectMoods – 24/7 Quality Lounge',
	// 	short_name: 'PerfectMoods',
	// 	url: 'https://www.radioking.com/play/perfectmoods/104227',
	// 	homepage: 'https://perfectmoods.nl/',
	// 	favicon: 'https://image.radioking.io/radios/64968/logo/1bb8a61c-4d07-4591-a0f9-1a7de13d428f.jpeg',
	// 	tags: 'chillout,lounge,smooth jazz',
	// 	language: 'english',
	// 	languagecodes: 'en'
	// },
	// {
	// 	uuid: '97464fa0-f43b-4d04-b35a-2d2d0f5e88fc',
	// 	name: 'BNR nieuwsradio',
	// 	short_name: 'BNR nieuws',
	// 	url: 'http://stream.bnr.nl/bnr_mp3_128_20',
	// 	homepage: 'https://www.bnr.nl/',
	// 	favicon: 'https://static.bnr.nl/assets/bnr-next/logo.png',
	// 	tags: 'business,talk,news',
	// 	language: 'dutch',
	// 	languagecodes: 'nl'
	// },
	// CERT expired
	// {
	// 	uuid: 'd1a54d2e-623e-4970-ab11-35f7b56c5ec3',
	// 	name: 'Classic Vinyl HD',
	// 	short_name: 'Classic Vinyl HD',
	// 	url: 'https://icecast.walmradio.com:8443/classic',
	// 	homepage: 'https://walmradio.com/classic',
	// 	favicon: 'https://icecast.walmradio.com:8443/classic.jpg',
	// 	tags: 'classic hits, easy listening, jazz, lounge',
	// 	language: 'english',
	// 	languagecodes: 'en'
	// },
	// CERT expired
	// {
	// 	uuid: 'ea8059be-d119-4de3-b27b-0d9bd6aedb17',
	// 	name: 'Adroit Jazz Underground',
	// 	short_name: 'Adroit Jazz',
	// 	url: 'https://icecast.walmradio.com:8443/jazz',
	// 	homepage: 'https://walmradio.com/jazz',
	// 	favicon: 'https://icecast.walmradio.com:8443/jazz.jpg',
	// 	tags: 'avant-garde, cool, mainstream, modern',
	// 	language: 'english',
	// 	languagecodes: 'en'
	// },	
	// CERT expired
	// {
	// 	uuid: '313046e3-b203-4b9d-bc3e-393da7d97126',
	// 	name: 'WALM - Old Time Radio',
	// 	short_name: 'WALM',
	// 	url: 'https://icecast.walmradio.com:8443/otr',
	// 	url_resolved: 'https://icecast.walmradio.com:8443/otr',
	// 	homepage: 'https://walmradio.com/otr',
	// 	favicon: 'https://icecast.walmradio.com:8443/otr.jpg',
	// 	tags: '78rpm, vintage, comedy, drama',
	// 	language: 'english',
	// 	languagecodes: 'en'
	// },
];
