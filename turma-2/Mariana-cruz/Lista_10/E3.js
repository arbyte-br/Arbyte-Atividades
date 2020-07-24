// 3. (OBRIGATÓRIO) Crie uma aplicação em JS que receba um nome e uma idade do
// usuário e crie um novo usuário com o nome e a idade fornecida e o imprima na tela
// neste formato -> "Olá <nome do usuário>, você tem <idade do usuário> anos!". Este
// objeto deve ser criado usando uma classe.

let rs = require('readline-sync');

class NameUser {
  constructor() {
    this.name = rs.question('Qual o seu nome? ');
    this.age = rs.question('Qual sua idade? ');
  }
}

let user = new NameUser();

console.log(`>> Olá ${user.name}, você tem ${user.age} anos!`);
