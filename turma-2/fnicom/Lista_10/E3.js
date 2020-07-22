// Crie uma aplicação em JS que receba um nome e uma idade do
// usuário e crie um novo usuário com o nome e a idade fornecida e o imprima na tela
// neste formato -> "Olá <nome do usuário>, você tem <idade do usuário> anos!". Este
// objeto deve ser criado usando uma classe.

let rs = require('readline-sync')

class usuario{
    constructor(nome){
        this.nome = rs.question('Digite seu nome: \n')
        this.idade = rs.question('Digite sua idade: \n')
    }
}

const novoUsuario = new usuario()
console.clear()
console.log(`Olá ${novoUsuario.nome}, sua idade é ${novoUsuario.idade} anos!`);