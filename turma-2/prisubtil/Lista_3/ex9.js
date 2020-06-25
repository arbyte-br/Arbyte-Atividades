/*Faça um algoritmo que receba uma palavra e imprima cada caractere da palavra em uma linha. 
EX: usuário informou MAÇÃ O algoritmo imprime:  
M 
A 
Ç 
Ã */
let readlineSync = require('readline-sync');
let palavra = readlineSync.question('Digite uma palavra: ');
let tamanhoPalavra = palavra.length;

for(let i = 0; i<= tamanhoPalavra; i++){
    console.log(palavra.charAt(i));
}