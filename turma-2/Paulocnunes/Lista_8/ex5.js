//Crie um programa que pergunte o nome do usuário e peça para este usuário digitar 3 números, o programa deve imprimir, no formato de um objeto, o nome e os números informados

let rs = require('readline-sync')

let usuario = {
nome: rs.questionInt('Qual seu nome? '), 
numero1: rs.questionInt('Digite um número: '), 
numero2: rs.questionInt('Digite outro número: '), 
numero3: rs.questionInt('Digite mais um número: ')
}

console.log(usuario)