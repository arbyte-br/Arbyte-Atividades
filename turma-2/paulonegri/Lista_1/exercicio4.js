/*As maçãs custam R$ 0,30 cada se forem compradas menos do que
12, e R$ 0,25 se forem compradas 12 ou mais. Escreva um programa que leia o número
de maçãs compradas, calcule e escreva o valor total da compra*/

let rs = require('readline-sync')
let numeroDemaçãs = rs.questionInt('Quantas macas voce comprou?\n ')
let valorTotal

if(numeroDemaçãs >= 12){
    valorTotal = numeroDemaçãs*0.25 
    console.log(`seu total é R$${valorTotal}`) 
}else if(valorTotal = numeroDemaçãs*0.3){
    
    console.log(`seu total é R$${valorTotal}`)
} 