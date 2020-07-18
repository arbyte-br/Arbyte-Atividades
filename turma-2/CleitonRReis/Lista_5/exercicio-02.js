/*
2. (OBRIGATÓRIO) Escreva um programa que passe por todos os números de 1 a 50 e
para cada um deles imprima na tela se o número é par ou ímpar. Caso o número
também seja primo, o programa deve dizer que ele é primo. (um número primo é um
número que só é divisível por ele mesmo e por 1). Dica: Neste exercício você pode
precisar de ajuda do operador MÓDULO (%). Você também pode precisar criar mais de
um loop.
EX.:
1 ÍMPAR PRIMO
2 PAR PRIMO
3 ÍMPAR PRIMO
4 PAR
5 ÍMPAR PRIMO
6 PAR
7 ÍMPAR PRIMO
8 PAR
9 ÍMPAR
10 PAR
*/

var rs = require('readline-sync');
var numero = rs.questionInt('\nInsira o número 50 para ver os ímpares, pares e primos: ');
var i = 1;
var cont = 2;
var ehPrimo = true;
while (i <= numero) {
    while (cont < i) {
        if (i % cont == 0) {
            ehPrimo = false;
            break;
        }else {
            ehPrimo = true;
        }
        cont++;
    }
    if (i % 2 == 0){
        if (ehPrimo) {
            console.log(`${i} é par e primo`);
        } else {
            console.log(`${i} par`);
        }
    } else {
        if (ehPrimo) {
            console.log(`${i} eh impar e primo`); 
        } else {
            console.log(`${i} impar`);
        }
    }
    ehPrimo = true
    cont = 2
    i++; 
}var rs = require('readline-sync');
var numero = rs.questionInt('\nInsira o número 50 para ver os ímpares, pares e primos: ');
var i = 1;
var cont = 2;
var ehPrimo = true;
while (i <= numero) {
    while (cont < i) {
        if (i % cont == 0) {
            ehPrimo = false;
            break;
        }else {
            ehPrimo = true;
        }
        cont++;
    }
    if (i % 2 == 0){
        if (ehPrimo) {
            console.log(`${i} é par e primo`);
        } else {
            console.log(`${i} par`);
        }
    } else {
        if (ehPrimo) {
            console.log(`${i} eh impar e primo`); 
        } else {
            console.log(`${i} impar`);
        }
    }
    ehPrimo = true
    cont = 2
    i++; 
}