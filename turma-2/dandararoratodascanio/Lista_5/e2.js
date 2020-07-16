/* (OBRIGATÓRIO) Faça um programa que leia dois números, o primeiro é o valor inicial
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
Final da contagem */

let rs = require('readline-sync')

let numeroInicial = rs.questionInt("Digite um valor: ")

let numeroFinal = rs.questionInt("Digite um valor maior que o primeiro número: ")

if(numeroInicial <= numeroFinal) {
    console.log("Início da contagem")
    for (numeroInicial; numeroInicial <= numeroFinal; numeroInicial++) {
        console.log(numeroInicial)
    }
    console.log("Final da contagem")
} else {
    console.log("Você digitou os valores de forma incorreta!")
}
