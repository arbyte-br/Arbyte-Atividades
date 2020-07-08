/** Escreva um programa que verifique a validade de uma senha fornecida pelo usuário.
A senha válida é o número 1234.
Devem ser impressas as seguintes mensagens:
- ACESSO PERMITIDO caso a senha seja válida.
- ACESSO NEGADO caso a senha seja inválida */

let rs = require('readline-sync')

let numSenha = rs.questionInt('Digite a senha\n')

if (numSenha === 1234){
console.log("ACESSO PERMITIDO, bem vindo!");
}
else{
    console.log("ACESSO NEGADO, tente novamente!");
}