// (OBRIGATÓRIO)​Crie uma aplicação em JS que receba um nome do usuário e crie um novo usuário com o nome fornecido e o imprima na tela(ex.: "{nome: 'Italo'}"). Este objeto deve ser criado usando uma classe.

let rs = require('readline-sync')

class nomeUsuario {
   constructor(nome){
      this.nome = rs.question('Qual é o seu nome? \n')
   }
}

const paulo = new nomeUsuario()

console.log(paulo)