//Escreva um programa para ler 3 valores inteiros (considere que não
//serão lidos valores iguais) e escrevê-los em ordem crescente.
    
let rs = require("readline-sync")

let lista = []

let numero1 = rs.question("Digite um número:")
lista.push(numero1)

let numero2 = rs.question("Digite outro número:")
lista.push(numero2)

let numero3 = rs.question("Digite mais número:")
lista.push(numero3)

console.log(lista.sort())