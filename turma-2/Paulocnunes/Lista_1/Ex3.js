//Escreva um programa que verifique a validade de uma senha
//fornecida pelo usuário.
//A senha válida é o número 1234.
//Devem ser impressas as seguintes mensagens:
//- ACESSO PERMITIDO caso a senha seja válida.
//- ACESSO NEGADO caso a senha seja inválida

let rs = require('readline-sync')

let senhaCorreta = 1234
let senhaUsuario = rs.questionInt('Digite a senha: ')

if (senhaUsuario !== senhaCorreta) {
    console.log('ACESSO NEGADO.')
}   else {
    console.log('ACESSO PERMITIDO.')
}