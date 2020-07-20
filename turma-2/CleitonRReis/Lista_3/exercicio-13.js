/*
13.Fazer um algoritmo que receba 5 números e mostra o produto dos ímpares e
a soma dos pares
EX: valores fornecidos 1,2,3,4,5
Impares -> 1 * 3 * 5 = 15
Pares -> 2 + 4 = 6
O programa imprime :
Produtos dos impares : 15
Soma dos pares : 6
*/

var rs = require('readline-sync');

var i = 0;
var soma = 0;
var produto = 1;

while (i < 5) {
    var num = rs.questionInt('Insira 5 números. Números ímpares você terá como resultado o produto dos mesmos e pares a soma deles: ');
    if (num % 2 == 0) {
        soma = soma + num;
    }else{
        produto = produto * num;
    }

    i++;
}

console.log(`Soma dos pares: ${soma}`);
console.log(`Produto dos ímpares: ${produto}`);