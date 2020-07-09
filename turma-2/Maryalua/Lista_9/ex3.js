//Faça um algoritmo que receba um número e diga se ele é par ou ímpar
//Utilize o pacote : ​ https://www.npmjs.com/package/is-odd

let rs = require('readline-sync');
const isOdd = require('is-odd')

let numero=rs.questionInt('Insira um número e descubra se ele é par ou ímpar');
console.log(isOdd(numero)) // Imprime true se o número for ímpar e false se o número for par