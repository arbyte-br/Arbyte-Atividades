/*
5. Crie um programa que peça o usuário n números e, quando o usuário digitar -1, imprima
o maior e o menor, sem levar em consideração o -1
*/

var rs = require('readline-sync');

var numero = rs.questionInt('Insira qualquer número: ');

var i = 0;
var maior = 1;
var menor = 0;

while(numero > 0){
    numero = rs.questionInt('Insira qualquer número: ');
    if(numero > 0){
       maior = numero + 1;
    }else{
       menor = numero - 1;
    }
    i++;
}
console.log(maior);
console.log(menor);