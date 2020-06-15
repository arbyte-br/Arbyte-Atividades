/* Faça um programa que receba três notas, calcule e mostre a média aritmética entre
elas, caso a média aritmética seja:
Media maior ou igual a 7 imprimir :
ALUNO APROVADO
Media menor que 7 imprimir :
ALUNO REPROVADO */

// Variável onde chamamos o 'readline-sync'
var readline = require('readline-sync')

// Aqui iremos solicitar ao usuário as 3 notas e armazenar nas variáveis 'nota1', 'nota2', 'nota3'.
var nota1 = readline.questionInt('Qual a nota 1?')
var nota2 = readline.questionInt('Qual a nota 2?')
var nota3 = readline.questionInt('Qual a nota 3?')

// Aqui iremos criar a variável 'notaMedia' e, dentro dela iremos fazer o cálculo das notas que o usuário colocou:
// 'nota1' mais (+) 'nota2' mais (+) 'nota3' dividido (/) por três (O número de notas recebidas)
var notaMedia = (nota1 + nota2 + nota3) / 3

// Condição, se a variável 'notaMedia' for maior ou igual (>=) a 7 iremos imprimir:
// 'Aprovado'.
if (notaMedia >= 7) {
    console.log('Aprovado')
}
// Caso a variável 'notaMedia' não seja maior ou igual (>=) a 7, iremos para o else e vamos imprimir:
// 'Reprovado'.
else {
    console.log('Reprovado')
}