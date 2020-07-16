// 6. Escolha um programa que você já fez em atividades passadas 
// e faça o output do terminal ficar colorido com o pacote CHALK: ​https://www.npmjs.com/package/chalk

let rs = require ('readline-sync')
const isPrime = require('prime-number')
const chalk = require('chalk');
 
let numeroUser = rs.questionInt('Digite um número:\n')
    
    if (isPrime(numeroUser) === true) {
        console.log(chalk.blue.bgWhite.bold('O número é primo!'))
    } else {
        console.log (chalk.red.bgWhite.bold('O número não é primo!'))
    }