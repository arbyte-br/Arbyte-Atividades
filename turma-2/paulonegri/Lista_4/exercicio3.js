/*Escreva um programa javascript para escrever o seguinte padrão na
tela, com N linhas:
*
* *
* * *
* * * *
* * * * *
Onde N é um número maior que zero determinado pelo usuário (no exemplo, N=5).*/

let rs = require(`readline-sync`)
let numero = rs.questionInt(`Digite um numero: `)
let i = 1

while(numero >= i){
    console.log(`*`.repeat(i))
    i++
}