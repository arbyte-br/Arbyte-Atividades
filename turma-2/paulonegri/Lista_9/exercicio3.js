/*Faça um algoritmo que receba um número e diga se ele é par ou
ímpar*/

const rs = require(`readline-sync`)
const numero = require('is-odd')

numero(rs.questionInt(`Digite um número: `)) == true 
? console.log(`Seu numero é ímpar`) 
: console.log(`Seu numero é par`)