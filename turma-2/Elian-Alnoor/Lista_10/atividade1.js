// Crie uma classe que represente um usuário de um 
// app como uber ou 99. O Usuário deve ter alguns atributos como nome, 
// email, endereço primário, formas de pagamento, etc.

class Usuario {
    constructor() {
        this.nome = 'Elian',
        this.email = 'elian@elian.com.br'
        this.endereçoPrimário = 'rua dos sírios, 758'
        this.formaPagamento = 'credito'
    }
}

const user = new Usuario()
console.log(user)