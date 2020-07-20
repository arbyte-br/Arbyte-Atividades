const isPrime = require('prime-number')
const rs= require ('readline-sync')

const numero = rs.questionInt('Digite um numero e direi se ele e primo ou nao: ')
if(isPrime(numero)){
    console.log('O numero é primo')
} else {
    console.log('O numero não é primo')
}