// ​Escreva um programa javascript para escrever o seguinte padrão natela,
// com N linhas:** ** * ** * * ** * * * *Onde N é um número maior que zero 
//determinado pelo usuário (no exemplo, N=5

let rs = require('readline-sync')
let nUsuario = rs.questionInt('Digite um numero:\n')

let padrão = ''
for(let linha = 1; linha <= nUsuario; linha++){
padrão += '*'
console.log(padrão)
}