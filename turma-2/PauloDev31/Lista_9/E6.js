let rs = require('readline-sync')
let FasamIMC = require('fasam-imc-calc')
let chalk = require('chalk')


let peso = rs.questionFloat('Digite seu peso: \n')
let altura = rs.questionFloat('Digite sua altura: \n')

let imc = new FasamIMC(peso, altura);  
let resultado = imc.calc();
console.log(chalk.white.bgRed.bold(resultado))