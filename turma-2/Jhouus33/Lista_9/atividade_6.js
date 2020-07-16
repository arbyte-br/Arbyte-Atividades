// Escolha um programa que você já fez em atividades passadas e faça o output do
// terminal ficar colorido com o pacote CHALK: https://www.npmjs.com/package/chalk
const chalk = require('chalk');
const isOdd = require('is-odd');
let rs = require('readline-sync') 

let numero = rs.questionInt("Digite um número, vou adivinhar se é impar u par: \n")
 if(isOdd(numero) == true){
     console.log(chalk.black.bgYellow.bold('Impar'))
 }else if(numero == 0){
     console.log(chalk.underline('Ta me zuando né?!'))
 }else{
     console.log(chalk.rgb(59, 89, 152).bgWhite.bold('Par')); // Azul Facebook
 }

