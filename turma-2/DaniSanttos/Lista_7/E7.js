let rs = require('readline-sync')

let n = rs.questionInt('Digite um número de 1 a 100: ')

function numeroCerto(numero) {
    if (n === 50){
        return `Você acertou!`
    }else {
        return `Você errou...`
    }
}

console.log(numeroCerto(n))