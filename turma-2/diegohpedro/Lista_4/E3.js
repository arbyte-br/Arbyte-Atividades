// // (OBRIGATÓRIO) Escreva um programa javascript para escrever o seguinte padrão na
// // tela, com N linhas:
// // *
// // * *
// // * * *
// // * * * *
// // * * * * *

// Onde N é um número maior que zero determinado pelo usuário (no exemplo, N=5)

let rs = require('readline-sync')

let usuario = rs.questionInt('Insira um numero maior que zero: ')
let asterisco = '*'
let contador = 0
while(contador <= usuario){
    console.log(asterisco.repeat(contador))
    contador ++

}

