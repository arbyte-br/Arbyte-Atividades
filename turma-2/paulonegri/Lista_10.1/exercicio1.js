/*Crie uma classe que represente um usuário de um
app como uber ou 99. O Usuário deve ter alguns atributos como nome,
email, endereço primário, formas de pagamento, etc.*/

const rs = require('readline-sync')

class usuarioApp {
    constructor(nome, email, endereco, formaPag){
        this.nome = nome;
        this.email = email;
        this.endereco = endereco;
        this.formaPag = formaPag;
    }
}

const primerioUsuario = new usuarioApp ('alguem', 'alguem@email.com', 'rua lugar', 'dinheiro');
console.log( primerioUsuario);
    

 
