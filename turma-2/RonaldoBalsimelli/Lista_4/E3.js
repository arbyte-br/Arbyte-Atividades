/*(OBRIGATÓRIO) Escreva um programa javascript para escrever o seguinte padrão na
tela, com N linhas:
*
* *
* * *
* * * *
* * * * *
Onde N é um número maior que zero determinado pelo usuário (no exemplo, N=5).
*/

let rs = require ('readline-sync')

let numero = rs.questionInt('Por Favor, Digite um número maior que 0: ')

let i = 1
let asterisco = '*'

if (numero > 0){
    while(i <= numero){
    console.log(asterisco.repeat(i))
    i++ 
}

}
else{
    console.log('Número não é maior que 0.')
}