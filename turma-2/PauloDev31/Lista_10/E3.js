let rs = require('readline-sync')

class Usuario {
    constructor(){
        this.nome = rs.question('Digite seu nome de usuario: \n')
        this.idade = rs.questionInt('Digite sua idade: \n')
    }
}
let usuario = new Usuario
console.log(`Olá ${usuario.nome}, voce tem ${usuario.idade} anos.`)