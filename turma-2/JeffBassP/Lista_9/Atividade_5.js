let ageCalculator = require('age-calculator');
let rs = require('readline-sync');
let chalk = require('chalk');

let dateNasc = rs.question('Digite sua data de nascimento no padrao AAAA/MM/DD: ');

let ageFromString = new ageCalculator.AgeFromDateString(dateNasc).age;



console.log(chalk.bgYellow.black(ageFromString));


