// Usando a classe do exercício anterior,
//  crie métodos que representem possíveis ações do usuário no aplicativo.
//  ex: solicitarNovaViagem(local), editarEnderecoPrimario(endereco),
//   adicionarFormaDePagamento(pagamento)

let rs = require('readline-sync')

class Usuario {
    constructor(){
        this.nome = rs.question('Digite seu nome de usuario: \n')
        this.email = rs.question('Digite seu email: \n')
        this.ende = rs.question('Informe seu endereço: \n')
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
usuario.editarEndereco(rs.question('Insira o novo endereço: \n'))
usuario.editarPagamento(rs.question('Insira a nova forma de pagamento: \n'))
console.log(usuario)