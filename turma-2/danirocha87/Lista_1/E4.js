//As maçãs custam R$ 0,30 cada se forem compradas menos do que
//12, e R$ 0,25 se forem compradas 12 ou mais. Escreva um programa que leia o número
//de maçãs compradas, calcule e escreva o valor total da compra

let rs = require("readline-sync")

let maçã = rs.question("Quantas maças voce vai querer?")

let preçoMacã = 0.30

let maçãComDesconto = 0.25

if (maçã < 12) {
    console.log("Custa "  + preçoMacã * maçã + " reais")
} else {
    console.log("Custa "  + maçãComDesconto * maçã + " reais")
}