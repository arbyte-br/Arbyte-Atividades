//Crie uma classe que represente um usuário de um 
//app como uber ou 99. O Usuário deve ter alguns atributos como nome, 
//email, endereço primário, formas de pagamento, etc.

let rs = require("readline-sync")

class Usuario {
    constructor(name) {
        this.nome = rs.question("Digite seu nome: \n")
        this.endereco = rs.question("Digite seu endereco: \n")
        this.email = rs.question("Digite seu email: \n")
        this.pagamento = rs.question("Digite a forma de pagamento padrao: \n")
    }
}

var usuario1 = new Usuario ()

console.log(usuario1)