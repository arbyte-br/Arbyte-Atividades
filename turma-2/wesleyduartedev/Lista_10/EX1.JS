/*(OBRIGATÓRIO) Crie uma aplicação em JS que receba um nome do usuário e crie um
novo usuário com o nome fornecido e o imprima na tela(ex.: "{nome: 'Italo'}"). Este
objeto deve ser criado usando uma classe.*/



var rs = require('readline-sync');

class Usuario {
    constructor (){
        this.nome = rs.question('Digite seu nome: ');

    }
  
}

const usuarioQualquer = new Usuario();

console.log(usuarioQualquer);