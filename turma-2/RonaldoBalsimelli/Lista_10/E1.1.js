/*1 (OBRIGATÓRIO) - Crie uma classe que represente um usuário de um
app como uber ou 99. O Usuário deve ter alguns atributos como nome,
email, endereço primário, formas de pagamento, etc.*/

const rs = require('readline-sync');

class Usuario {
    constructor() {
        this.nome = rs.question('Olá, qual seu nome?: \n');
        console.clear()
        this.email = rs.question('Por favor me informe seu e-mail, para cadastro: \n')
        console.clear()
        this.celular = rs.questionInt('Agora insira  seu número celular: \n')
        console.clear()
        this.endereco = rs.question('Informe o seu endereço: \n')
        console.clear()
        this.pagamento = rs.question('Qual a forma de pagamento? \n')
        console.clear()

        console.log(`Olá ${this.nome}, tudo bem? O e-mail inserido foi ${this.email}, o número de contato é ${this.celular}, você mora em ${this.endereco} e a forma de pagamento escolhida foi ${this.pagamento}.`)

    }
}

const pessoa1 = new Usuario()