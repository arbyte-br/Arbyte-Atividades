// (OBRIGATÓRIO) Escreva uma aplicação em JS que receba dois números do usuário e
// retorne a soma dos mesmos. A soma deve ser feita em uma função.

let rs = require('readline-sync');

function soma(n1 = 0, n2 = 0) {
  return n1 + n2;
}

console.log(
  soma(
    rs.questionInt('digite um numero: '),
    rs.questionInt('digite outro numero: ')
  )
);

// function soma(n1 = 0, n2 = 0) {
//   n1 = rs.questionInt('digite um numero: ');
//   n2 = rs.questionInt('digite outro numero: ');
//   return n1 + n2;
// }

// console.log(soma());
