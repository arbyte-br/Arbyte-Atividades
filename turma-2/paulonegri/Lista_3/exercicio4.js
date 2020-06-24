//Faça um programa que recebe um número e imprima todos os números pares de 0 até o número inserido.
//Ex: usuário inseriu​ 8O programa imprime02468

let rs = require("readline-sync")
let numero = rs.questionInt("Digite um número inteiro")
let contador = 0
console.log(contador)
while(contador < numero -1){
    contador = contador + 2
    console.log(contador)
    
}