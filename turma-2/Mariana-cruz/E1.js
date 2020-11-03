// (OBRIGATÓRIO) Faça uma função que recebe uma string com um nome e imprime a
// seguinte mensagem no console: "Olá <nome do usuário>, bem vindo!". Onde
// <nome_do_usuario> deve ser substituído pelo nome recebido pela função como
// parâmetro. Ao executar o seu código, a mensagem deve ser exibida na tela. (Não é
// necessário pedir dados para o usuário, você pode definir os valores usados na
// aplicação aleatoriamente)

let rs = require('readline-sync');

function x(nome) {
  return nome;
}

let usuario = x(rs.question('Insira seu nome: '));
console.log(`Olá ${usuario} bem vindo!`);
