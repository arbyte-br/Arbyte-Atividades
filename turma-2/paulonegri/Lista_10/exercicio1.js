/*Crie uma classe que represente um usuário de um
app como uber ou 99. O Usuário deve ter alguns atributos como nome,
email, endereço primário, formas de pagamento, etc.*/

const rs = require('readline-sync')

class usuario{
    constructor(nome, email, end, formaPag){
        this.nome = nome;
        this.email = email;
        this.end = end;
        this.formaPag = formaPag;
    }
    
}

const primeiroUsuario = new usuario('Paulo', 'algum@algum.com', 'rua alguma', 'dinheiro');
console.log(primeiroUsuario);