/*Faça um programa que leia o valor de um produto X e leia a quantidade de reais
de um cofrinho que contenha:
a. N moedas de 1 real;
b. N moedas de 50 centavos;
c. N moedas de 25 centavos;
d. N moedas de 10 centavos;
e. N moedas de 5 centavos;
f. N moedas de 1 centavos.
O programa deverá verificar se o total de reais que contém no cofrinho é o
bastante para compra o produto X e imprimir se possui ou não valor suficiente*/

let rs = require(`readline-sync`)
let produto = rs.question(`Qual o valor do produto que voce deseja comprar?\n`)
let umReal = 5
let cinquentaCentavos = 5
let vinteEcincoCentavos = 5
let dezCentavos = 5
let cincoCentavos = 5
let umCentavo = 5
let cofrinho = umReal + cinquentaCentavos + vinteEcincoCentavos + dezCentavos + cincoCentavos + umCentavo

cofrinho > produto ? console.log(`Voce possui dinheiro suficiente!`)
: console.log(`Voce nao possui dinheiro suficiente!`)