// OBRIGATÓRIO)​ As maçãs custam R$ 0,30 cada se forem compradas menos do que12, 
// e R$ 0,25 se forem compradas 12 ou mais. 
// Escreva um programa que leia o númerode maçãs compradas, calcule e escreva o valor total da compra

let rs = require ('readline-sync')

let maçasCompradas = rs.questionInt ('Quantas maças você comprou?\n')
let maças25 = maçasCompradas*0.25
let maças30 = maçasCompradas*0.30

if (maçasCompradas < 12) {
   console.log ('Sua compra ficou: ' + maças25)
} else {
    console.log ('Sua compra ficou: ' + maças30)
}