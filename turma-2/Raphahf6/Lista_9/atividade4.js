const rs = require('readline-sync')
const insPrime = require('prime-number')

let numero = rs.questionInt('Digite um numero: ')


if(insPrime(numero) == true){
    console.log(`O numero ${numero} é primo`)
} else {
    console.log(`O numero ${numero} não é primo`)
}