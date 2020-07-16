let rs = require('readline-sync')
const isPrime = require('prime-number')

function ehPrimo() {
    let numero = rs.questionInt('Digite um numero: ')
    if(isPrime(numero)) {
        return "PRIMO"
    } else {
        return "NÃO É PRIMO"
    }
}

console.log(ehPrimo())