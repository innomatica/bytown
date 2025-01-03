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

type GisElement = {
  name: string;
  url: string;
  minZoom?: number;
};

type Link = {
  title: string;
  url: string;
  logo: string;
};

type WeatherServer = {
  url: string;
  logo: string;
};

type WeatherEvent = {
  type: string | null;
  priority: string | null;
  description: string | null;
};

type Wind = {
  rank?: string | undefined;
  speed: number;
  gust: number;
  direction: string | undefined;
  bearing?: number;
};

type CurrentCondition = {
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

type DailyForecast = {
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

type HourlyForecast = {
  dateTime: Date;
  condition: string | undefined;
  iconCode: string | undefined;
  temperature: number;
  lop: number;
  humidex: number;
  wind: Wind;
};

type Weather = {
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
