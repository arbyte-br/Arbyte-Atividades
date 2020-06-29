/* Escreva um programa que pergunta um número ao usuário, e mostra sua tabuada
completa (de 1 até 10).
EX.: 5
5x1 = 5, 5x2 = 10, 5x3=15, 5x4=20, 5x5=25, 5x6 = 30, 5x7 = 35, 5x8 = 40, 5x9 = 45,
5x10 = 50 */

// Variável onde chamamos o 'readline-sync'
var readline = require('readline-sync')

// Variável onde pedimos um número ao usuário.
var numero = readline.questionInt('Insira um número ')
// Variável onde definimos o ponto inicial da tabuada.
var tabuada = 1

// Condição, enquanto (while) a variável 'tabuada' for menor e igual (<=) a 10 (pois só queremos até 10), faremos o seguinte:
while (tabuada <= 10) {
    // Criamos uma nova variável chamada 'resultado' e dentro dela iremos fazer a multiplicação (*) da variável numero pela variável 'tabuada'.
    var resultado = numero * tabuada
    // Depois vamos imprimir no console, concatenamos a variável 'numero' mais (+) a letra x mais (+) a variável 'tabuada' e por último a variável 'resultado.
    console.log(numero + 'x' + tabuada, 'É igual a: ', resultado)
    // Agora incrementamos + 1 a variável 'tabuada' para continaur o loop.
    tabuada++
}