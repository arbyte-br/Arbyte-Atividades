let rs = require('readline-sync')

class Pessoa {
    constructor(nome,idade){
        this.nome = rs.question('Qual o seu nome? \n >')
        this.idade = rs.questionInt('Qual sua idade? \n >')
    }
}

const usuario = new Pessoa()

console.log(`Olá ${usuario.nome}, você tem ${usuario.idade} anos!`)