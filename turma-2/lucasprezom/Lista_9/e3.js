// 3.(OBRIGATÓRIO)​ Faça um algoritmo que receba um número
// e diga se ele é par ou ímpar
// Utilize o pacote :  ​https://www.npmjs.com/package/is-odd

let rs = require ('readline-sync')
let isOdd = require('is-odd');

let numeroUser = rs.questionInt('Digite um número:\n')
    
    if (isOdd(numeroUser) === false) {
        console.log('O número é par')
    } else {
        console.log ('O número é impar')
    }
