/* (OBRIGATÓRIO) As maçãs custam R$ 0,30 cada se forem compradas menos do que
12, e R$ 0,25 se forem compradas 12 ou mais. Escreva um programa que leia o número
de maçãs compradas, calcule e escreva o valor total da compra */

// Variável para chamar o 'readline-sync'
var readline = require('readline-sync')

// Variável para pedir a quantidade da maças a serem compradas para o usuário
var quantidade = readline.questionInt('Quantas maças você quer comprar? ')

// Condição, se a quantidade de maças inseridas pelo usuário for menor (<) que 12, então criaremos uma váriavel
// chamada 'valor' onde o preço será de '0.30, depois criaremos uma variável chamada 'total' que irá fazer
// a multiplicação do valor pela quantidade de maças que o usuário quer comprar e, por fim o console irá imprimir
// 'O valor total da compra é:' , total. Na variável 'total' vai estar armazenado o total da compra, basicamente
// estamos apenas concatenando a frase do valor total com a variável de valor total.
// Caso o usuário insira mais de 12 na quantidade, automaticamente vamos para o else, onde a variável valor
// será criada com o valor de '0.25'.
if (quantidade < 12) {
    var valor = 0.30
    var total = valor * quantidade
    console.log('O valor total da compra é: ', total)
} else {
    var valor = 0.25
    var total = valor * quantidade
    console.log('O valor total da compra é: ', total)
}