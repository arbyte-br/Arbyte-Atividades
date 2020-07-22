// Crie uma classe que represente um usuário de um app como uber ou 99.
// O Usuário deve ter alguns atributos como nome,
// email, endereço primário, formas de pagamento, etc.

let rs = require('readline-sync')

class usuario {
    constructor(usuario){
        this.nome = rs.question('Digite seu nome: \n')
        this.email = rs.question('Digite seu email: \n')
        this.endereco = rs.question('Digite seu endereço: \n')
        this.pagamento = rs.questionInt('Digite 1 para registrar pagamento via Cartão \n Digite 2 para registrar pagamento via dinheiro \n')
            if(this.pagamento === 1){
                this.pagamento = 'Cartão'
                }else if(this.pagamento === 2){
                this.pagamento = 'Dinheiro'
                }else if(this.pagamento === 12){
                this.pagamento = 'Cartão e Dinheiro';
                }else{
                    console.log('Forma de pagamento incorreta')
                }

    }
}
const usuario01 = new usuario()
console.log(usuario01)
