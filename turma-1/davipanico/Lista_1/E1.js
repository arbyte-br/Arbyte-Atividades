/* (OBRIGATÓRIO) Escreva um programa para ler o ano de nascimento de uma pessoa e
escrever uma mensagem que diga se ela poderá ou não votar este ano (não é
necessário considerar o mês em que ela nasceu).*/

// variável para chamar o 'Readline-sync'
var readline = require('readline-sync')

// Variável para pedir o ano de nascimento do usuário
var anoDeNascimento = readline.question('Qual seu ano de nascimento? ')

// Variável para pedir o ano atual ao usuário
var anoAtual = readline.question('Qual o ano atual? ')

// Váriavel que faz a subtração do ano atual pelo ano de nascimento do usuário, assim sabemos exatamente a idade dele.
var idade = anoAtual - anoDeNascimento

// Condição, lembra que na variável idade temos a idade exata do usuário? Então a condição diz:
// Se 'idade' maior ou igual a 17 (idade para votar no brasil), então ele vai para a primeira condição
// que diz 'Você pode votar!'.
// Caso não, vai para o 'else', que diz: 'Você não pode votar!'
if (idade >= 17) {
    console.log('Você pode votar!')
} else {
    console.log('Você não pode votar!')
}