let rs = require('readline-sync')

class Usuario {
    constructor (nome) {
        this.nome = rs.question('Insira seu nome: ')
    }
}

let usuario = new Usuario ()
console.log (usuario) 