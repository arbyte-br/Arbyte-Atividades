let imc = require('fasam-imc-calc');
let rs = require('readline-sync');
let chalk = require('chalk');

let calcImc = new imc();

let peso = rs.questionInt('Digite seu peso: ');
let altura = rs.questionFloat('Digite sua altura: ');
console.log(peso);
console.log(altura);
let resultImc = calcImc.calc(peso, altura);

//console.log(chalk.bgGreen.black(resultImc));

console.log(chalk.blackBright.bgWhite(resultImc));