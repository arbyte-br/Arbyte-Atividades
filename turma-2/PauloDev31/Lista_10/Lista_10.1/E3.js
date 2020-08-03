// 2(OBRIGATÓRIO) - Usando a classe do exercício anterior,
// crie métodos que representem possíveis ações do usuário no aplicativo.
let rs = require('readline-sync')
class Usuario {
    constructor() {
        this.nome = rs.question('Digite seu nome, por favor: \n')
        this.categoria = 'passageiro'
        this.email = rs.question('Digite seu e-mail, por favor: \n')
        this.celular = rs.question('Insira seu telefone para contato: \n')
        this.enderecoPrimario = rs.question('Informe seu endereço: \n')
        this.pagamento = rs.question('Qual a forma de pagamento?\n')
        this.pessoas = rs.question('Quantas pessoas irão nessa viagem? \n')
    }
    solicitarNovaViagem(local, horario) {
        // aqui ele passa as informações da viagem
        console.log(`Você vai de ${this.enderecoPrimario} para ${local} às ${horario}.`)
        // já altera o endereço que o usuário está atualmente
        this.editarEnderecoPrimario(local)
    }
    editarEnderecoPrimario(enderecoNovo) {
        // fala qual era o endereço antigo
        console.log(`Seu local: ${this.enderecoPrimario} foi alterado por: ${enderecoNovo}`)
        // e depois muda para o endereço novo
        this.enderecoPrimario = enderecoNovo
    }
    adicionarFormaDePagamento(pagamento) {
        // quando eu adicionar uma forma de pagamento
        console.log(`Sua forme de pagamento foi alterado de ${this.pagamento} para ${pagamento}.`)
        this.pagamento = pagamento
        // eu quero ter a forma de pagamento original disponível MAAAAIS
        // a nova forma de pagamento
    }
    alterarNumeroDePessoas(pessoas) {
        console.log(`Numero alterado para ${pessoas}`)
        this.pessoas = pessoas

    }
    // adicionar mais opções de ações que o usuário
    // uma idéia só: escolher forma de transporte. ex: carro, avião, moto, triciclo
    // adicionem mais informações ao usuário
}
let usuarioDeApp = new Usuario()
console.log("Bem vindo, " + usuarioDeApp.nome + " que você deseja fazer?")

let opcoes = [" Desejo solicitar nova viagem",
    " Desejo alterar meu endereço",
    "Desejo adicionar forma de pagamento",
    "Alterar o numero de pessoas"]
let opcao = rs.keyInSelect(opcoes) + 1

if (opcao === 1) {
    let local = rs.question("Qual o seu destino? ")
    let horario = rs.questionInt("Que horas? ")
    usuarioDeApp.solicitarNovaViagem(local, horario)
}
else {
    if (opcao === 2) {
        let enderecoNovo = rs.question('Qual o novo endereço?')
        usuarioDeApp.editarEnderecoPrimario(enderecoNovo)
    }
    else {
        if (opcao === 3) {
            let novaFormaPag = rs.question('Qual sua nova forma de pagamento? \n')
            usuarioDeApp.adicionarFormaDePagamento(novaFormaPag)
        }
        else {
            if (opcao === 4) {
                let alterarPessoas = rs.questionInt("Qual o novo numero de pessoas? \n")
                usuarioDeApp.alterarNumeroDePessoas(alterarPessoas)
            }

        }
    }
}

