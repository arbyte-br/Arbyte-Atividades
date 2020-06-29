/* Faça um programa que leia o valor de um produto X e leia a quantidade de reais
de um cofrinho que contenha:
a. N moedas de 1 real;
b. N moedas de 50 centavos;
c. N moedas de 25 centavos;
d. N moedas de 10 centavos;
e. N moedas de 5 centavos;
f. N moedas de 1 centavos.
O programa deverá verificar se o total de reais que contém no cofrinho é o
bastante para compra o produto X e imprimir se possui ou não valor suficiente */

// Variável onde chamamos o 'readline-sync'.
var readline = require('readline-sync')

// Variável onde perguntamos o valor do produto para o usuário.
var produto = readline.questionInt('Qual o valor do produto que você deseja comprar? ')

// Aqui perguntamos ao usuário quantas moedas ele possui de cada e armazenamos nas variáveis 'real', 'cent50', 'cent25', 'cent10', 'cent5' e 'cent1'.
// Na própria variável iremos fazer a multiplicação (*) para saber o valor exato, quando o usuário colocar a quantidade de moedas
// a variável ira multiplicar (*) pelo valor da moeda, exemplo: Na moeda de 1 real ira multiplicar (*) a quantidade por 1.
var real = readline.questionInt('Quantas moedas de 1 real você tem? ') * 1
var cent50 = readline.questionInt('Quantas moedas de 50 centavos você tem? ') * 0.50
var cent25 = readline.questionInt('Quantas moedas de 25 centavos você tem? ') * 0.25
var cent10 = readline.questionInt('Quantas moedas de 10 centavos você tem? ') * 0.10
var cent5 = readline.questionInt('Quantas moedas de 5 centavos você tem? ') * 0.5
var cent1 = readline.questionInt('Quantas moedas de 1 centavo você tem? ') * 0.1

// Após obtermos a quantidade e os valores das moedas é hora de fazermos nosso cofrinho, para isso basta somar os valores das moedas.
// Criamos a variável 'cofrinho' e, dentro dela fazemos a soma das variáveis das moedas, assim temos o total.
var cofrinho = real + cent50 + cent25 + cent10 + cent5 + cent1

// Condição, se o valor da variável 'cofrinho' for maior ou igual (>=) a variável 'produto' iremos imprimir:
// 'Você possui valor suficiente para comprar o produto'.
if (cofrinho >= produto) {
    console.log('Você possui valor suficiente para comprar o produto!')
}
// Caso a condição de IF não seja atendida, iremos para a else e imprimir:
// 'Você não possui valor suficiente para comprar o produto'.
else {
    console.log('Você não possui valor suficiente para comprar o produto.')
}