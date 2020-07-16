/** Faça um algoritmo que receba um número e diga se ele é primo ou
não */

let rs = require('readline-sync')
let isPrime = require('prime-number')

let numero = rs.questionInt('Digite um número')

let verificador = isPrime(numero)

if (verificador === true) {
    console.log(`${numero} é primo!`)
} else {
    console.log(`${numero} não é primo`)
}