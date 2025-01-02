export type WeatherEvent = {
	type: string | null;
	priority: string | null;
	description: string | null;
};

export type Wind = {
	rank?: string | undefined;
	speed: number;
	gust: number;
	direction: string | undefined;
	bearing?: number;
};

export type CurrentCondition = {
	station: string | undefined;
	dateTime: Date;
	condition: string | undefined;
	iconCode: string | undefined;
	temperature: number;
	dewpoint: number;
	humidex: number;
	pressure: number;
	visibility: number;
	relativeHumidity: number;
	wind: Wind;
};

export type DailyForecast = {
	period: string | undefined;
	summary: string | undefined;
	cloud: string | undefined;
	abbr: {
		iconCode: string | undefined;
		pop: number;
		summary: string | undefined;
	};
	temperatures: {
		summary: string | undefined;
		temparature: Array<number>;
	};
	winds: {
		summary: string | undefined;
		items: Array<Wind>;
	};
	relativeHumidity: number;
	humidex: number;
};

export type HourlyForecast = {
	dateTime: Date;
	condition: string | undefined;
	iconCode: string | undefined;
	temperature: number;
	lop: number;
	humidex: number;
	wind: Wind;
};

export type Weather = {
	dateTime: Date;
	region: string | undefined;
	warnings: {
		url: string | null | undefined;
		events: Array<WeatherEvent>;
	};
	current: CurrentCondition;
	daily: {
		dateTime: Date;
		regionalNormals: string | undefined;
		forecasts: Array<DailyForecast>;
	};
	hourly: {
		dateTime: Date;
		forecasts: Array<HourlyForecast>;
	};
	riseSet: {
		sunrise: Date;
		sunset: Date;
	};
};
