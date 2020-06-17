/* (OBRIGATÓRIO) Escreva um programa que verifique a validade de uma senha
fornecida pelo usuário.
A senha válida é o número 1234.
Devem ser impressas as seguintes mensagens:
- ACESSO PERMITIDO caso a senha seja válida.
- ACESSO NEGADO caso a senha seja inválida */

// variável para chamar o 'Readline-sync'
var readline = require('readline-sync')

// Assim como no exercício anterior, iremos utilizar o 'questionInt' para armazenar um valor inteiro.
// Variável para pedir a senha ao usuário.
var senha = readline.questionInt('Insira sua senha ')

// Condição, caso a variável senha seja igual (==) a 1234 será imprimido na tela '- ACESSO PERMITIDO'
// Caso não (else) será imprimido '- ACESSO NEGADO'
if (senha == 1234) {
    console.log('- ACESSO PERMITIDO')
} else {
    console.log('- ACESSO NEGADO')
}