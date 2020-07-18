// 5. (OBRIGATÓRIO) Crie um programa que:
// a. Peça o login de um usuário;
// b. Peça sua senha;
// c. Caso usuário ou senha estejam incorretos, imprima na tela "LOGIN/SENHA
// INCORRETOS" e pare;
// d. Caso o usuário e a senha estejam corretos, imprima na tela "USUÁRIO
// LOGADO" e continue;
// e. Imprima na tela o seguinte catálogo de produtos:

// Produto     |      Valor
// Computador  |    R$ 2000
// Impressora  |     R$ 200
// Mouse       |      R$ 50
// Celular     |    R$ 1500
// Carregador  |      R$ 50

// f. Pergunte para o usuário qual produto ele deseja ou se quer sair;
// g. Se o usuário escolher algum produto, imprimir na tela "Obrigado pela compra,
// <nome do usuário>! Você comprou um <nome do produto>", onde <nome do
// usuário> e <nome do produto> devem ser substituídos pelo nome do usuário
// real e o nome real do produto, respectivamente. Após isso, pare a execução.
// h. Se o usuário escolher sair, pare a execução.
// Neste exercício, o usuário deve ser representado por um objeto e o catálogo por uma
// lista de objetos, ou seja um Array de objetos. Cada objeto deste array será um dos
// produtos do catálogo, tendo seu nome e seu valor como propriedades.

let rs = require('readline-sync');

let x = {};
x.login = rs.question('Digite seu login\n');
x.senha = rs.question('Digite sua senha\n');
x.loginCorreto = 'm';
x.senhaCorreta = '1';

let produto = [
  { produto: 'Computador', valor: 'R$ 2000' },
  { produto: 'Impressora', valor: 'R$ 200' },
  { produto: 'Mouse', valor: 'R$ 50' },
  { produto: 'Celular', valor: 'R$ 1500' },
  { produto: 'Carregador', valor: 'R$ 50' },
];

if (x.login == x.loginCorreto && x.senha == x.senhaCorreta) {
  console.log('USUÁRIO LOGADO\n');

  for (i = 0; i < produto.length; i++) {
    console.log('[', i + 1, ']', produto[i].produto, ':', produto[i].valor);
  }
  console.log('Insira qual produto deseja comprar?');
  let respostaUser = rs.questionInt('');

  if (respostaUser >= 1 && respostaUser <= produto.length) {
    console.log(
      `Obrigado pela compra, ${x.login}! Você comprou um ${
        produto[respostaUser - 1].produto
      }`
    );
  } else {
    console.log('Insira um número válido');
  }
} else {
  console.log('LOGIN/SENHA INCORRETOS');
}