/* 6. (OBRIGATÓRIO) Faça um algoritmo que receba uma palavra e imprima ela ao
contrário.
EX: usuário informou BANANA
Algoritmo imprime:
ANANAB */
/* 
let palavra = 'BANANA'
let palavraFinal = ''

for (let i = 0; i < palavra.length; i++){

    palavraFinal = palavra[i] + palavraFinal

}

console.log(palavraFinal) */

var rs = require('readline-sync');

var palavra = rs.question('Por favor, insira uma palavra: ');

var cont = 0;

while(palavra){
    console.log(palavra.split('').reverse().join(''));
    cont--;
    break;
}



