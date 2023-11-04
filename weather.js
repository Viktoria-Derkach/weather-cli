#!/usr/bin/env node

import { getArgs } from './helpers/args.js';

const initCli = () => {
  const args = getArgs(process.argv);
  console.log(args);
  if (args.h) {
    // help
  }
  if (args.s) {
    // city
  }
  if (args.t) {
    // token
  }
  //weather
};
initCli();
