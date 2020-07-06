// (OBRIGATÓRIO) Escreva um programa javascript para escrever o seguinte padrão na
// tela, com N linhas:
// *
// * *
// * * *
// * * * *
// * * * * *
// Onde N é um número maior que zero determinado pelo usuário (no exemplo, N=5).

let rs = require ('readline-sync')
let n = rs.questionInt('Digite um número maior que 0: ')
let i = 1
let astera = '*'
if (n > 0){
    while(i <= n){
        console.log(astera.repeat(i))
        i++ 
    }
}else{
    console.log('Número não é maior que 0.')
}