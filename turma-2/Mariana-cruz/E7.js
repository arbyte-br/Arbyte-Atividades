// (OBRIGATÓRIO) Escreva uma aplicação em JS que receba dois usuários. De cada
// usuário, a aplicação deve receber um número de 1 a 100. A aplicação deve informar se
// algum dos usuários informou o número correto. (Você pode escolher qual vai ser o
// número correto)

let rs = require('readline-sync');

let n1 = rs.questionInt('Usuario 1, insira um numero de 01 a 100: ');

let n2 = rs.questionInt('Usuario 2, insira outro numero de 01 a 100: ');

let numeroCorreto = 42

function verificaNumero(n1, n2) {
  if (n1 > 1 < 100 && n1 == numeroCorreto) {
    return (n1 = console.log(' O usuário 1 acertou!'));
  } else if (n2 > 1 < 100 && n2 == numeroCorreto) {
    return (n2 = console.log('O usuário 2 acertou!'));
  } else {
    return console.log('Tente novamente.');
  }
}

verificaNumero(n1, n2);

// function verificaNumero(n1, n2) {
//   if (n1 === numeroCorreto) {
//     return (n1 = console.log(' O usuário 1 acertou!'));
//   } else if (n2 === numeroCorreto) {
//     return (n2 = console.log('O usuário 2 acertou!'));
//   } else {
//     return console.log('Tente novamente.');
//   }
// }