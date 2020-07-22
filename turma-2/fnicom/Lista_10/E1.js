// Crie uma aplicação em JS que receba um nome do usuário e crie um
// novo usuário com o nome fornecido e o imprima na tela(ex.: "{nome: 'Italo'}"). Este
// objeto deve ser criado usando uma classe.

let rs = require('readline-sync')

class usuario {
    constructor(nome){
        this.nome = rs.question('digite seu nome: \n')
    }
}

const novoUsuario = new usuario()
console.log(novoUsuario)