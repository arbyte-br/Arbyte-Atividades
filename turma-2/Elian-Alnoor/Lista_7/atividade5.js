// ​Escreva uma aplicação em JS que receba dois números do usuário e 
// retorne a soma dos mesmos. A soma deve ser feita em uma função

let rs = require("readline-sync")

function soma(n1, n2){
    return n1 + n2
}
console.log(soma(rs.questionFloat("insira um número:\n"), rs.questionFloat("insira um número:\n")))