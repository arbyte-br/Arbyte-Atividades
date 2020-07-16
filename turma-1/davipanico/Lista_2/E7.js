/* Elabore um programa para testar se uma senha digitada é igual a “batatafrita”.
Se a senha estiver correta escreva
“Acesso permitido”,
do contrário emita a mensagem
“Você não tem acesso ao sistema”. */

// Variável onde chamamos o 'readline-sync'.
var readline = require('readline-sync')

// Variável onde perguntamos a senha para o usuário.
var senha = readline.question('Qual a senha? ')

// Condição, se a variável senha for igual (==) a 'batatafrita', vamos imprimir: 'Acesso permitido'.
if (senha == 'batatafrita') {
    console.log('Acesso permitido')
} 
// Caso a condição de if não seja atendida, vamos para o else e vamos imprimir: 'Você não tem acesso ao sistema'.
else {
    console.log('Você não tem acesso ao sistema')
}