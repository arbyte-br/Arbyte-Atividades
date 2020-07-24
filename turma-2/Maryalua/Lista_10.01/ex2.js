/*2 (OBRIGATÓRIO) - Usando a classe do exercício anterior, crie métodos
que representem possíveis ações do usuário no aplicativo.
ex: solicitarNovaViagem(local), editarEnderecoPrimario(endereco),
adicionarFormaDePagamento(pagamento)*/
const rs = require('readline-sync');

class Usuario {
    constructor() {
        this.nome = rs.question('Insira seu nome:');
        this.email = rs.question('Insira seu e-mail:')
        this.celular = rs.questionInt('Insira o seu número de celular:')
        this.pagamento = rs.question('Insira a sua forma de pagamento:')
        this.enderecoPartida = rs.question('Insira a sua localização:')
        this.enderecoChegada = rs.question('Insira o seu destino:')
    }
    set NovaPartida(enderecoPartida) {
        this.novaPartida = endedecoPartida;

    }
    set NovaChegada(enderecoChegada) {
        this.novaChegada = enderecoChegada;
    }
}
const pessoa1 = new Usuario()

pessoa1.enderecoPartida=rs.question('Insira sua nova localização: ');
pessoa1.enderecoChegada=rs.question('Insira o seu novo destino:');
console.log(pessoa1);