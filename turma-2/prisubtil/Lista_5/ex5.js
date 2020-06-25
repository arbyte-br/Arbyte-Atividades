/*Fazer um programa que calcule e imprima o fatorial de um número fornecido pelo
usuário, usando o comando For.. Perguntar ao usuário se ele deseja calcular o fatorial
de outro número e repetir a execução do programa tantas vezes quantas o usuário
indicar.*/


let readlineSync = require('readline-sync');
let numero = readlineSync.questionInt('Digite um numero para verificar seu fatorial: ');
let i = numero;
let fatorial = 1;

for(i = numero; i > 0; i--){
fatorial = fatorial*i;
}
console.log(`O fatorial de ${numero} é ${fatorial}.`);

