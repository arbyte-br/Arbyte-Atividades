//(OBRIGATÓRIO) Criar um algoritmo que realize a multiplicação de dois números
//maiores que zero SEM usar o operador de multiplicação (*)
let rs = require('readline-sync')


let primeiroNumero = rs.questionFloat('Digite um número: ') 
let segundoNumero = rs.questionInt('Digite outro número: ') 
let contador = 0
let resultado = 0

while(contador < segundoNumero) {
    resultado = resultado + primeiroNumero
    contador++
}
console.log("O resultado da multiplicação é: " + resultado)


