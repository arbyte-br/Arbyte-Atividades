// (OBRIGATÓRIO) Crie uma aplicação em JS que receba um nome e uma idade do
// usuário e crie um novo usuário com o nome e a idade fornecida e o imprima na tela
// neste formato -> "Olá <nome do usuário>, você tem <idade do usuário> anos!". Este
// objeto deve ser criado usando uma classe.

const rs = require('readline-sync')

class usuario {
    constructor(){
        this.nome = rs.question('Digite um nome: ')
        this.idade = rs.questionInt('Digite a idade: ')
    }
}

const user = new usuario()

console.log(`Ola ${user.nome}, você tem ${user.idade} anos! `)