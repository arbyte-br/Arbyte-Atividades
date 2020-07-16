/* Fazer um algoritmo que recebe 15 números de entrada e calcule a média dos
números fornecidos. */

// Variável onde chamamos o 'readline-sync'
var readline = require('readline-sync')

// Variável onde pedimos um número ao usuário.
var numero = readline.questionInt('Insira um numero ')
// Variável de contador que iremos utilizar na condição do (while).
var contador = 1
// Variável que vamos guardar todos os números que adicionarmos.
var soma = 0

// Condição, enquanto (while) a variável 'contador' for menor ou igual (<=) a 15, faremos o seguinte:
while (contador <= 15) {
    // Primeiro iremos somar (+) a variável de 'numero' e a variável 'soma' e armazenar essa soma na variável 'soma'.
    soma = numero + soma
    // Depois iremos pedir um novo número ao usuário.
    numero = readline.questionInt('Insira um numero ')
    // Por fim incrementamos + 1 a variável de 'contador', pois ela determina até quando iremos ficar no loop.
    contador++
}

// Após sairmos do loop, vamos imprimir no console: 'A média é de', e a variável 'soma' dividida (/) por 15 (a quantidade de números que temos).
// Utilizamos o tofixed(2) para permitir apenas 2 casas decimais.
console.log('A media é de', (soma / 15).toFixed(2))