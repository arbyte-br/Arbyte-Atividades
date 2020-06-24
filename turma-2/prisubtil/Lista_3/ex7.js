/*Faça um programa que calcule a potência (potenciação) de um número.  
Para isso ele deve receber dois números de entrada: o primeiro número é a base da 
 potência, o segundo número será a potência. 
 
EX: usuário inseriu 2 para base e 4 para potência. O programa imprime :  16 Lembrando: 2​4 ​= 2*2*2*2 */


let readlineSync = require('readline-sync');
let base = readlineSync.questionInt('Digite um numero(base da potencia): ');
let expoente = readlineSync.questionInt('Digite um numero(expoente): ');
let contador=0;
let potencia = 1;
while(contador != expoente){
    potencia = potencia*base;
    contador++;
}
console.log(`O resultado de ${base} elevado a ${expoente} é ${potencia}.`)