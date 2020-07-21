let rs = require('readline-sync')

class nomePessoa  {
    constructor(nome){
        this.nome = rs.question('Digite o seu nome: ')
        this.idade = rs.questionInt('Qual a sua idade? ')
    }
}
const pessoa1 = new nomePessoa()
console.log('Olá ' + pessoa1.nome + ',voce tem ' + pessoa1.idade + ' anos!') 