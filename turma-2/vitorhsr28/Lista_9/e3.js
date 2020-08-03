// 3. (OBRIGATÓRIO) Faça um algoritmo que receba um número e diga se ele é par ou
// ímpar
// Utilize o pacote : https://www.npmjs.com/package/is-odd

const isOdd = require('is-odd');
const rs = require('readline-sync')

const number = rs.questionFloat('Informe um número para descobrir se ele é par ou impar: ')

if (isOdd(number) === true) {
    console.log(`O numero ${number} é impar.`)
} else {
    console.log(`O numero ${number} é par.`)
}