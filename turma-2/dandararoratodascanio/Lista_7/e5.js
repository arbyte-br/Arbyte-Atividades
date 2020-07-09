// Escreva uma aplicação em JS que receba dois números do usuário e
// retorne a soma dos mesmos. A soma deve ser feita em uma função.

let rs = require("readline-sync")

let numero1 = rs.questionInt("Digite um número: ")

let numero2 = rs.questionInt("Digite outro número: ")


function soma(Sominha) {
    return numero1 + numero2
}
console.log(soma())

