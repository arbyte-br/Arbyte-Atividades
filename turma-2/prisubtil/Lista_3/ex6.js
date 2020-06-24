/*Faça um algoritmo que receba uma palavra e imprima ela ao
contrário.
EX: usuário informou BANANA
Algoritmo imprime:
ANANAB*/


let readlineSync = require('readline-sync');
let palavra = readlineSync.question('Digite uma palavra: ');
function invertePalavra(palavra){
    return palavra.split('').reverse().join('');
}
console.log(invertePalavra(palavra));
