let rs = require('readline-sync')
let n1 = rs.questionInt('Digite um número: ')
let n2 = rs.questionInt('Digite outro número: ')

function somaDosNumeros (numeros){
    return `A soma dos dois números que você inseriu é igual a: ${n1 + n2}`
}

console.log(somaDosNumeros(n1, n2))
