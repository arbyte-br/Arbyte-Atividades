let rs = require('readline-sync')
class Usuario {
    constructor(nome, email, telefone, enderecoPrimario,) {
        this.nome = nome
        this.email = email
        this.telefone = telefone
        this.enderecoPrimario = enderecoPrimario
        this.pagamento = "Dinheiro"
        this.categoria = "Popular"
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
        console.log(`Você alterou a forma de pagamento por ${this.pagamento} para ${novaFormaDePagamento}.`)
        this.pagamento = novaFormaDePagamento
        console.log(`Mas lembre-se, dinheiro sempre será uma opção de pagamento.`)
    }
    mudarCategoria(categoria) {
        console.log(`Você alterou a categoria ${this.categoria} para ${categoria}`)
        this.categoria = categoria
        console.log("Mas lembre-se, a categoria Popular sempre será uma opção de transporte.")
    }
}
let usuarioDeApp = new Usuario("João", "victorps.joao@gmail.com", "11999999999", "Rua Amapá, 90")

console.log("Bem vindo, " + usuarioDeApp.nome + "!")
console.log("O que você deseja fazer?")
console.log("[1] - Desejo solicitar nova viagem")
console.log("[2] - Desejo alterar meu endereço")
console.log("[3] - Desejo adicionar forma de pagamento")
console.log("[4] - Desejo cadastrar ou alterar a categoria do carro")

let opcao = rs.questionInt("Escolha uma opção: ")
if (opcao === 1) {
    let local = rs.question("Qual o seu destino? ")
    let horario = rs.questionInt("Que horas? ")
    usuarioDeApp.solicitarNovaViagem(local, horario)

} else if (opcao === 2) {
    let enderecoNovo = rs.question('Qual o novo endereço?')
    usuarioDeApp.editarEnderecoPrimario(enderecoNovo)

} else if (opcao === 3) {
    let certeza = rs.questionInt(`Sua forma de pagamento e ${usuarioDeApp.pagamento}, deseja alterar ?
    \n[1] - SIM\n[2] - NAO \n`)

    switch (certeza) {
        case 1:
            let novaFormaDePagamento = rs.question('Qual a nova forma de pagamento ? ')
            usuarioDeApp.adicionarFormaDePagamento(novaFormaDePagamento)
            break
        case 2:
            console.log('Sua forma de pagamento continua sendo: ', usuarioDeApp.pagamento)
            break
        default:
            console.log("Opção inválida.")
    }
} else if (opcao === 4) {
    console.log(`Por padrão, a categoria dos carros que você solicita será popular.`)
    let alterarCategoria = rs.questionInt(`Sua categoria é ${usuarioDeApp.categoria}, deseja alterar ?
    \n[1] - SIM\n[2] - NAO \n`)

    switch (alterarCategoria) {
        case 1:
            let novaCategoria = rs.questionInt('Qual a nova categoria? \n[1] - Premium(Carros melhores)\n[2] - Executivo (Apenas 1 por viagem) \n[3] - Compartilhado(Divide a conta com mais pessoas)\n[4] - Popular(Padrão)\n')
            if (novaCategoria === 1) {
                usuarioDeApp.mudarCategoria("Premium")
            } else if (novaCategoria === 2) {
                usuarioDeApp.mudarCategoria("Executivo")
            } else if (novaCategoria === 3) {
                usuarioDeApp.mudarCategoria("Compartilhado")
            } else if (novaCategoria === 4) {
                usuarioDeApp.mudarCategoria("Popular")
            } else {
                console.log("Opção inválida.")
            }
            break
        case 2:
            console.log('Sua categoria continua sendo: ', usuarioDeApp.categoria)
            break
        default:
            console.log("Opção inválida.")
    }

}
