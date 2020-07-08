let rs = require('readline-sync')

function pegaNumero(numero) {
    numero = rs.questionInt('Digite um número: \n')
    return numero
}

function potenciacao(n1, n2) {
    let calculo = n1**n2
    return calculo
}
console.log('=======NUMERO BASE=======')
let n1 = pegaNumero(1)
console.log('=======NUMERO POTENCIA=======')
let n2 = pegaNumero(2)

console.log(potenciacao(n1, n2))