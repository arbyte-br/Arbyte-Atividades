let rs = require('readline-sync')

class nomePessoa {
    constructor(nomePessoa){
        this.nome = rs.question('Digite o seu nome: ')
        this.idade = rs.questionInt('Qual a sua idade? ')
    }
}
const pessoa1 = new nomePessoa()
console.log(pessoa1) 