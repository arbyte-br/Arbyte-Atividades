let rs = require('readline-sync')

class Usuario {
  constructor() {
    this.nome = rs.question ('Qual seu nome? \n')
    this.sobrenome = rs.question('Qual seu sobrenome? \n')
    console.clear()
    this.categoria = 'passageiro'  
    this.email = rs.question('Qual o seu e-mail? \n')
    console.clear()
    this.celular = rs.question('Informe seu número de telefone? \n')
    console.clear()
    this.enderecoPrimario = rs.question('Qual o seu endereço? \n')
    console.clear()
    this.pagamento = rs.question('Qual a forma de Pagamento? \n')
    console.clear()

  }

 emailEhValido() {
    if(this.email.includes('@') && this.email.includes('.com')) {
        return true
    } else {
        return false
    }
}

  solicitarNovaViagem(local, horario) {
    // aqui ele passa as informações da viagem
    console.log(`Você vai de ${this.enderecoPrimario} para ${local} às ${horario}.`)
    // já altera o endereço que o usuário está atualmente
    this.editarEnderecoPrimario(local)
  }
  editarEnderecoPrimario(enderecoNovo) {
    // fala qual era o endereço antigo
    console.log(`Seu local: ${this.enderecoPrimario} foi alterado para: ${enderecoNovo}`)
    // e depois muda para o endereço novo
    this.enderecoPrimario = enderecoNovo
  }
  adicionarFormaDePagamento(pagamento) {
    // quando eu adicionar uma forma de pagamento
    // eu quero ter a forma de pagamento original disponível MAAAAIS
    // a nova forma de pagamento
  }
  // adicionar mais opções de ações que o usuário
  // uma idéia só: escolher forma de transporte. ex: carro, avião, moto, triciclo
  // adicionem mais informações ao usuário
}
let usuarioDeApp = new Usuario()
console.log("Bem vindo, " + usuarioDeApp.nome + ' ' +  usuarioDeApp.sobrenome +  "!")
console
console.log("O que você deseja fazer?")
console.log("[1] - Desejo solicitar uma nova viagem")
console.log("[2] - Desejo alterar meu Destino")
console.log("[3] - Desejo adicionar forma de pagamento")
let opcao = rs.questionInt("Escolha uma opção: ")
if (opcao === 1) {
  let local = rs.question("Qual o seu destino? \n")
  let horario = rs.questionInt("Que horario deseja partir? \n")
  usuarioDeApp.solicitarNovaViagem(local, horario)
}
else {
  if (opcao === 2) {
    let enderecoNovo = rs.question('Qual o novo endereço de destino? \n')
    usuarioDeApp.editarEnderecoPrimario(enderecoNovo)
  }
  else {
    // aqui irei adicionar uma forma de pagamento!!!!
    // Fazer a parte 3 e inventar mais duas funções
  }
}