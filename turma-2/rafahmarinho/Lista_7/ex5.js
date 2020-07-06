// (OBRIGATÓRIO) Escreva uma aplicação em JS que receba dois números do usuário e
// retorne a soma dos mesmos. A soma deve ser feita em uma função.
let rs = require('readline-sync')

function valores() {
    return console.log(n1 + n2)
}

let n1 = rs.questionInt('Digite um número: ')
let n2 = rs.questionInt('Digite outro número: ')

valores(n1, n2)