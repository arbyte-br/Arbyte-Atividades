/*
11. Escreva um programa que pergunta um número ao usuário, e mostra sua tabuada
completa (de 1 até 10).
EX.: 5
5x1 = 5, 5x2 = 10, 5x3=15, 5x4=20, 5x5=25, 5x6 = 30, 5x7 = 35, 5x8 = 40, 5x9 = 45,
5x10 = 50
*/

var rs = require('readline-sync');

var n1 = rs.questionInt('Insira um número para ver sua tabuada: ');

var i = 1;

var tabuada = 0;
 
console.log(`A tabuada de ${n1} é: `);

while(i <= 10){
     tabuada = n1 * i;
     console.log(`${n1} X ${i} = ${tabuada}`);
     i++;
}