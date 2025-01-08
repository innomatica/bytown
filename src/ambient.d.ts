type RadioStation = {
  stationuuid: string;
  name: string;
  url: string;
  url_resolved?: string;
  homepage?: string;
  favicon?: string;
  tags?: string;
  country?: string;
  countrycode?: string;
  language?: string;
  languagecodes?: string;
  codec?: string;
  bitrate?: number;
  hls?: number;
  lastcheckok?: number;
  lastchecktime_iso8601?: string;
  lastcheckoktime_iso8601?: string;
  // added
  short_name: string;
};

type Newsfeed = {
  title: string;
  url: string;
  feed: string;
  logo: string;
  items?: NewsItem[];
};

type NewsItem = {
  title: string | undefined;
  link: string | undefined;
  description: string | undefined;
  image: string | undefined | null;
  // logo: string | undefined;
  pubDate: Date | undefined;
};

type Settings = {
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

type Snooze = {
  remaining: number;
  start?: Date;
  duration: number;
};

type Timezone = {
  value: string;
  title: string;
};

type GisItem = {
  name_en: string;
  name_fr: string;
  url: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  layer?: any;
  popup: MapPopup;
}

type MapPopup = {
  title: string;
  url?: string;
  contents: string[];
}

type WebLink = {
  title: string;
  url: string;
  logo: string;
};

type CurrentCondition = {
  apparentTemperature: number,
  isDay: number,
  precipitation: number,
  rain: number,
  relativeHumidity2m: number,
  showers: number,
  snowfall: number,
  surfacePressure: number,
  temperature2m: number,
  time: Date;
  weatherCode: number,
  windDirection10m: number,
  windGusts10m: number,
  windSpeed10m: number,
}

type HourlyForecast = {
  apparentTemperature: Record<number, number>;
  dewPoint2m: Record<number, number>;
  isDay: Record<number, number>;
  precipitation: Record<number, number>;
  precipitationProbability: Record<number, number>;
  rain: Record<number, number>;
  relativeHumidity2m: Record<number, number>;
  showers: Record<number, number>;
  snowDepth: Record<number, number>;
  snowfall: Record<number, number>;
  surfacePressure: Record<number, number>;
  temperature2m: Record<number, number>;
  time: Date[];
  uvIndex: Record<number, number>;
  weatherCode: Record<number, number>;
  windDirection10m: Record<number, number>;
  windGusts10m: Record<number, number>;
  windSpeed10m: Record<number, number>;
}

type DailyForecast = {
  apparentTemperatureMax: Record<number, number>;
  apparentTemperatureMin: Record<number, number>;
  precipitationHours: Record<number, number>;
  precipitationProbabilityMax: Record<number, number>;
  precipitationSum: Record<number, number>;
  rainSum: Record<number, number>;
  showersSum: Record<number, number>;
  snowfallSum: Record<number, number>;
  sunrise: Record<number, number> | null;
  sunset: Record<number, number> | null;
  temperature2mMax: Record<number, number>;
  temperature2mMin: Record<number, number>;
  time: Date[];
  uvIndexClearSkyMax: Record<number, number>;
  uvIndexMax: Record<number, number>;
  weatherCode: Record<number, number>;
  windDirection10mDominant: Record<number, number>;
  windGusts10mMax: Record<number, number>;
  windSpeed10mMax: Record<number, number>;
}
type WeatherData = {
  current: CurrentCondition;
  hourly: HourlyForecast;
  daily: DailyForecast;
}

