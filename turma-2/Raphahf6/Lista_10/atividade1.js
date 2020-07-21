// (OBRIGATÓRIO) Crie uma aplicação em JS que receba um nome do usuário e crie um
// novo usuário com o nome fornecido e o imprima na tela(ex.: "{nome: 'Italo'}"). Este
// objeto deve ser criado usando uma classe.

const rs = require('readline-sync')

class usuario {
    constructor(){
        this.nome = rs.question('Digite um nome: ')
    }
}

const pessoa = new usuario()

console.log(pessoa)