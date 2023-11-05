import chalk from 'chalk';
import dedent from 'dedent-js';

const printError = error => {
  console.log(chalk.bgRed(' ERROR ') + ' ' + error);
};

const printSuccess = message => {
  console.log(chalk.bgGreen(' SUCCESS ') + ' ' + message);
};

const printHelp = () => {
  console.log(
    dedent`${chalk.bgCyan(' HELP ')}
    Without parameters - print weather
    -s [CITY] for setting the city
    -h for help
    -t [API_KEY] for saving the token
    `
  );
};
const printWeather = data => {
  console.log(
    dedent`${chalk.bgMagenta(' WEATHER ')}
    Weather in a city ${data.name}
    ${data.weather[0].main}: ${data.weather[0].description}
    Temperature: ${data.main.temp}
    Wind speed: ${data.wind.speed}
    `
  );
};

export { printError, printSuccess, printHelp, printWeather };
