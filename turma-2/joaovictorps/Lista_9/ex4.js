let rs = require('readline-sync')
const isPrime = require('prime-number')

function ehPrimo() {
    let numero = rs.questionInt('Digite um numero para saber se é primo ou não: ')
    if(isPrime(numero)) {
        return `${numero} É PRIMO.`
    } else {
        return `${numero} NÃO É PRIMO.`
    }
}

console.log(ehPrimo())