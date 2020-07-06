/*Faça um algoritmo que receba um número e imprima todos seus divisores.
EX : usuário informou 21
O algoritmo imprime :
1
3
7
21
DICA: Você pode precisar usar a operação de módulo (a%b)*/

let rs = require(`readline-sync`)
let numero = rs.questionInt(`Informe um numero> `)
let i = 0

while(i < numero){
    if(numero % i == 0){
        let numeroDivisivel = numero/i
        
        console.log(numeroDivisivel)
    }
    i++
    
}console.log(1)