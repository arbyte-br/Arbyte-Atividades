/*Fazer um algoritmo que receba 5 números e mostra o produto dos ímpares e
a soma dos pares
EX: valores fornecidos 1,2,3,4,5
Impares -> 1 * 3 * 5 = 15
Pares -> 2 + 4 = 6
O programa imprime :
Produtos dos impares : 15
Soma dos pares : 6*/

let rs = require(`readline-sync`)
let i = 1 
let numero = rs.questionInt(`Digite um numero> `)
let numeroimpar = 1
let numeropar = 0
let numero2


if(numero % 2 == 0){
    numero = numeropar
}else{
    numero = numeroimpar
}     
while(i < 5){
    numero2 = rs.questionInt(`Digite um numero> `)
   
    if(numero2 % 2 == 0){
        numeropar = numeropar + numero2
    }else{
        numeroimpar = numeroimpar * numero2
    }
    i++
}
console.clear()
console.log(`Soma dos Pares -> ${numeropar}`)
console.log(`Produto dos Ímpares -> ${numeroimpar}`)