// (OBRIGATÓRIO) Escreva um programa para ler 3 valores inteiros (considere que não
//     serão lidos valores iguais) e escrevê-los em ordem crescente.

let rs = require('readline-sync')

let valor1 = rs.question('Digite um número: ')
let valor2 = rs.question('Digite um número: ')
let valor3 = rs.question('Digite um número: ')

let lista = [valor1, valor2, valor3].sort()

console.log(lista)
