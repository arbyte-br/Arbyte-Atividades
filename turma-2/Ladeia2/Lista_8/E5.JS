/* 5. Crie um programa que pergunte o nome do usuário e peça para este usuário digitar 3
números, o programa deve imprimir, no formato de um objeto, o nome e os números
informados */

let rs = require('readline-sync')

let numero = rs.questionInt('Digite um número: ')
let numero1 = rs.questionInt('Digite um número: ')
let numero2 = rs.questionInt('Digite um número: ')

let numeroUser = {
    numero: numero, numero1: numero1, numero2: numero2
}
console.log(numeroUser)