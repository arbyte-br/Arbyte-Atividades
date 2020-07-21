const rs = require("readline-sync")

class Usuario {
    constructor(){
        this.nome = rs.question("Digite seu nome: ")
    }
}

const usuario = new Usuario()

console.log(usuario)