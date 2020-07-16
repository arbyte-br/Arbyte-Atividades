/* Faça um algoritmo que receba um texto de entrada e diga se a primeira letra é
maiúscula ou não */

// Variável onde chamamos o 'readline-sync'.
var readline = require('readline-sync')

// Variável onde pedimos para o usuário escrever um texto.
var texto = readline.question('Escreva um texto ')

// Condição, aqui verificamos se a variável 'texto' índice [0] (primeira letra) é igual (==) a variável 'texto' índice [0] (primeira letra) está em caixa alta (função toUpperCase()).
// Se sim, imprimimos: 'A primeira letra é maiúscula'.
if (texto[0] == texto[0].toUpperCase()) {
    console.log('A primeira letra é maiúscula')
}
// Se a condição de if não for atendida, já sabemos que a primeira letra é minúscula, então imprimimos: 'A primeira letra é minúscula'.
else {
    console.log('A primeira letra é minúscula')
}