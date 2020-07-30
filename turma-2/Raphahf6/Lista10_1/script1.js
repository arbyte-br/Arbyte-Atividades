const rs = require('readline-sync')

class Usuario {
    constructor(nome, email, cpf, saldo) {
        this.nome = nome
        this.email = email
        this.cpf = cpf
        this.endereco
        this.formaDePagamento = []
        this.saldo = saldo

    }

    editarEnderecoPrimario(enderecoEditado) {
        this.endereco = enderecoEditado
    }

    adicionarFormaDePagamento(novaFormaDePagamento) {
        this.formaDePagamento.push(novaFormaDePagamento)
    }


}


class Motorista99 {
    constructor(nome, email, cpf, cnh, telefone) {
        this.nome = nome
        this.cpf = cpf
        this.cnh = cnh
        this.email = email
        this.telefone = telefone
    }

    getCpf() {
        return (`CPF: ${this.cpf}`)
    }
}

calcularValorDaCorrida = (kilometros) => {
    valorDaCorrida = kilometros * 2
    return valorDaCorrida

}

solicitarNovaViagem = (usuario99, kilometros) => {
    let valorDaCorrida = calcularValorDaCorrida(kilometros)
    console.log('Processando...')
    setTimeout(() => {
        console.log(`A sua corrida ficara no valor de ${valorDaCorrida} reais...`)
        if (usuario99.saldo >= valorDaCorrida) {
            console.log('Solicitando nova viagem...')
        } else {
            console.log('Saldo insuficiente...')
        }
    }, 1000);


}

criarUsuario = () => {
    console.log('Bem vindo ao aplicativo 99, agora vamos criar seu novo usuario...')

    nome = rs.question('Digite o seu nome por favor: ')
    email = rs.question('Digite o seu email por favor: ')
    cpf = rs.questionInt('Digite o numero do seu cpf: ')
    saldo = rs.questionFloat('Digite quanto deseja adicionar ao seu saldo: ')
    const usuario = new Usuario(nome, email, cpf, saldo)
    console.log('Criando o seu usuario...')

    console.log(`${usuario.nome}. Bem vindo ao aplicativo 99!`)

    return usuario
}

criarMotorista = () =>{
    console.log('Agora vamos criar seu perfil de motorista99...')
    let nome = rs.question('Digite o seu nome: ')
    let email = rs.question('Digite o seu email: ')
    let telefone = rs.questionInt('Digite o numero do seu celular: ')
    let cpf = rs.questionInt('Digite o numero do seu cpf: ')
    let cnh = rs.questionInt('Digite o numero da sua cnh: ')

    let motorista = new Motorista99(nome, email, cpf, cnh, telefone)

    return motorista
}

let novoUsuario = criarUsuario()

solicitarNovaViagem(novoUsuario, 50)






