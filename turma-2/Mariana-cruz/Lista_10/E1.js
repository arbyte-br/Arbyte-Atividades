// 1. (OBRIGATÓRIO) Crie uma aplicação em JS que receba um nome do usuário e crie um
// novo usuário com o nome fornecido e o imprima na tela(ex.: "{nome: 'Italo'}"). Este
// objeto deve ser criado usando uma classe.

let rs = require('readline-sync');

class User {
  constructor(name) {
    this.name = name;
  }
}

let user = new User(rs.question('Qual o seu nome? '));
console.log(user.name);
