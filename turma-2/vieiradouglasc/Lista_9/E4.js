// Faça um algoritmo que receba um número e diga se ele é primo ou
// não

let rs = require('readline-sync')
let isPrime = require('prime-number')

let num = rs.questionInt('Insira um número para saber se é primo ou não: ')

let verif = isPrime(num)

if (verif === true) {
    console.log('Esse número é primo.')
} else {
    console.log('Esse número não é primo')
}