/*(OBRIGATÓRIO) - Crie uma classe que represente um usuário de um
app como uber ou 99. O Usuário deve ter alguns atributos como nome,
email, endereço primário, formas de pagamento, etc.*/

var rs = require('readline-sync');


class Usuario {
    constructor (){
        this.nome = rs.question('Digite seu nome: ');
        this.email = rs.question('Digite seu email: ');
        this.endereco = rs.question('Digite seu endereço: ');
        this.telefone = rs.question('Digite seu telefone: ');
        this.pagamento = rs.question('Forma de pagamento: ');
        
    }
  
}

const usuarioUber = new Usuario();

console.log(`Usuário Uber : `,usuarioUber);

module.exports = usuarioUber;

