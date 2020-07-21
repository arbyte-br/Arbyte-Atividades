let rs = require('readline-sync')

class nomePessoa {
    constructor(nome){
        this.nome = rs.question('Digite o seu nome: ')
    }
}
const nome1 = new nomePessoa()
console.log(nome1) 