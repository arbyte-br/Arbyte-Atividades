/* Uma empresa abriu uma linha de crédito para os funcionários.
O valor da prestação não pode ultrapassar 30% do salário.
Faça um programa que receba o salário, o valor do empréstimo e o número de
prestações e informe se o empréstimo pode ser concedido. Nenhum dos valores
informados pode ser zero ou negativo. */

// Váriavel onde chamamos o 'readline-sync'.
var user = require('readline-sync')

// Variável onde pedimos ao usuário o valor do seu salário.
var salario = user.questionInt('Qual o seu salário? ')

// Variável onde pedimos ao usuário o valor do empréstimo que ele quer receber.
var valorEmprestimo = user.questionInt('Quanto você quer de empréstimo? ')

// Variável onde pedimos ao usuário o número de parcelas que ele quer pagar o empréstimo.
var parcelas = user.questionInt('Em quantas parcelas você quer pagar o empréstimo? ')

// Variável onde iremos fazer o cálculo de quanto é 30% do salário do usuário.
// Aqui pegamos a variável 'salario' multiplicamos (*) por 30 e dividimos (/) por 100, assim teremos o valor de quanto é 30% do salário do usuário.
var porcento =( (30 * salario) / 100)

// Condição, se a variável 'valorEmprestimo' for maior (>) que a variável 'porcento', iremos imprimir: 'Não será possível, o valor de empréstimo ultrapassa 30% do seu salário'.
if (valorEmprestimo > porcento) {
    console.log('Não será possível, o valor de empréstimo ultrapassa 30% do seu salário')
}
// Caso a condição de if não seja atendida, automaticamente sabemos que o usuário está elegível ao empréstimo, então iremos imprimir:
// 'Parabéns, empréstimo aprovado, você irá pagar' e, a variável 'valorEmprestimo', 'Reais em' e, a variável 'parcelas'.
else {
    console.log('Parabéns, empréstimo aprovado, você irá pagar', valorEmprestimo, 'Reais em', parcelas, 'parcelas') 
}