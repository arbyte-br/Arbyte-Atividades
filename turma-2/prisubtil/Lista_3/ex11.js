/*Escreva um programa que pergunta um número ao usuário, 
e mostra sua tabuada completa (de 1 até 10).
 EX.: 5 5x1 = 5, 5x2 = 10, 5x3=15, 5x4=20, 5x5=25, 5x6 = 30, 5x7 = 35, 5x8 = 40, 5x9 = 45, 5x10 = 50 */

let readlineSync = require('readline-sync');
let numero = readlineSync.question('Digite um numero para visualizar sua tabuada: ');
contador = 1;
for(contador = 1; contador <= 10; contador++){
    
    console.log(`${numero}X${contador}=${numero*contador}`);


}
