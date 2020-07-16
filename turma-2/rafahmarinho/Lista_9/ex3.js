// (OBRIGATÓRIO) Faça um algoritmo que receba um número e diga se ele é par ou
// ímpar
// Utilize o pacote : https://www.npmjs.com/package/is-odd

let rs = require('readline-sync')

const isOdd = require('is-odd');

let numero = rs.questionInt('Digite um número:\n')

isOdd(numero) ? console.log(numero + ' é impar!') : console.log(numero + ' é par!') 

