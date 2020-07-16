// (OBRIGATÓRIO) Faça um algoritmo que receba um número e diga se ele é primo ou
// não
// Utilize o pacote : https://www.npmjs.com/package/prime-number
let rs = require('readline-sync')
const isPrime = require('prime-number')

let numero = rs.questionInt('Digite um número:\n')

isPrime(numero) ? console.log(numero + ' é primo!') : console.log(numero + ' não é primo!') 
 