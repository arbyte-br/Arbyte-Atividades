/*Criar um algoritmo que realize a multiplicação de dois números
maiores que zero SEM usar o operador de multiplicação (*) */

let readlineSync = require('readline-sync');
let numero1 = readlineSync.questionInt('Digite o primeiro numero: ')
let numero2 = readlineSync.questionInt('Digite o segundo numero: ')
let resultado = 0;
let contador = 1;

while(contador <= numero1){
    resultado = resultado + numero2;
    contador ++;

}
console.log(`O resuldado da multiplicao de ${numero1} e ${numero2} é ${resultado}.`);

