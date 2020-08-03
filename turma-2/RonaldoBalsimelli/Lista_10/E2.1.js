/* 2 (OBRIGATÓRIO) - Usando a classe do exercício anterior, crie métodos
que representem possíveis ações do usuário no aplicativo.
 */

const rs = require('readline-sync');

class Usuario {
    constructor() {
        this.nome = rs.question('Insira seu nome: \n');
        console.clear()
        this.email = rs.question('Insira seu e-mail: \n')
        console.clear()
        this.celular = rs.questionInt('Insira o seu número de celular: \n')
        console.clear()
        this.pagamento = rs.question('Insira a sua forma de pagamento: \n')
        console.clear()
        this.enderecoPartida = rs.question('Insira a sua localização: \n')
        console.clear()
        this.enderecoDestino = rs.question('Insira o seu destino: \n')
        console.clear()
    }

    set OutroEndPartida(enderecoPartida) {
        this.OutroEndPartida = endedecoPartida;
        console.clear()

    }
    set OutroEndDestino(enderecoDestino) {
        this.OutroEndDestino = enderecoDestino;
        console.clear()
    }
}
const user = new Usuario()

user.enderecoPartida=rs.question('Insira sua nova localização: \n');
console.clear()
user.enderecoDestino=rs.question('Insira o seu novo destino: \n');
console.clear()

console.log(user)
 


  