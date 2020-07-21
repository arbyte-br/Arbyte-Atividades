const user = require('readline-sync');

class Usuario {
    constructor() {
        this.nome = user.question('Digite um nome: \n');
        this.idade = user.question('Insira sua idade: \n');
    }
    dadosUsuario() {
        return 'Olá '+ this.nome +', você tem '+ this.idade +' anos!'
    }
}

let pessoa = new Usuario();

console.log(pessoa.dadosUsuario());