#!/usr/bin/env node

import { getArgs } from './helpers/args.js';
import { printError, printHelp, printSuccess } from './services/log.service.js';
import { saveKeyValue } from './services/storage.service.js';

const saveToken = async token => {
  try {
    await saveKeyValue('token', token);
    return printSuccess('Token is saved');
  } catch (error) {
    return printError(error.message);
  }
};

const initCli = () => {
  const args = getArgs(process.argv);

  if (args.h) {
    printHelp();
  }
  if (args.s) {
    // city
  }
  if (args.t) {
    return saveToken(args.t);
    // token
  }
  //weather
};
initCli();
