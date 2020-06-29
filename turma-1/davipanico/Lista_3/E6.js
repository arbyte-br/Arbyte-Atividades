/* Faça um programa que pergunta ao usuário :
“Insira 0 para sair ou qualquer outra tecla para o continuar.”
Se o usuário inserir 0 o programa encerra.
Se o usuário inserir qualquer outra coisa o programa pergunta novamente :
“Insira 0 para sair ou qualquer outro número para o continuar.”
Até o usuário sair */

// Variável onde chamamos o 'readline-sync'
var readline = require('readline-sync')

// Variável onde pedimos para o usuário inserir algo.
var pergunta = readline.question('Insira algo ')

// Condição, enquanto (while) a variável 'pergunta' for diferente (!=) de 0, iremos utilizar a variável 'pergunta' e pedir novamente para ele inserir algo.
// Caso ele insira 0, iremos imprimir no console 'Programa encerrado'
while (pergunta != 0) {
    pergunta = readline.question('Insira 0 para sair ou qualquer outro número para continuar ')
}
console.log('Programa encerrado')