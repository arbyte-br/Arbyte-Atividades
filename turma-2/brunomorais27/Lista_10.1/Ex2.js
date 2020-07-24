let rs = require('readline-sync')

class Usuario {
    constructor(){
        this.nome = rs.question('Digite seu nome de usuario: \n')
        this.email = rs.question('Digite seu email: \n')
        this.ende = rs.question('Informe seu endereco: \n')
        this.formaPag = rs.question('Informe a forma de pagamento: \n')
    }
    editarEndereco(endNovo){
    this.ende = endNovo
    }

    editarPagamento(novaForma){
    this.formaPag = novaForma
    }
}
let usuario = new Usuario
usuario.editarEndereco(rs.question('Insira o novo endereco: \n'))
usuario.editarPagamento(rs.question('Insira a nova forma de pagamento: \n'))
console.log(usuario) 