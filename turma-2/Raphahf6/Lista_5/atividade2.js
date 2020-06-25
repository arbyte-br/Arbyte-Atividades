// (OBRIGATÓRIO) ​ Criar um algoritmo que realize a multiplicação de dois número maiores que zero SEM usar o operador de multiplicação (*)

let rs = require('readline-sync')

let primeiroNumero = rs.questionFloat('Digite o primeiro numero: ')
let segundoNumero = rs.questionFloat('Digite o segundo numero: ')

let resultado = 0

for(var i = 0; i < segundoNumero; i++){
    resultado = resultado + primeiroNumero
}
console.log('o resultado da multiplicação é: ' + resultado)