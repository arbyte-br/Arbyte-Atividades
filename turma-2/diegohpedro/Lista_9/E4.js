// (OBRIGATÓRIO) Faça um algoritmo que receba um número e diga se ele é primo ou
// não
// Utilize o pacote

let rs = require ('readline-sync')
const isPrime = require('prime-number')

let numero = rs.questionInt('Insira um numero: ')
let ehPrimo = isPrime(numero)

if(ehPrimo === false){
    console.log(`${numero} não é primo!`)
}
else {
    console.log(`${numero} é primo!`)
}