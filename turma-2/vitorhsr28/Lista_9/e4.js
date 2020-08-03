// (OBRIGATÓRIO) Faça um algoritmo que receba um número e diga se ele é primo ou
// não
// Utilize o pacote : https://www.npmjs.com/package/prime-number

const isPrime = require('prime-number')
const rs = require('readline-sync')

const numPrimo = rs.questionInt('Informe um numero para descobrir se ele é primo: ')

if (isPrime(numPrimo) === true) {
    console.log(`O numero ${numPrimo} é primo!`)
} else {
    console.log(`O numero ${numPrimo} não é primo!`)
}