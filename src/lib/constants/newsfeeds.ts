import type { Newsfeed } from '../../ambient';

export const newsfeeds: Newsfeed[] = [
	{
		title: 'Capital Current',
		url: 'https://capitalcurrent.ca/',
		feed: 'https://capitalcurrent.ca/feed/',
		logo: '/images/capital.webp'
	},
	{
		title: 'CBC Ottawa',
		url: 'https://www.cbc.ca/news/canada/ottawa',
		feed: 'https://www.cbc.ca/webfeed/rss/rss-canada-ottawa/',
		logo: '/images/cbc.ico'
	},
	{
		title: 'CTV News Ottawa',
		url: 'https://ottawa.ctvnews.ca/',
		feed: 'https://ottawa.ctvnews.ca/rss/ctv-news-ottawa-1.1245493/',
		logo: '/images/ctvnews.ico'
	},
	{
		title: 'Hometown News',
		url: 'https://www.hometownnews.ca/',
		feed: 'https://www.hometownnews.ca/feed/',
		logo: '/images/wordpress.webp'
	},
	{
		title: 'Manor Park Chronicle',
		url: 'https://manorparkchronicle.com/',
		feed: 'https://manorparkchronicle.com/feed/',
		logo: '/images/manorpark.webp'
	},
	// frequently breaks
	// {
	//   title: 'New Edinburgh News',
	//   url: 'https://www.newedinburgh.ca/',
	//   feed: 'https://www.newedinburgh.ca/feed/',
	//   logo: ''
	// },
	{
		title: 'Old Ottawa South Community',
		url: 'https://oldottawasouth.ca/',
		feed: 'https://oldottawasouth.ca/feed/',
		logo: '/images/osca.webp'
	},
	// useless title
	// {
	//   title: 'Ottawa Chinese News',
	//   url: 'https://canadachinanews.com/',
	//   feed: 'https://canadachinanews.com/feed/',
	//   logo: 'https://canadachinanews.com/wp-content/uploads/2020/10/favicon-CCN-hua.jpg'
	// },
	{
		title: 'Ottawa Citizen',
		url: 'https://ottawacitizen.com/',
		feed: 'https://ottawacitizen.com/feed',
		logo: '/images/citizen.ico'
	},
	{
		title: 'Stittsville Central',
		url: 'https://stittsvillecentral.ca/',
		feed: 'https://stittsvillecentral.ca/feed/',
		logo: '/images/stittsville.ico'
	},
	{
		title: 'The Millstone',
		url: 'https://millstonenews.com/',
		feed: 'https://millstonenews.com/feed/',
		logo: '/images/millstone.webp'
	}
];
