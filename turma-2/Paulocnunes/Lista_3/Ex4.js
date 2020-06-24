// (OBRIGATÓRIO) Faça um programa que recebe um número e imprima todos os
// números pares de 0 até o número inserido. Ex: usuário inseriu 8
// O programa imprime 0 2 4 6 8

let rs = require('readline-sync')

let numeroUsuario = rs.questionInt('Digite um numero: ')
let limite = numeroUsuario
let contador = 1

while (contador <= limite) {

    if (contador % 2 == 0) {
        console.log('O numero ' + contador + ' é PAR!')
    } 
    contador++
}