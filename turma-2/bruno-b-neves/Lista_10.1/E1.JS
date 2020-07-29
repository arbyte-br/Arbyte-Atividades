// Crie uma classe que represente um usuário de um
// app como uber ou 99. O Usuário deve ter alguns atributos como nome,
// email, endereço primário, formas de pagamento, etc.

const rs = require('readline-sync');

let objUser = {
    nome: rs.question('Insira seu nome: '),
    email: rs.question('Insira seu emial: '),
    endereco: rs.question('Insira seu endereco: '),
    pagamento: rs.question('Qual a forma de pagamento: ')
};

class Usuario  {
    constructor(nome) {
        this.nome = nome
    }
}

let usuarioApp = new Usuario(objUser.nome)

console.log(usuarioApp)
