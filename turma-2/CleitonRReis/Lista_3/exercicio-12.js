/*
12. Fazer um algoritmo que recebe 15 números de entrada e calcule a média dos
números fornecidos.
*/

var rs = require('readline-sync');

var numeros = 0;

var i = 1;

var media = 0.00;

while(i <= 15){
    numeros = rs.questionInt('Insira 15 número para saber sua média: ');
    media = media + numeros;
    i++;
}
media = media / 15;
console.log(media.toFixed(2));