// Escreva uma aplicação em JS que receba dois números do usuário e
// retorne a soma dos mesmos. A soma deve ser feita em uma função.

let readlineSync = require('readline-sync');

let num1 = readlineSync.questionInt('Digite um número: ')
let num2 = readlineSync.questionInt('Digite outro número: ')

function soma(num1, num2) {
    return num1 + num2
}
let res = num1 + num2
console.log("Resulado: " + num1 + " + " + num2 + ' = ' + res)