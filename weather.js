#!/usr/bin/env node

import { getArgs } from './helpers/args.js';
import { getWeather } from './services/api.service.js';
import { printError, printHelp, printSuccess } from './services/log.service.js';
import { saveKeyValue } from './services/storage.service.js';

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

const getForecast = async () => {
  try {
    const weather = await getWeather('paris');
    console.log(weather);
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

const initCli = () => {
  const args = getArgs(process.argv);

  if (args.h) {
    printHelp();
  }
  if (args.s) {
    getWeather('paris');
  }
  if (args.t) {
    return saveToken(args.t);
  }
  getForecast();
  //weather
};
initCli();
