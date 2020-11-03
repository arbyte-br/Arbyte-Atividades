// 1 (OBRIGATÓRIO) - Crie uma classe que represente um usuário de um
// app como uber ou 99. O Usuário deve ter alguns atributos como nome,
// email, endereço primário, formas de pagamento, etc.


let rs = require('readline-sync');

class User {
  constructor() {
    this.nome = rs.question('Qual o seu nome? ');
    this.email = rs.questionEMail('Digite um endereço de e-mail: ');
    this.endereco = rs.question('Digite seu endereço: ');
    this.formasPagamento = rs.question('Digite uma forma de pagamento: ');
  }
}

let user = new User();

console.log(`Bem vindo, usuário ${user.nome}!`);

