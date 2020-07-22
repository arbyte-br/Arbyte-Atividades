const rs = require('readline-sync')

class Usuario {
    formaPagamento = []
    constructor(nome, email, endereco, formaPagamentoPadrao){
        this.nome = nome;
        this.email = email;
        this.endereco = endereco;
        this.formaPagamentoPadrao = formaPagamentoPadrao;
    }
    novaViagem (destino){
        destino = rs.question('Para onde deseja ir? ')
        return console.log(`Sua viagem custará R$ 35,00 --> ${destino}`)
    }
    editarDestino(novoDestino){
        novoDestino = rs.question('Qual seu novo destino? ')
        return console.log(`Seu destino foi alterado. A viagem custará R$ 43,20 -> ${novoDestino}`)
    }
    adicionarFormaPag(novaForma){
        const formaPagamentoArray = []
        novaForma = rs.question('Adicionar nova forma de pagamento: ')
        formaPagamentoArray.push(novaForma)
        return console.log(`Adicionado com sucesso! Suas formas de pagamento são: ${formaPagamentoArray}`)
    }
}
const usuario = new Usuario()

console.log('O que você deseja fazer?\n================================')
let opcao = rs.question('Nova viagem --- Editar destino --- Adicionar forma de pagamento\n').toUpperCase()

switch (opcao){
    case 'NOVA VIAGEM':
        usuario.novaViagem()
        break;

    case 'EDITAR DESTINO':
        usuario.editarDestino() 
        break;
        
    case 'ADICIONAR FORMA DE PAGAMENTO':
        usuario.adicionarFormaPag()    
        break;
        default:
            opcao = rs.question('Opcao invalida. Escolha uma das opcoes abaixo:\n==============\nNova viagem --- Editar destino --- Adicionar forma de pagamento\n')
        break;
}