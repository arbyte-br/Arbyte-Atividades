/*
5.(OBRIGATÓRIO) ​Escreva uma aplicação em JS que receba dois números 
do usuário e retorne a soma dos mesmos. A soma deve ser feita em uma função.
*/

const rs = require('readline-sync');

let n1 = rs.questionInt('Por favor, informe um número: ');

let n2 = rs.questionInt('Por favor, informe outro número: ');

function soma() {
    return n1 + n2;
}

let res = soma(n1 + n2);
console.log(res);