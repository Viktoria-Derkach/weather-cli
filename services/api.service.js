import https from 'https';
import { TOKEN_DICTIONARY, getKeyValue } from './storage.service.js';
import axios from 'axios';

const getIcon = icon => {
  switch (icon.slice(0, -1)) {
    case '01':
      return '☀️';
    case '02':
      return '🌤️';
    case '03':
      return '☁️';
    case '04':
      return '☁️';
    case '09':
      return '🌧️';
    case '10':
      return '🌦️';
    case '11':
      return '🌩️';
    case '13':
      return '❄️';
    case '50':
      return '🌫️';
  }
};

const getWeather = async city => {
  const token = process.env.TOKEN ?? (await getKeyValue(TOKEN_DICTIONARY.token));

  if (!token) {
    throw new Error('No api key, set it -t [API_KEY]');
  }
  if (!city) {
    throw new Error('No city, set it via command -s [CITY]');
  }
  const { data } = await axios.get('https://api.openweathermap.org/data/2.5/weather', {
    params: {
      q: city,
      appid: token,
      lang: 'ua',
      units: 'metric',
    }
  });

  return data;

  // // const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}`;
  // const url = new URL('https://api.openweathermap.org/data/2.5/weather');
  // url.searchParams.append('q', city);
  // url.searchParams.append('appid', token);
  // url.searchParams.append('lang', 'ua');
  // url.searchParams.append('units', 'metric');

  // https.get(url, response => {
  //   let res = '';
  //   response.on('data', chunk => {
  //     res += chunk;
  //   });
  //   response.on('end', () => {
  //     console.log(res);
  //   });
  //   response.on('error', error => {
  //     console.error(error);
  //   });
  // });
};
export { getWeather, getIcon };
