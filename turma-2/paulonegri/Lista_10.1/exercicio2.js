/*Usando a classe do exercício anterior, crie métodos
que representem possíveis ações do usuário no aplicativo*/

const rs = require('readline-sync')

class usuarioApp {
    constructor(nome, email, endereco, formaPag){
        this.nome = nome;
        this.email = email;
        this.endereco = endereco;
        this.formaPag = null;
        this.seuDestino = null;
        this.suaLocalizacao = null;
    }

    set destino (seuDestino){
        this.destino = seuDestino;
    }
    set localizacao (suaLocalizacao){
        this.suaLocalizacao = suaLocalizacao;
    }
    set pagamento (formaPag){
        this.pagamento = formaPag;
    }
}

const primerioUsuario = new usuarioApp ('alguem', 'alguem@email.com', 'rua lugar', 'dinheiro');
primerioUsuario.seuDestino = rs.question('Digite seu destino: ');
primerioUsuario.suaLocalizacao = rs.question('Digite sua localizacao: ');
primerioUsuario.formaPag = rs.question('Qual a forma de pagamento: ');

console.log( primerioUsuario);
    