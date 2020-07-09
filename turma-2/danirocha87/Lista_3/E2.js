// Criar um algoritmo que realize a multiplicação de dois números
//maiores que zero SEM usar o operador de multiplicação (*)
let rs = require("readline-sync")

let primeironumero = rs.questionFloat("Digite um numero!")
let segundonumero  = rs.questionInt("Digite um outro numero")

let contador = 0
let resultado = 0

while(contador < segundonumero) {
      resultado = resultado + primeironumero
      contador++
}   console.log("O resultado da multiplicação é  " + resultado)
