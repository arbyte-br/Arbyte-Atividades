let isPrimo = require('prime-number')
let rs = require('readline-sync')

let numero = rs.questionInt('Digite um numero para verificar se e primo: ')

if (isPrimo(numero)){
    return console.log("Primo")
}else{
    return console.log("Nao e primo")
}