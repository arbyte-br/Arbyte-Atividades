/* Faça um programa que recebe um número e imprima todos os
números pares de 0 até o número inserido.
Ex: usuário inseriu 8
O programa imprime
0
2
4
6
8*/
let readlineSync = require('readline-sync');
let numero = readlineSync.questionInt('Digite um numero: ')
let contador = 0;
while(contador <= numero){
    if(contador%2 == 0){
        console.log(contador)
    }
   contador++;
    
}
