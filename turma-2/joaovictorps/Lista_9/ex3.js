let rs = require('readline-sync')
const isOdd = require('is-odd')

function parImpar() {
    let numero = rs.questionInt('Digite um numero: ')
    if(isOdd(numero)) {
        return "IMPAR"
    } else {
        return "PAR"
    }
}

console.log(parImpar())