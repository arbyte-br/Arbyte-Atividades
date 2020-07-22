/* 3. (OBRIGATÓRIO) Crie uma aplicação em JS que receba um nome e uma idade do
usuário e crie um novo usuário com o nome e a idade fornecida e o imprima na tela
neste formato -> "Olá <nome do usuário>, você tem <idade do usuário> anos!". Este
objeto deve ser criado usando uma classe.
 */let rs = require ("readline-sync")

 class Usuario {
    constructor (nome) {
    this.nome = rs.question ("Qual seu nome? \n")
    this.idade = rs.questionInt ("qual sua idade? \n")
    }
}
const usuario = new Usuario
console.log (`Olá ${usuario.nome}, você tem ${usuario.idade} anos!`) 