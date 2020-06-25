/*(OBRIGATÓRIO) Faça um programa que leia dois números, o primeiro é o valor inicial
de um contador, e o segundo é o valor final do contador (verifique se o valor inicial
fornecido é inferior ao
valor final). Usando o comando For, escreva na tela uma contagem que comece no
primeiro número lido, escreva os números seguintes colocando apenas um número em
cada nova linha da tela, até chegar ao valor final indicado.
Entre com o Valor Inicial: 11
Entre com o Valor Final: 13
Contagem:
11
12
13
Final da contagem*/
let readlineSync = require('readline-sync');
let numero1 = readlineSync.questionInt('Insira o valor inicial: ');
let numero2 = readlineSync.questionInt('Insira o valor final: ');
for(var i = numero1; i <= numero2; i++){
    console.log(i);
}
