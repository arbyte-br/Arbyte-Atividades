let rs = require('readline-sync')

let n1 = rs.questionInt('Digite um número: ')
let n2 = rs.questionInt('Digite outro número:')

function qualOMaior (numero){
    if (n1 > n2){
        return `${n1} é o maior número que você escolheu.`
    }else{
        return `${n2} é o maior número que você escolheu.`
    }
}

console.log(qualOMaior(n1, n2))