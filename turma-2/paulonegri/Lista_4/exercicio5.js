/*Crie um programa que peça o usuário n números e, quando o usuário digitar -1, imprima
o maior e o menor, sem levar em consideração o -1*/

let rs = require(`readline-sync`)
let numeros
let maiorNumero = +0
let menorNumero = -0
console.clear()

while(numeros !== -1){
    numeros = rs.questionInt(`Digite um numero: `)
    
    if(maiorNumero < numeros){
        maiorNumero = numeros
    } 
    if(menorNumero > numeros){
        menorNumero = numeros
    }
    if(numeros == -1){
        console.log(`Esse foi o menor numero digitado:${menorNumero}.\nEsse foi o maior numero digitado: ${maiorNumero}.`)
        break
    }
   
}