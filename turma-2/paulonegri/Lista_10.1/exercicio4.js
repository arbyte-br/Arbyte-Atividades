/*Agora crie um usuário que represente um motorista,
com atributos e métodos próprios. Lembre-se que você deve evitar código
duplicado. Logo, você pode extrair alguns comportamentos do usuário
criado anteriormente para um usuário base e a partir daí fazer com que
UsuarioCliente e UsuarioMotorista sejam filhas da classe pai.*/

const rs = require('readline-sync')

class usuarioApp {
    constructor(nome, email){
        this.nome = nome;
        this.email = email;
        
    }
}
    
class UsuarioCliente extends usuarioApp{
    constructor(nome, email, endereco, formaPag){
        super()
        super.nome = nome;
        super.email = email;
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
class UsuarioMotorista extends usuarioApp{
    constructor(nome, email, avaliacao, formaPagRecebido){
        super()
        super.nome = nome;
        super.email = email;
        this.avaliacao = avaliacao;
        this.formaPagRecebido = null;
        
    }
    set tipoPagamento (formaPagRecebido){
        this.tipoPagamento = formaPagRecebido;
    }
}

const pg = rs.question('Se for um motorista, digite um, se for um cliente digite dois: ');
if(pg == 1){
    const primerioCliente = new UsuarioCliente ('alguem', 'alguem@email.com', 'rua lugar', 'dinheiro');

    primerioCliente.seuDestino = rs.question('Digite seu destino: ');
    primerioCliente.suaLocalizacao = rs.question('Digite sua localizacao: ');
    primerioCliente.formaPag = rs.question('Qual a forma de pagamento: ');
    console.log(primerioCliente);
}else if(pg == 2){
    const motorista = new UsuarioMotorista ('fulano', 'fulano@email.com', '5 estrelas');

    motorista.formaPagRecebido = rs.question('Quais formas de pagamento voce trabalha? \n');
    console.log(motorista);
}else{
    console.log('numero nao cadastrado!');
}
