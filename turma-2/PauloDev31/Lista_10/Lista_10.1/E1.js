let rs = require('readline-sync')

class Usuario {
    constructor(){
        this.nome = rs.question('Digite seu nome de usuario: \n')
        this.email = rs.question('Digite seu email: \n')
        this.ende = rs.question('Informe seu endereço: \n')
        this.formaPag = rs.question('Informe a forma de pagamento: \n')
    }
}
let usuario = new Usuario
console.log(usuario)