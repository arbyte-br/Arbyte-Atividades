//4. (OBRIGATÓRIO) Faça um programa que recebe um número e imprima todos os
//números pares de 0 até o número inserido.Ex: usuário inseriu 8,O programa imprime
//0
//2
//4
//6
//8

let rs = require("readline-sync")

let contador = 0

let limite = rs.questionInt( "Digite um numero")
 
while (contador <= limite) {
 if (contador % 2 === 0 ){
    console.log( contador)
 }
 contador ++ 
}




