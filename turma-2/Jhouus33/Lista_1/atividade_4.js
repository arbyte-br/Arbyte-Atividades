// Maçãs custam R$ 0,30 cada se forem compradas menos do que 12, e R$ 0,25 se forem compradas 12 ou mais.
// Escreva um programa que leia o número de maçãs compradas, calcule e escreva o valor total da compra

let rs = require('readline-sync')

let macas = rs.questionInt('Digite a quantidade de maças desejadas: \n')

let precoReal = 0.30
let precoAtacado = 0.25
let valorTotal = 0

if(macas < 12) {
    valorTotal = precoReal * macas
    console.log(`valor unitário R$ = ${precoReal}`)
    console.log(`O valor total da sua compra é R$: ${valorTotal}`)
}
else {
    valorTotal = precoAtacado * macas
    console.log(`valor unitário R$ = ${precoAtacado}`)
    console.log(`O valor total da sua compra é R$: ${valorTotal}`) 
}