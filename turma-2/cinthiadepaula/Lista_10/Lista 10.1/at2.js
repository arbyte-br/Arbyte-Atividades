const rs = require('readline-sync');
const fs = require('fs');

let nome = rs.question('Digite seu nome: ')
let email = rs.question('Digite seu email: ')
let enderecoPrimario = rs.question('Digite seu endereço local: ')
let enderecoDestino = rs.question('Digite seu endereço destino: ')
let pagamento = rs.question('Digite a forma de pagamento: ')

class Usuario {
    constructor(nome, email, enderecoPrimario, enderecoDestino,pagamento){
        this.nome = nome;
        this.email = email;
        this.enderecoPrimario = enderecoPrimario;
        this.enderecoDestino = enderecoDestino;
        this.pagamento = pagamento;
    }

    lerDados(){
        return this.nome.split('')[0];
        return this.email.split('')[1];
        return this.enderecoPrimario.split('')[2];
        return this.enderecoDestino.split('')[3];
        return this.pagamento.split('')[4];
    }

}  

  const usuario = new Usuario (nome, email, enderecoPrimario, enderecoDestino, pagamento);

  console.log(usuario);
