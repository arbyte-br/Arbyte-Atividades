//Crie uma aplicação em JS que receba um nome do usuário e crie um
//novo usuário com o nome fornecido e o imprima na tela(ex.: "{nome: 'Italo'}"). Este
//objeto deve ser criado usando uma classe.

let rs = require("readline-sync")

class Usuario {
    constructor(name) {
        this.name = rs.question("Digite seu nome")
    }
}

var usuario1 = new usuario()

console.log(usuario1.name)