/*Escreva um programa que verifique a validade de uma senha fornecida pelo usuário.
A senha válida é o número 1234.
Devem ser impressas as seguintes mensagens:
- ACESSO PERMITIDO caso a senha seja válida.
- ACESSO NEGADO caso a senha seja inválida*/

let rs = require('readline-sync')
let senha = rs.questionInt('Digite a senha: ')

senha == 1234 ? console.log('ACESSO PERMITIDO') 
: console.log('ACESSO NEGADO')