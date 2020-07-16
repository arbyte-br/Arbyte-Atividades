
const rs = require('readline-sync');
const chalk = require('chalk');
const ageCalculator = require('age-calculator');
let {AgeFromDate} = require('age-calculator');

let ano = rs.questionInt('insira o ano de nascimento: ');
let mes = rs.questionInt('insira o mes de nascimento: ');
let dia = rs.questionInt('insira o dia de nascimento: ');

let ageFromDate = new AgeFromDate(new Date(ano, mes, dia)).age;
console.log(chalk.blue(`Voce Tem ${ageFromDate} Anos!`));
