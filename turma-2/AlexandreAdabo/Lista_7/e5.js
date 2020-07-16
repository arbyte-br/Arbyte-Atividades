let rs = require('readline-sync')

let numero1 = rs.questionFloat('Digite o primeiro numero: ')
let numero2 = rs.questionFloat('Digite o segundo numero: ')

function soma(numero1, numero2){
    return numero1 + numero2
 }
 console.log(soma(numero1, numero2))