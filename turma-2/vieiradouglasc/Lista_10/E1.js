let rs = require('readline-sync')

class Pessoa {
    constructor(nome) {
        this.nome = nome
    }
}

const pessoa = new Pessoa(rs.question("Insira seu nome: "))

console.log(pessoa)