/*Faça um algoritmo que receba um número e imprima todos seus divisores. 
EX : usuário informou 21 O algoritmo imprime : 1 3 7 21 
DICA: Você pode precisar usar a operação de módulo (a%b) */

let readlineSync = require('readline-sync');
let numero = readlineSync.question('Digite um numero para visualizar seus divisores: ');

contador = 1;
for(contador=1; contador<= numero; contador++){
    if(numero%contador == 0){
        console.log(contador);
    }
}

