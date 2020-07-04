let rs = require('readline-sync')

let n1 = rs.questionInt('Digite um numero: ')
let n2 = rs.questionInt('Digite um numero: ')

function soma(n1, n2){
    return n1 + n2
}

let calculo = soma(n1, n2)
console.log(calculo)
