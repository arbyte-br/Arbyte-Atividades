let rs = require('readline-sync')

class Usuario {
    constructor (nome) {
        this.nome = rs.question('Insira seu nome: ')
        this.idade = rs.questionInt('Insira sua idade: ')
    }
}

let usuario = new Usuario ()
console.log (usuario) 