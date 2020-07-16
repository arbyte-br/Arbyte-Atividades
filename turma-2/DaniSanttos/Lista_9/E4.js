let rs = require('readline-sync')
let isPrime = require('prime-number')

let numero = rs.questionInt('Digite um número para saber se ele é primo ou não: ')

let ehPrimo = isPrime(numero)

if(ehPrimo === false){
    console.log(`O número ${numero} não é primo.`)
}else{
    console.log(`O número ${numero} é primo`)
}