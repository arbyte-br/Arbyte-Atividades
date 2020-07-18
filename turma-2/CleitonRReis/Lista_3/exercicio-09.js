/*
9. Faça um algoritmo que receba uma palavra e imprima ela ao contrário.
EX: usuário informou BANANA
Algoritmo imprime:
ANANAB
*/

var rs = require('readline-sync');

var palavra = rs.question('Por favor, insira uma palavra: ');

var cont = 0;

while(palavra){
    console.log(palavra.split('').reverse().join(''));
    cont--;
    break;
}