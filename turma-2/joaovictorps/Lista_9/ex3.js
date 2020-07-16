let rs = require('readline-sync')
const isOdd = require('is-odd')

function parImpar() {
    let numero = rs.questionInt('Digite um numero para saber se é PAR ou IMPAR: ')
    if(isOdd(numero)) {
        return `${numero} É IMPAR.`
    } else {
        return `${numero} É PAR.`
    }
}

console.log(parImpar())