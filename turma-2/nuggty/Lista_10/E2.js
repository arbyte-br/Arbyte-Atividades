const user = require('readline-sync');

class Usuario {
    constructor() {
        this.nome = user.question('Digite um nome: \n');
        this.idade = user.questionInt('Insira sua idade: \n');
    }
}

let pessoa = new Usuario();

console.log(pessoa);