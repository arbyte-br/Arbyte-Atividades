// (OBRIGATÓRIO) Escreva um programa javascript para escrever o seguinte padrão na
// tela, com N linhas:
// *
// * *
// * * *
// * * * *
// * * * * *
// Onde N é um número maior que zero determinado pelo usuário (no exemplo, N=5).

let rs = require ('readline-sync')

let respostaUsuario = rs.questionInt('Digite um numero maior que 0: ')

let i = 1

let asteristico = '*'

if (respostaUsuario > 0){

    while(i <= respostaUsuario){
        console.log(asteristico.repeat(i))
        i++ 
    }
}
else{
    console.log('Número não é maior que 0.')
}