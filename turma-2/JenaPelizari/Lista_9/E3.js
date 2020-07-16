/** Faça um algoritmo que receba um número e diga se ele é par ou
ímpar */

let rs = require('readline-sync')
let isOdd = require('is-odd');

let numero = rs.questionInt('Digite um número')

let verificador = isOdd(numero)

if (verificador === true) {
    console.log(`${numero} é impar!`)
} else {
    console.log(`${numero} é par`)
}