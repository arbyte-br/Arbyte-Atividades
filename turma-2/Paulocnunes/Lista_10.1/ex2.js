// Usando a classe do exercício anterior, crie métodos que representem possíveis ações do usuário no aplicativo.

let rs = require('readline-sync')

class Usuario {
  constructor() {
    this.nome = rs.question('Digite seu nome: \n')
    this.categoria = 'Passageiro'
    this.email = rs.question('Digite seu e-mail: \n')
    this.celular = rs.questionInt('Digite seu celular: \n')
    this.enderecoPrimario = rs.question('Digite o endereço de partida: \n')
    this.pagamentoPadrao = rs.question('Digite a forma de pagamento: \n')
  }

  solicitarNovaViagem(local, horario) {
    console.log(`Você vai de ${this.enderecoPrimario} para ${local} às ${horario} 'hrs.`)
    this.editarEnderecoPrimario(local)
  }

  editarEnderecoPrimario(enderecoNovo) {
    console.log(`Seu local: ${this.enderecoPrimario} foi alterado para: ${enderecoNovo}`)
    this.enderecoPrimario = enderecoNovo
  }
  
  adicionarFormaDePagamento(pagamento) {
    console.log(`Sua forma de pagamento: ${this.pagamentoPadrao} foi alterada para: ${pagamento}`)
    this.pagamentoPadrao = pagamento
  }

  adcionarCategoriaVeiculo(categoriaVeiculo) {
      console.log(`Seu veículo para essa viagem será um ${categoriaVeiculo}`)
  }
  // adicionar mais opções de ações que o usuário
  // uma idéia só: escolher forma de transporte. ex: carro, avião, moto, triciclo
  // adicionem mais informações ao usuário
}
let usuarioDeApp = new Usuario()

console.log("Bem vindo, " + usuarioDeApp.nome + "!")
console.log("O que você deseja fazer?")
console.log("[1] - Desejo solicitar nova viagem.")
console.log("[2] - Desejo alterar meu endereço.")
console.log("[3] - Desejo alterar forma de pagamento.")
console.log('[4] - Desejo escolher a categoria do veículo.')
let opcao = rs.questionInt("Escolha uma opção: ")

if (opcao === 1) {
  let local = rs.question("Qual o seu destino? ")
  let horario = rs.questionInt("Digite o horário da sua partida: ")
  usuarioDeApp.solicitarNovaViagem(local, horario)
}

else if (opcao === 2) {
   let enderecoNovo = rs.question('Qual o novo endereço?')
    usuarioDeApp.editarEnderecoPrimario(enderecoNovo)
  }

else if (opcao === 3) {
    let pagamento = rs.question('Digite a forma de pagamento (Cartão, Dinheiro ou Créditos): ')
        console.log('Forma de pagamento selecionada: ' + pagamento)
        usuarioDeApp.adicionarFormaDePagamento(pagamento)
    }

else if (opcao === 4) {
    let categoriaVeiculo = rs.question('Qual categoria de veículo deseja para sua viagem? (Básico, Sedan, SUV ou Luxo) \n') 
    console.log('Categoria selecionada: ' + categoriaVeiculo) 
    usuarioDeApp.adcionarCategoriaVeiculo(categoriaVeiculo) 
}
