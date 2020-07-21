let rs = require('readline-sync')

class Pessoa {
    constructor(nome){
        this.nome = rs.question('Qual o seu nome? \n >')
    }
}

const usuario = new Pessoa()

console.log(usuario)