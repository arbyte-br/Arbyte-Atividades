let rs = require('readline-sync')

class Usuario {
    constructor() {
        this.nome = 'Rafael'// rs.question('Qual o seu nome: ')
        this.categoria = 'passageiro' // categoria
        this.email = 'rafael.marinho96@hotmail.com.'// rs.question('Digite seu e-mail: ')
        this.celular = '1140028922' // rs.questioInt(Digite um número de telefone: )
        this.enderecoPrimario = 'Rua dos Bobos, 0'
        this.formaPagamento = 'Vale-Refeição'
        this.transporte = null
    }
    solicitarNovaViagem(local, horario) {
        console.log(`Você vai de ${this.enderecoPrimario} para ${local} às ${horario}.`)
        this.editarEnderecoPrimario(local)
    }
    editarEnderecoPrimario(enderecoNovo) {
        console.log(`Seu local: ${this.enderecoPrimario} foi alterado por: ${enderecoNovo}`)
        this.enderecoPrimario = enderecoNovo
    }
    adicionarFormaDePagamento(novaFormaDePagamento) {
        this.formaPagamento += novaFormaDePagamento

    }
    solicitarTipoTransporte(veiculo)
}
let usuarioDeApp = new Usuario() // Usuario(nome,categoria,email,celular.....etc) com as devidas validações.
console.log("Bem vindo, " + usuarioDeApp.nome + "!")
console.log("O que você deseja fazer?")
let opcoes = ['Solicitar nova viagem', 'Alterar meu endereço', 'Adicionar outra forma de pagamento']
let opcao = rs.keyInSelect(opcoes, "Escolha uma opção: ")
if (opcao === 1) {
    let local = rs.question("Qual o seu destino? ")
    let horario = rs.questionInt("Que horas? ")
    usuarioDeApp.solicitarNovaViagem(local, horario)
}
else if (opcao === 2) {
    let enderecoNovo = rs.question('Qual o novo endereço?')
    usuarioDeApp.editarEnderecoPrimario(enderecoNovo)
}
else if (opcao === 3) {
    let formasDePagamento = ['Dinheiro', 'Cartão de crédito', 'Cartão de débito', 'Cheque',]
    let novaFormaDePagamento = rs.keyInSelect(formasDePagamento, 'Qual a nova forma de pagamento?')
}
}

let categoria = rs.question('Você quer criar uma conta de "PASSAGEIRO" ou "MOTORISTA"? \n').toLowerCase

while (categoria != 'passageiro' || categoria != 'motorista') {
    categoria = rs.question('***** Digite uma opção válida ***** \n Você quer criar uma conta de "PASSAGEIRO" ou "MOTORISTA"? \n)
}