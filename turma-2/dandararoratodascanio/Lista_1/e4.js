// As maçãs custam R$ 0,30 cada se forem compradas menos do que
// 12, e R$ 0,25 se forem compradas 12 ou mais. Escreva um programa que leia o número
// de maçãs compradas, calcule e escreva o valor total da compra

 let rs = require('readline-sync')
 
 let macas = rs.questionInt("Quantas maçãs você comprou?")

let macas25 = macas * 0.25
let macas30 = macas * 0.30

 if (macas  < 12) {
     console.log("Sua compra ficou " + macas25)
 } else {
     console.log("Sua compra ficou " + macas30)
 }