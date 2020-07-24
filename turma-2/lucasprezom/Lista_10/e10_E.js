// 2(OBRIGATÓRIO) - Usando a classe do exercício anterior,
// crie métodos que representem possíveis ações do usuário no aplicativo.

let rs = require('readline-sync')
class Usuario {
    constructor() {
        this.nome = 'Lucas'
        this.categoria = 'passageiro'
        this.email = 'lucas@gmail.com'
        this.celular = '19999999999'
        this.enderecoPrimario = 'Rua dos Bobos, 0'
        this.pagamento = 'Cupom'
        this.veiculo = 'Veiculo padrão'
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
    adicionarFormaDePagamento(pagamentoNovo) {
        this.pagamento = `${this.pagamento} , ${pagamentoNovo}`
        console.log(`As sua formas de pagamento são: ${this.pagamento}`)


        // quando eu adicionar uma forma de pagamento
        // eu quero ter a forma de pagamento original disponível MAAAAIS
        // a nova forma de pagamento
    }
    escolherVeiculo(veiculoNovo) {
        console.log(`Você alterou seu transporte de ${this.veiculo} para ${veiculoNovo}`)
        this.veiculo = veiculoNovo

    }
    // adicionar mais opções de ações que o usuário
    // uma idéia só: escolher forma de transporte. ex: carro, avião, moto, triciclo
    // adicionem mais informações ao usuário
}
let usuarioDeApp = new Usuario()

console.log("Bem vindo, " + usuarioDeApp.nome + "!")
console.log("O que você deseja fazer?")
console.log("[1] - Desejo solicitar nova viagem")
console.log("[2] - Desejo alterar meu endereço")
console.log("[3] - Desejo adicionar forma de pagamento")
console.log("[4] - Desejo escolher o transporte")
let opcao = rs.questionInt("Escolha uma opção: ")
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
    else if (opcao === 3) {
        console.log("Qual a forma de pagamento?")
        console.log("[1] - Cartão")
        console.log("[2] - Dinheiro")
        console.log("[3] - 3 galinhas")
        let pagamentoNovo = ["null", "Cartão", "Dinheiro", "3 galinhas"]
        let respostaPag = rs.question("Escolha uma opção: ")

        usuarioDeApp.adicionarFormaDePagamento(pagamentoNovo[respostaPag])
    } 
    
    else (opcao === 4) 
    {
        console.log("Qual meio de transporte escolhe?")
        console.log("[1] - Carro Padrão")
        console.log("[2] - Moto")
        console.log("[3] - 3 galinhas")
        let veiculoNovo = ["null", "Carro Padrão", "Moto", "3 galinhas"]
        let respostaVeic = rs.question("Escolha uma opção: ")

        usuarioDeApp.escolherVeiculo(veiculoNovo[respostaVeic])

    }
}