/* // (OBRIGATÓRIO) ​Criar um algoritmo que realize a multiplicação de dois números maiores 
// que zero SEM usar o operador de multiplicação (*) */

let rs = require('readline-sync')

let primeiroNumero = rs.questionFloat('Digite um número: ') // 3

let segundoNumero = rs.questionInt('Digite outro número: ') // 2

let contador = 0
let resultado = 0

while(contador < segundoNumero) {
    resultado = resultado + primeiroNumero
    contador++
}
console.log("O resultado da multiplicação é: " + resultado) 

/* //* FOR
let rs = require('readline-sync')
let primeiroNumero = rs.questionFloat('Digite um número: ') 

let segundoNumero = rs.questionInt('Digite outro número: ') 

for (contador = resultado = 0 ; contador < segundoNumero ;contador++) {
 resultado = resultado+ primeiroNumero;   
}
console.log("O resultado da multiplicação é: " + resultado) */
