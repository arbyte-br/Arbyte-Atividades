let rs= require('readline-sync')

function valorAbsoluto(numero) {
    return Math.abs(numero)
}

let numero = rs.questionFloat('Digite um número para ver o valor absoluto dele: \n')

console.log(valorAbsoluto(numero))