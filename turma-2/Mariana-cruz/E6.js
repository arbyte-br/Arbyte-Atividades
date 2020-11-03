// (OBRIGATÓRIO) Escreva uma aplicação em JS que receba um número do usuário e
// verifique se o número informado está entre 1 e 10. Se estiver, sua aplicação deve
// imprimir no console a mensagem "Número OK!". Se não, deve ser impresso "O número
// deve ser de 1 a 10!". A verificação do número deve ser feita em uma função.

let rs = require('readline-sync');

function VerificaNumero(n) {
  if (n > 1 && n < 10) {
    return (n = console.log('Número OK'));
  } else {
    return (n = console.log('O numero deve ser de 1 a 10!'));
  }
}

VerificaNumero(rs.question('Insira um número: '));
