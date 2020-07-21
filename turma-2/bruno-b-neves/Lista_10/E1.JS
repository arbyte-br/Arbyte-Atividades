const rs = require('readline-sync');

class Cadastro {
    constructor (name) {
        this.name = rs.question('Insira seu nome: ')
    }
}

let cadastro = new Cadastro();
console.log(cadastro);