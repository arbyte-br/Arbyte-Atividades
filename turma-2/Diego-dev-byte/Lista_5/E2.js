/* (OBRIGATÓRIO)​ Faça um programa que leia dois números, 
o primeiro é o valor inicialde um contador, 
e o segundo é o valor final do contador (verifique se o valor inicialfornecido é inferior aovalor final). 
Usando o comando For, 
escreva na tela uma contagem que comece noprimeiro número lido, 
escreva os números seguintes colocando apenas um número emcada nova linha da tela, até chegar ao valor final indicado.
Entre com o Valor Inicial: 11Entre com o Valor Final: 13Contagem:111213Final da contagem */

let rs = require('readline-sync')

let valorInicial = rs.question('Digite um valor \n')
let valorFinal = rs.question('Digite um valor maior que o primeiro \n')

if( valorInicial < valorFinal){
    console.log('inicio da contagem')
    for(valorInicial; valorInicial <= valorFinal; valorInicial ++){
        console.log(valorInicial)
    }
    console.log('Final da contagem.')
}else {
    console.log('Valor digitado invalido.')
}