let rs = require('readline-sync')
const FasamImc = require('fasam-imc-calc');
const chalk = require('chalk');

let peso = rs.questionFloat('Insira seu peso: ')
let altura = rs.questionFloat('Insira sua altura: ')

const imc = new FasamImc(peso, altura);

console.log('Seu IMC é:' + chalk.blueBright(imc.calc()))