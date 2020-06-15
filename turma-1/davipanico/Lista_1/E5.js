/* (OBRIGATÓRIO) Escreva um programa para ler 3 valores inteiros (considere que não
serão lidos valores iguais) e escrevê-los em ordem crescente. */

// Varíavel que iremos chamar o 'readline-sync'
var readline = require('readline-sync')

// Aqui iremos pedir três números inteiros ao usuário e, iremos armazenar cada um em uma váriavel (numero1, numero2, numero3)
var numero1 = readline.questionInt("Digite o primeiro número inteiro: ")
var numero2 = readline.questionInt("Digite o segundo número inteiro: ")
var numero3 = readline.questionInt("Digite o terceiro número inteiro: ")

// Aqui fica um pouco mais complexo, pois teremos que fazer algumas comparações para saber qual o número maior e menor.
// Condição, se o 'numero1' for menor (<) que o 'numero2' e (&&) menor (<) que o 'numero3', entraremos em outra condição
// vamos checar se o 'numero2' é menor (<) que o 'numero3' caso sim, iremos imprimir na sequência:
// 'numero1' - 'numero2' - 'numero3'
// Caso o 'numero2' não seja menor (<) que o 'numero3' vamos para o else e imprimimos:
// 'numero1' -  'numero2' - 'numero3'
if (numero1 < numero2 && numero1 < numero3) {
    if (numero2 < numero3) {
        console.log(numero1, numero2, numero3)
    } else {
        console.log(numero1, numero3, numero2)
    }
}

// Caso a primeira condição que pergunta se o 'numero1' é menor (<) que 'numero2' e (&&) menor (<) que 'numero3'
// não seja atendida, automaticamente aquele if será descartado e então vamos entrar no segundo que começa comparando
// se o 'numero2' é menor (<) que 'numero1' e (&&) menor (<) que 'numero3'.
// Logo após seguimos a mesma lógica do primeiro if.
if (numero2 < numero1 && numero2 < numero3) {
    if (numero1 < numero3) {
        console.log(numero2, numero1, numero3)
    } else {
        console.log(numero2, numero3, numero1)
    }
}

// Nada muda no terceiro if, caso as condições dos dois primeiros if não forem atendidas, elas são automaticamente
// descartadas e passamos a rodar o terceiro if, que segue a mesma lógica dos dois anteriores.
if (numero3 < numero1 && numero3 < numero2) {
    if (numero1 < numero2) {
        console.log(numero3, numero1, numero2)
    } else {
        console.log(numero3, numero2, numero1)
    }
}