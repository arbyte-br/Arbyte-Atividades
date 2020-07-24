// (OBRIGATÓRIO) -  Crie uma classe que represente um usuário de um app como uber ou 99.                  O Usuário deve ter alguns atributos como nome, email, endereço primário, formas de pagamento, etc.

let rs = require('readline-sync')

const categoriaUsuario = 'Passageiro'

class Usuario {
    constructor(categoria) {
        this.nome = rs.question('Nome: ')
        this.categoria = categoria
        this.email = rs.question('E-mail: ')
        this.celular = rs.questionInt('Celular: ')
        this.endereco = rs.question('Endereço: ')
        this.pagamento = rs.question('Forma de pagamento: ')
    }
}

let usuarioApp = new Usuario(categoriaUsuario)

console.log(usuarioApp)