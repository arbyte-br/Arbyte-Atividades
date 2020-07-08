// (OBRIGATÓRIO) Escreva um programa para ler 3 valores inteiros (considere que não
//     serão lidos valores iguais) e escrevê-los em ordem crescente
let rs = require('readline-sync')

let numeros = []

let numero1 = rs.questionInt('Digite um numero: ')
numeros.push(numero1)

let numero2 = rs.questionInt('Digite um numero: ')
numeros.push(numero2)

let numero3 = rs.questionInt('Digite um numero: ')
numeros.push(numero3)

console.log(numeros.sort())
