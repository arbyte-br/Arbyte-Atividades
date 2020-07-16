/* Faça um programa que calcule a potência (potenciação) de um número.
Para isso ele deve receber dois números de entrada: o primeiro número é a base da
potência, o segundo número será a potência.
EX: usuário inseriu 2 para base e 4 para potência.
O programa imprime :
16
Lembrando: 2

4 = 2*2*2*2 */

// Variável onde chamamos o 'readline-sync'
var readline = require('readline-sync');

// Variável onde pedimos um número ao usuário.
var numero = readline.questionInt("Qual o numero? ")
// Variável onde pedimos a potência para o usuário.
var potencia = readline.questionInt("Qual a potencia? ")
// Variável onde iremos armazenar o resultado das multiplicações.
var resultado = 1

// Condição, enquanto (while) a variável 'potencia' for maior ou igual (>=) a 1, vamos armazenar na variável 'resultado' a multiplicação da variável 'resultado' pela variável 'numero'.
// Por fim removemos 1 da variável 'potencia' e, assim que sairmos do loop iremos imprimir no console a variável 'resultado'.
while (potencia >= 1) {
    resultado = resultado * numero
    potencia--
}

console.log(resultado)