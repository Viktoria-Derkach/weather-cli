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

const initCli = () => {
  const args = getArgs(process.argv);
  console.log(process.env);

  if (args.h) {
    printHelp();
  }
  if (args.s) {
    getWeather('paris');
  }
  if (args.t) {
    return saveToken(args.t);
  }
  getWeather('paris');
  //weather
};
initCli();
