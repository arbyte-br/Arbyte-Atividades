let rs = require('readline-sync')

function pegaNumero(numero) {
    numero = rs.questionInt('Digite um número: ')
    return numero
}

function numeroMaior(n1 = 0, n2 = 0) {
    if (n2 < n1) {
        return `${n2} é o menor número.`
    } else if (n1 < n2) {
        return `${n1} é o menor número.`
    } else {
        return `Os dois números são iguais.`
    }
}

let n1 = pegaNumero(1)
let n2 = pegaNumero(2)

console.log(numeroMaior(n1, n2))
