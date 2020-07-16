/* 3. (OBRIGATÓRIO) Faça um algoritmo que receba um número e diga se ele é par ou
ímpar
Utilize o pacote : https://www.npmjs.com/package/is-odd */

let rs = require ('readline-sync')
let isOdd = require('is-odd')
let chalk = require('chalk')

let numero = rs.questionInt (chalk.yellowBright.bgGray.bold('Por favor insira um número: \n'))

if (numero % 2 == 0){
    isOdd(0)
    console.log (chalk.redBright.bold (`${numero}  Número par`))
}

else {
    isOdd(1)
    console.log (chalk.greenBright.bold (`${numero}  Número ímpar`))
}

 