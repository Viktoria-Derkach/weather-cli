#!/usr/bin/env node

import { getArgs } from './helpers/args.js';
import { getWeather } from './services/api.service.js';
import { printError, printHelp, printSuccess, printWeather } from './services/log.service.js';
import { TOKEN_DICTIONARY, saveKeyValue } from './services/storage.service.js';

const saveToken = async token => {
  if (!token.length) {
    printError('No token');
    return;
  }
  try {
    await saveKeyValue(TOKEN_DICTIONARY.token, token);
    return printSuccess('Token is saved');
  } catch (error) {
    return printError(error.message);
  }
};

const saveCity = async city => {
  if (!city.length) {
    printError('No city');
    return;
  }
  try {
    await saveKeyValue(TOKEN_DICTIONARY.city, city);
    return printSuccess('City is saved');
  } catch (error) {
    return printError(error.message);
  }
};

const getForecast = async () => {
  try {
    const weather = await getWeather();
    printWeather(weather);
  } catch (e) {
    if (e?.response?.status === 404) {
      printError('Wrong city name');
    } else if (e?.response?.status === 401) {
      printError('Wrong token');
    } else {
      printError(e.message);
    }
  }
};

const initCli = async () => {
  const args = getArgs(process.argv);

  if (args.h) {
    printHelp();
    return;
  }
  if (args.s) {
    saveCity(args.s);
    return;
  }
  if (args.t) {
    return saveToken(args.t);
  }
  getForecast();
};
initCli();
