const readline = require('readline-sync');

class Usuario {
    constructor(nome, email, endereco, pagamento) {
        this.nome = nome;
        this.email = email;
        this.endereco = endereco;
        this.pagamento = pagamento;
    }

    solicitarNovaViagem(local) {
        local = readline.question('Qual a nova viagem? ');
        console.log(`Voce ira para ${local}`);
    }

    editarEnderecoPrimario() {
        this.endereco = readline.question('Qual e o novo endereco? ');
        console.log(`Seu novo endereco eh ${this.endereco}`);
    }

    adicionarFormaDePagamento() {
        this.pagamento = readline.question('Qual a forma de pagamento? ');
        console.log(`O pagamento sera com ${this.pagamento}`);
    }
    static calculaCorrida(km) {
        return `Valor da corrida: R$ ${km * 10}`;
    }
}

class UsuarioMotorista extends Usuario {
    constructor() {
        super();
    }
}

const usuario = new Usuario();
const motorista = new UsuarioMotorista();

motorista.editarEnderecoPrimario();