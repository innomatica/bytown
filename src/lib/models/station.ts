export type RadioStation = {
	uuid: string;
	name: string;
	short_name: string;
	url: string;
	url_resolved?: string;
	homepage?: string;
	favicon?: string;
	tags?: string | undefined;
	language?: string | undefined;
	languagecodes?: string | undefined;
	country?: string | undefined;
	countrycode?: string | undefined;
};
