
/* 1 (OBRIGATÓRIO) - Crie uma classe que represente um usuário de um
app como uber ou 99. O Usuário deve ter alguns atributos como nome,
email, endereço primário, formas de pagamento, etc.
2 (OBRIGATÓRIO) - Usando a classe do exercício anterior, crie métodos
que representem possíveis ações do usuário no aplicativo.
 */
let rs = require('readline-sync')

class Usuario {
    constructor(){
        this.nome = rs.question('Qual é o seu nome? : \n')
        this.enderço = rs.question('Qual é o seu endereço? : \n')
        this.pagamento = rs.question('Qual é a forma de pagamento (Digite: Dinheiro ou Cartão) : \n')
        this.email = rs.question('Digite seu e-mail: \n')
    }
}

let usuario = new Usuario



console.log(usuario)