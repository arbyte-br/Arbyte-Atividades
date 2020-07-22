const rs = require('readline-sync')

const valorKm = 5.0
const calcularPreco = (distancia) => {
    return valorKm*distancia
}
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
        return console.log(`Sua viagem custará ${calcularPreco(50)} --> ${destino}`)
    }
    editarDestino(novoDestino){
        novoDestino = rs.question('Qual seu novo destino? ')
        return console.log(`Seu destino foi alterado. A viagem custará ${calcularPreco(50)} --> ${novoDestino}`)
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
class UsuarioMotorista extends Usuario{
    constructor(nome, email, endereco, formaPagamentoPadrao){
        this.nome = nome;
        this.email = email;
        this.endereco = endereco;
        this.formaPagamento = formaPagamentoPadrao;
    }
        
        receberViagem (destino){
            destino = usuario.destino
            return console.log(`Sua viagem custará ${calcularPreco(50)} --> ${this.destino}`)
        }
        editarDestino(novoDestino){
            novoDestino = rs.question('Qual seu novo destino? ')
            return console.log(`Seu destino foi alterado. A viagem custará ${calcularPreco(50)} --> ${novoDestino}`)
        }
        adicionarFormaPag(novaForma){
            const formaPagamentoArray = []
            novaForma = rs.question('Adicionar nova forma de pagamento: ')
            formaPagamentoArray.push(novaForma)
            return console.log(`Adicionado com sucesso! Suas formas de pagamento são: ${formaPagamentoArray}`)
        }
    }
const usuarioMotorista = new UsuarioMotorista()
usuarioMotorista.receberViagem()