// As maçãs custam R$ 0,30 cada se forem compradas menos do que 
// 12, e R$ 0,25 se forem compradas 12 ou mais. Escreva um programa que leia o número 
// de maçãs compradas, calcule e escreva o valor total da compra 

let rs = require("readline-sync")

let qtde = rs.questionInt("Quantas maçãs Você Precisa?\n")

let valor

if (qtde < 12){
    valor = qtde * 0.3
    console.log("o valor da sua compra é: R$" + valor)
}else{
    valor = qtde * 0.25
    console.log("o valor da sua compra é: R$" + valor)
}