let rs = require('readline-sync')

let firstnumber = rs.questionFloat("Digite um número:")
let secondnumber = rs.questionInt("Digite outro número:")

let contador = 0
let resultado =0

while (contador <secondnumber){
    resultado = resultado + firstnumber
    contador++
}

console.log("O resultado da multiplicação é: " + resultado)
