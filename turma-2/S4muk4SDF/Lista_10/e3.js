const rs = require("readline-sync")

class Usuario {
    constructor(){
        this.nome = rs.question("Digite seu nome: ")
        this.idade = rs.questionInt("Digite sua idade: ")
    }
}

const usuario = new Usuario()

console.log(`Olá ${usuario.nome}, você tem ${usuario.idade} anos!`)