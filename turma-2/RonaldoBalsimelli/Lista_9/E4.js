/* 4. (OBRIGATÓRIO) Faça um algoritmo que receba um número e diga se ele é primo ou
não
Utilize o pacote : https://www.npmjs.com/package/prime-number */

let rs = require('readline-sync')
let isPrime = require('prime-number')
let chalk = require('chalk')

let numero = rs.questionInt (chalk.magentaBright.bold ('Digite um número entre 1 e 1000: \n'))

let primo = isPrime(numero)

if (primo === false) {
    console.log (chalk.redBright.bold (`O número ${numero} não é primo.`))
}
else {
    console.log (chalk.greenBright.bold (`O número ${numero} é primo`))
} 