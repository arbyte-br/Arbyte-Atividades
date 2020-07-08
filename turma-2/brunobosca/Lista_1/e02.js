let rs = require('readline-sync')

let numero = rs.questionInt('Digite um número e saiba se ele é par ou ímpar: ')

if (numero % 2 === 0) {
    console.log('O número de você digitou é par! ')
} else {
    console.log('O número que você digitou é ímpar! ')
} 