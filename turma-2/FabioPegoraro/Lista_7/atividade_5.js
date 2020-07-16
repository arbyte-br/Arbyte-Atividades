//Escreva uma aplicação em JS que receba dois números do usuário e retorne a soma dos mesmos.
//A soma deve ser feita em uma função.

let rs = require("readline-sync")


let n1 = rs.questionFloat("Digite um numero:\n")
let n2 = rs.questionFloat("Digite outro numero:\n")

function soma(){
    return n1 + n2
}

let resultado = soma(n1,n2)
console.log ("A soma dos dois numeros é: " + resultado)