// (OBRIGATÓRIO) As maçãs custam R$ 0,30 cada se forem compradas menos do que
// 12, e R$ 0,25 se forem compradas 12 ou mais. Escreva um programa que leia o número
// de maçãs compradas, calcule e escreva o valor total da compra

let rs = require('readline-sync')

let macas = rs.questionInt ('Quantas maças deseja comprar? \n')

if (macas < 12 ){
    precoMacas = macas * 0.30
    console.log (`Você deverá pagar R$${precoMacas} por ${macas} maçãs.`)
}else if (macas >= 12 ){
    precoMacas = macas * 0.25
    console.log (`Você deverá pagar R$${precoMacas} por ${macas} maçãs.`)
}