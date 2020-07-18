/*
2. Faça um programa que leia dois números, o primeiro é o valor inicial de um contador, e
o
segundo é o valor final do contador (verifique se o valor inicial fornecido é inferior ao
valor final). Usando o comando For, escreva na tela uma contagem que comece no
primeiro número lido, escreva os números seguintes colocando apenas um número em
cada nova linha da tela, até chegar ao valor final indicado.
Entre com o Valor Inicial: 11
Entre com o Valor Final: 13
Contagem:
11
12
13
Final da contagem...
*/

var rs = require('readline-sync');

var inicio = rs.questionInt('\nInsira um número para iniciar a contagem: ');

var fim = rs.questionInt('\nInforme onde termina a contagem: ');

console.log('\nIniciando contagem...\n')

if (inicio < fim) {
    //Contagem crescente
    for (var i = inicio; i <= fim; i++) {
        console.log(i);
    }
} else {
    //Contagem decrescente
    for (var i = inicio; i >= fim; i--) {
        console.log(i);
    }
}
('\n')
console.log('\nFim da contagem!\n')