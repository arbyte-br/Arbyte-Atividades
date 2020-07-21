const rs = require('readline-sync');
const fs = require('fs');



class Usuario {
    constructor(nome, email, enderecoPrimario,pagamento){
        this.nome = nome;
        this.email = email;
        this.enderecoPrimario = enderecoPrimario;
        this.pagamento = pagamento;
    }

    lerDados(){
        return this.nome.split('')[0];
        ;
    }

}  

  const usuario = new Usuario ('Cinthia', 'cinthiade.paula@outlook.com', 'numero 0', 'cartao');

  console.log(usuario);
