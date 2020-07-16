// Faça um algoritmo que receba um número e diga se ele é par ou
// ímpar

let rs = require('readline-sync')
let isOdd = require('is-odd')

let num = rs.questionInt('Insira um número: ')

let verif = isOdd(num)

if (verif === false) {
    console.log('Esse número é par.')
} else {
    console.log('Esse número é impar')
}