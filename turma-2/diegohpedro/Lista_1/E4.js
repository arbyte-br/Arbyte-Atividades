// (OBRIGATÓRIO) As maçãs custam R$ 0,30 cada se forem compradas menos do que
// 12, e R$ 0,25 se forem compradas 12 ou mais. Escreva um programa que leia o número
// de maçãs compradas, calcule e escreva o valor total da compra

let rs = require('readline-sync')

let cliente = rs.questionFloat('Quantas maçâs você quer?: ')
let maca1 = 0.30 
let maca2 = 0.25

if(cliente < 12){
    console.log('A sua compra tem o valor de:' + cliente * maca1 + ' ' + 'centavos')
}else {
    console.log('A sua compra tem o valor de:' + cliente * maca2  + ' ' + 'centavos')
}
    
