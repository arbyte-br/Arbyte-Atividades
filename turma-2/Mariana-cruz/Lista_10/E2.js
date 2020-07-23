// 2. (OBRIGATÓRIO) Crie uma aplicação em JS que receba um nome e uma idade do
// usuário e crie um novo usuário com o nome e a idade fornecida e o imprima na tela(ex.:
// "{nome: 'Italo', idade: 22}"). Este objeto deve ser criado usando uma classe.

let rs = require('readline-sync');

class User {
  constructor() {
    this.nome = rs.question('Qual o seu nome? ');
    this.idade = rs.question('Qual a sua idade? ');
  }
}

let user = new User();

console.log(user);
