const rs= require ('readline-sync')
const chalk = require('chalk');
const FasamImc = require('fasam-imc-calc');
const peso = rs.questionInt('Digite seu peso: ')
const altura = rs.questionInt('Digite sua altura: ')
const imc = new FasamImc(peso, altura); // peso, altura
 
console.log(chalk.blue.bgWhiteBright.bold('Seu IMC é ' + imc.calc()))