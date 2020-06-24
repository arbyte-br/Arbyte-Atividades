let rs = require("readline-sync")

let numero1 = rs.questionInt("Digite um numero?\n")
let numero2 = rs.questionInt("Digite outro numero?\n")

let contador = 0
let resultado = 0

while(contador !== numero2) {
    resultado = resultado + numero1
    contador = contador + 1
}

console.log("=========================================")
console.log("O resultado da multipicação é: " + resultado)
console.log("=========================================")