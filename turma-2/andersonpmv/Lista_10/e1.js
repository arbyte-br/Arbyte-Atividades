let rs = require('readline-sync')

class Pessoa {
    constructor(nome) {
        this.nome = rs.question('Digite seu nome: ');
    }
}

const pessoa = new Pessoa(this.nome);

console.log(pessoa);