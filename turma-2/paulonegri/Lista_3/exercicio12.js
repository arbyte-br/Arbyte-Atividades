/*Fazer um algoritmo que recebe 15 números de entrada e calcule a média dos
números fornecidos.*/

let rs = require(`readline-sync`)
let numero = rs.questionInt(`Digite um numero: `)
let i = 1

while(i < 16){
    let numero2 = rs.questionInt(`Digite um numero: `)
    numero = numero + numero2
    i++
}
let media = numero / 16
console.log(media)