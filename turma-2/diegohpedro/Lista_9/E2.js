
// (OBRIGATÓRIO) Faça um algoritmo que receba peso e altura do usuário e calcule o
// IMC.
// Para fazer o calculo do IMC utilize : https://www.npmjs.com/package/fasam-imc-calc

let rs = require('readline-sync')
const FasamImc = require('fasam-imc-calc');
const chalk = require('chalk');

let peso = rs.questionFloat('Insira seu peso: ')
let altura = rs.questionFloat('Insira sua altura: ')

const imc = new FasamImc(peso, altura);

console.log('Seu IMC é:' + chalk.blueBright(imc.calc()))




 
