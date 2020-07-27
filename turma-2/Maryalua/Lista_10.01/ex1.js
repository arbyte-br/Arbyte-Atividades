/*1 (OBRIGATÓRIO) - Crie uma classe que represente um usuário de um
app como uber ou 99. O Usuário deve ter alguns atributos como nome,
email, endereço primário, formas de pagamento, etc.*/

const rs = require('readline-sync');

class Usuario {
    constructor() {
        this.nome = rs.question('Insira seu nome:');
        this.email = rs.question('Insira seu e-mail:')
        this.celular = rs.questionInt('Insira seu número de celular:')
        this.endereco = rs.question('Insira seu endereço:')
        this.pagamento = rs.question('Insira sua forma de pagamento:')
    }

}
const pessoa1 = new Usuario()

