export type Newsfeed = {
	title: string;
	url: string;
	logo: string;
};

export type NewsItem = {
	title: string | undefined;
	link: string | undefined;
	description: string | undefined;
	image: string | undefined | null;
	logo: string | undefined;
	pubDate: Date | undefined;
};
