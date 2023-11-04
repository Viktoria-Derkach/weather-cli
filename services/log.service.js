import chalk from 'chalk';
import dedent from 'dedent-js';

const printError = error => {
  console.log(chalk.bgRed(' ERROR ') + ' ' + error);
};

const printSuccess = message => {
  console.log(chalk.bgGreen(' SUCCESS ') + ' ' + message);
};

const printHelp = error => {
  console.log(
    dedent`${chalk.bgCyan(' HELP ')}
    Without parameters - print weather
    -s [CITY] for setting the city
    -h for help
    -t [API_KEY] for saving the token
    `
  );
};

export { printError, printSuccess, printHelp };
