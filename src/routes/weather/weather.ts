export function wmo(weatherCode: number, day: number = 1) {
  switch (weatherCode) {
    case 0:
      return day
        ? { text: 'Clear sky', icon: '/icons/clear-day.svg' }
        : { text: 'Clear sky', icon: '/icons/clear-night.svg' };
    case 1:
      return day
        ? { text: 'Mostly clear', icon: '/icons/mostly-clear-day.svg' }
        : { text: 'Mostly clear', icon: '/icons/mostly-clear-night.svg' };
    case 2:
      return day
        ? { text: 'Partly cloudy', icon: '/icons/partly-cloudy-day.svg' }
        : { text: 'Partly cloudy', icon: '/icons/partly-cloudy-night.svg' };
    case 3:
      return day
        ? { text: 'Overcast', icon: '/icons/cloudy.svg' }
        : { text: 'Overcast', icon: '/icons/cloudy-night.svg' };
    case 45:
      return { text: 'Fog', icon: '/icons/fog.svg' };
    case 48:
      return { text: 'Rime fog', icon: '/icons/fog.svg' };
    case 51:
      return { text: 'Light drizzle', icon: '/icons/drizzle.svg' };
    case 53:
      return { text: 'Moderate drizzle', icon: '/icons/drizzle.svg' };
    case 55:
      return { text: 'Dense drizzle', icon: '/icons/drizzle.svg' };
    case 56:
      return { text: 'Light freezing drizzle', icon: '/icons/freezingdrizzle.svg' };
    case 57:
      return { text: 'Dense freezing drizzle', icon: '/icons/freezingdrizzle.svg' };
    case 61:
      return { text: 'Light rain', icon: '/icons/rain.svg' };
    case 63:
      return { text: 'Moderate rain', icon: '/icons/rain.svg' };
    case 65:
      return { text: 'Heavy rain', icon: '/icons/rain.svg' };
    case 66:
      return { text: 'Light freezing rain', icon: '/icons/freezingrain.svg' };
    case 67:
      return { text: 'Heavy freezing rain', icon: '/icons/freezingrain2.svg' };
    case 71:
      return { text: 'Light snow fall', icon: '/icons/snow2.svg' };
    case 72:
      return { text: 'Moderate snow fall', icon: '/icons/snow2.svg' };
    case 73:
      return { text: 'Heavy snow fall', icon: '/icons/snow2.svg' };
    case 77:
      return { text: 'Snow grains', icon: '/icons/snow2.svg' };
    case 80:
      return { text: 'Light rain showsers', icon: '/icons/rain.svg' };
    case 81:
      return { text: 'Moderate rain showsers', icon: '/icons/rain.svg' };
    case 82:
      return { text: 'Heavy rain showsers', icon: '/icons/rain.svg' };
    case 85:
      return { text: 'Light snow showers', icon: '/icons/snow2.svg' };
    case 86:
      return { text: 'Heavy snow showers', icon: '/icons/snow2.svg' };
    case 95:
      return { text: 'Thunderstorm', icon: '/icons/thunderstorm.svg' };
    case 96:
      return { text: 'Thunderstorm with light hail', icon: '/icons/thunderstorm-hail.svg' };
    case 97:
      return { text: 'Thunderstorm with heavy hail', icon: '/icons/thunderstorm-hail.svg' };
    default:
      return { text: 'No data', icon: '/icons/unknown.svg' };
  }
}