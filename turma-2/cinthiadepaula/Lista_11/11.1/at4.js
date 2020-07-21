const readline = require('readline-sync');

let graus = readline.question('Digite os Graus em Fahrenheint: ');

const toCelsius = (graus) => ((5 / 9) * (graus - 32));

console.log(`The Temperature is ${toCelsius(graus)} Celsius`);