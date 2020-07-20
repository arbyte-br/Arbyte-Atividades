/*

8. Faça um algoritmo que receba uma palavra e imprima cada caractere da palavra em
uma linha.
EX: usuário informou MAÇÃ
O algoritmo imprime:
M
A
Ç
Ã

*/

var rs = require('readline-sync');

var palavra = rs.question('Digite uma palavra: ');

// percorrer a palavra

var cont = 0; // sempre que precisar percorrer um Array, String.

while(cont < palavra.length){
    console.log(palavra.charAt(cont));  //charAt serve para pegar a letra de uma palavra em um determinado indice.
    cont++;
}