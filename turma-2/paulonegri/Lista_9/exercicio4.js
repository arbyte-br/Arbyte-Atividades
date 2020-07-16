/*Faça um algoritmo que receba um número e diga se ele é primo ou
não*/

const rs = require(`readline-sync`)
const ehPrimo = require('prime-number')
 
ehPrimo(rs.questionInt(`Digite um número: `)) == true 
? console.log(`Seu numero é primo`) 
: console.log(`Seu numero nao é primo`)




