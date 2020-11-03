// (OBRIGATÓRIO) Faça uma função que receba dois valores numéricos inteiros e
// imprima no console qual o maior. Ao executar o seu código, deve ser impresso na tela o
// maior número. (Não é necessário pedir dados para o usuário, você pode definir os
// valores usados na aplicação aleatoriamente)

let rs = require('readline-sync');

// let numero1 = ehMaior(rs.questionInt('digite um numero: '));

// let numero2 = ehMaior(rs.questionInt('digite outro numero: '));

function ehMaior(n1, n2) {
  if (n1 > n2) {
    return (n1 = console.log(`O número 1 é maior`));
  } else {
    return (n2 = console.log(`O número 2 é maior`));
  }
}

ehMaior(
  rs.questionInt('digite um numero: '),
  rs.questionInt('digite outro numero: ')
);
