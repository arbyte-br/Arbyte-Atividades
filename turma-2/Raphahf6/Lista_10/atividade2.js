// (OBRIGATÓRIO) Crie uma aplicação em JS que receba um nome e uma idade do
// usuário e crie um novo usuário com o nome e a idade fornecida e o imprima na tela(ex.:
// "{nome: 'Italo', idade: 22}"). Este objeto deve ser criado usando uma classe.cons

const rs = require('readline-sync')

class usuario {
    constructor(){
        this.nome = rs.question('Digite um nome: ')
        this.idade = rs.questionInt('Digite uma idade: ')
        
    }
}

const user = new usuario()
console.log(user)