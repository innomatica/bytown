// import { error } from '@sveltejs/kit';
import { json, type RequestHandler } from '@sveltejs/kit';
import { fetchWeatherApi } from 'openmeteo';

export const GET: RequestHandler = async () => {
	//
	// https://open-meteo.com/en/docs
	//
	const params = {
		latitude: 45.4112,
		longitude: -75.6981,
		current: [
			'temperature_2m',
			'relative_humidity_2m',
			'apparent_temperature',
			'is_day',
			'precipitation',
			'rain',
			'showers',
			'snowfall',
			'weather_code',
			'surface_pressure',
			'wind_speed_10m',
			'wind_direction_10m',
			'wind_gusts_10m'
		],
		hourly: [
			'temperature_2m',
			'relative_humidity_2m',
			'dew_point_2m',
			'apparent_temperature',
			'precipitation_probability',
			'precipitation',
			'rain',
			'showers',
			'snowfall',
			'snow_depth',
			'weather_code',
			'surface_pressure',
			'wind_speed_10m',
			'wind_direction_10m',
			'wind_gusts_10m',
			'uv_index',
			'is_day'
		],
		daily: [
			'weather_code',
			'temperature_2m_max',
			'temperature_2m_min',
			'apparent_temperature_max',
			'apparent_temperature_min',
			'sunrise',
			'sunset',
			'uv_index_max',
			'uv_index_clear_sky_max',
			'precipitation_sum',
			'rain_sum',
			'showers_sum',
			'snowfall_sum',
			'precipitation_hours',
			'precipitation_probability_max',
			'wind_speed_10m_max',
			'wind_gusts_10m_max',
			'wind_direction_10m_dominant'
		],
		timezone: 'America/Toronto',
		forecast_days: 10
	};
	const url = 'https://api.open-meteo.com/v1/forecast';
	const responses = await fetchWeatherApi(url, params);

	// Helper function to form time ranges
	const range = (start: number, stop: number, step: number) =>
		Array.from({ length: (stop - start) / step }, (_, i) => start + i * step);

	// Process first location. Add a for-loop for multiple locations or weather models
	const response = responses[0];

	// Attributes for timezone and location
	// Do not apply offset: keep raw data as GMT
	// const utcOffsetSeconds = response.utcOffsetSeconds();
	const utcOffsetSeconds = 0;
	// const timezone = response.timezone();
	// console.log('timezone:', timezone);
	// const timezoneAbbreviation = response.timezoneAbbreviation();
	// const latitude = response.latitude();
	// const longitude = response.longitude();

	const current = response.current()!;
	const hourly = response.hourly()!;
	const daily = response.daily()!;

	// Note: The order of weather variables in the URL query and the indices below need to match!
	const weatherData = {
		current: {
			time: new Date((Number(current.time()) + utcOffsetSeconds) * 1000),
			temperature2m: current.variables(0)!.value(),
			relativeHumidity2m: current.variables(1)!.value(),
			apparentTemperature: current.variables(2)!.value(),
			isDay: current.variables(3)!.value(),
			precipitation: current.variables(4)!.value(),
			rain: current.variables(5)!.value(),
			showers: current.variables(6)!.value(),
			snowfall: current.variables(7)!.value(),
			weatherCode: current.variables(8)!.value(),
			surfacePressure: current.variables(9)!.value(),
			windSpeed10m: current.variables(10)!.value(),
			windDirection10m: current.variables(11)!.value(),
			windGusts10m: current.variables(12)!.value()
		},
		hourly: {
			time: range(Number(hourly.time()), Number(hourly.timeEnd()), hourly.interval()).map(
				(t) => new Date((t + utcOffsetSeconds) * 1000)
			),
			temperature2m: hourly.variables(0)!.valuesArray()!,
			relativeHumidity2m: hourly.variables(1)!.valuesArray()!,
			dewPoint2m: hourly.variables(2)!.valuesArray()!,
			apparentTemperature: hourly.variables(3)!.valuesArray()!,
			precipitationProbability: hourly.variables(4)!.valuesArray()!,
			precipitation: hourly.variables(5)!.valuesArray()!,
			rain: hourly.variables(6)!.valuesArray()!,
			showers: hourly.variables(7)!.valuesArray()!,
			snowfall: hourly.variables(8)!.valuesArray()!,
			snowDepth: hourly.variables(9)!.valuesArray()!,
			weatherCode: hourly.variables(10)!.valuesArray()!,
			surfacePressure: hourly.variables(11)!.valuesArray()!,
			windSpeed10m: hourly.variables(12)!.valuesArray()!,
			windDirection10m: hourly.variables(13)!.valuesArray()!,
			windGusts10m: hourly.variables(14)!.valuesArray()!,
			uvIndex: hourly.variables(15)!.valuesArray()!,
			isDay: hourly.variables(16)!.valuesArray()!
		},
		daily: {
			time: range(Number(daily.time()), Number(daily.timeEnd()), daily.interval()).map(
				(t) => new Date((t + utcOffsetSeconds) * 1000)
			),
			weatherCode: daily.variables(0)!.valuesArray()!,
			temperature2mMax: daily.variables(1)!.valuesArray()!,
			temperature2mMin: daily.variables(2)!.valuesArray()!,
			apparentTemperatureMax: daily.variables(3)!.valuesArray()!,
			apparentTemperatureMin: daily.variables(4)!.valuesArray()!,
			sunrise: daily.variables(5)!.valuesArray()!,
			sunset: daily.variables(6)!.valuesArray()!,
			uvIndexMax: daily.variables(7)!.valuesArray()!,
			uvIndexClearSkyMax: daily.variables(8)!.valuesArray()!,
			precipitationSum: daily.variables(9)!.valuesArray()!,
			rainSum: daily.variables(10)!.valuesArray()!,
			showersSum: daily.variables(11)!.valuesArray()!,
			snowfallSum: daily.variables(12)!.valuesArray()!,
			precipitationHours: daily.variables(13)!.valuesArray()!,
			precipitationProbabilityMax: daily.variables(14)!.valuesArray()!,
			windSpeed10mMax: daily.variables(15)!.valuesArray()!,
			windGusts10mMax: daily.variables(16)!.valuesArray()!,
			windDirection10mDominant: daily.variables(17)!.valuesArray()!
		}
	};

	//
	// current
	//
	// console.log(weatherData.current);
	//
	// hourly
	//
	// for (let i = 0; i < weatherData.hourly.time.length; i++) {
	// console.log(
	// weatherData.hourly.time[i].toISOString()
	//     weatherData.hourly.temperature2m[i],
	//     weatherData.hourly.relativeHumidity2m[i],
	//     weatherData.hourly.dewPoint2m[i],
	//     weatherData.hourly.apparentTemperature[i],
	//     weatherData.hourly.precipitationProbability[i],
	//     weatherData.hourly.precipitation[i],
	//     weatherData.hourly.rain[i],
	//     weatherData.hourly.showers[i],
	//     weatherData.hourly.snowfall[i],
	//     weatherData.hourly.snowDepth[i],
	//     weatherData.hourly.weatherCode[i],
	//     weatherData.hourly.surfacePressure[i],
	//     weatherData.hourly.windSpeed10m[i],
	//     weatherData.hourly.windDirection10m[i],
	//     weatherData.hourly.windGusts10m[i],
	//     weatherData.hourly.uvIndex[i],
	//     weatherData.hourly.isDay[i]
	// );
	// }
	//
	// daily
	//
	// for (let i = 0; i < weatherData.daily.time.length; i++) {
	// console.log(
	// weatherData.daily.time[i].toISOString(),
	// weatherData.daily.weatherCode[i]
	//     weatherData.daily.temperature2mMax[i],
	//     weatherData.daily.temperature2mMin[i],
	//     weatherData.daily.apparentTemperatureMax[i],
	//     weatherData.daily.apparentTemperatureMin[i],
	//     weatherData.daily.sunrise[i],
	//     weatherData.daily.sunset[i],
	//     weatherData.daily.uvIndexMax[i],
	//     weatherData.daily.uvIndexClearSkyMax[i],
	//     weatherData.daily.precipitationSum[i],
	//     weatherData.daily.rainSum[i],
	//     weatherData.daily.showersSum[i],
	//     weatherData.daily.snowfallSum[i],
	//     weatherData.daily.precipitationHours[i],
	//     weatherData.daily.precipitationProbabilityMax[i],
	//     weatherData.daily.windSpeed10mMax[i],
	//     weatherData.daily.windGusts10mMax[i],
	//     weatherData.daily.windDirection10mDominant[i]
	// );
	// }
	return json(weatherData);
};
