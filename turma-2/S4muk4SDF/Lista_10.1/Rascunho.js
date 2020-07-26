// 2(OBRIGATÓRIO) - Usando a classe do exercício anterior,
// crie métodos que representem possíveis ações do usuário no aplicativo.
let rs = require('readline-sync')

class Usuario {
  constructor(){
    this.nome 
    this.categoria = 'passageiro'
    this.email = 'pedro@pedro.com.vc'
    this.celular = '19999999999'
    this.enderecoPrimario = 'Rua dos Bobos, 0'
    this.pagamento = 'Vale-Refeição'
  }

  solicitarNovaViagem(local, horario) {
    console.log(`Você vai de ${this.enderecoPrimario} para ${local} às ${horario}.`)
    this.editarEnderecoPrimario(local)
  }

  editarEnderecoPrimario(enderecoNovo) {
    console.log(`Seu local: ${this.enderecoPrimario} foi alterado por: ${enderecoNovo}`)
    this.enderecoPrimario = enderecoNovo
  }

  adicionarFormaDePagamento(pagamento) {
    console.log(`Forma de pagamento: ${pagamento}`)
  }

  solicitarClasseVeiculo(classe){
    console.log(``)
  }

}


let usuarioDeApp = new Usuario()


let user = rs.question("Digite seu nome: ")
usuarioDeApp.nome = user
console.log("==========================================")
console.log("Bem vindo, " + usuarioDeApp.nome + "!")
console.log("O que você deseja fazer?")
console.log("[1] - Desejo solicitar nova viagem")
console.log("[2] - Desejo alterar meu endereço")
console.log("[3] - Desejo adicionar forma de pagamento")
console.log("[4] - Desejo escolher a classe do veículo")
let opcao = rs.questionInt("Escolha uma opção: ")


if (opcao === 1) {
  let local = rs.question("Qual o seu destino? ")
  let horario = rs.questionInt("Que horas? ")
  usuarioDeApp.solicitarNovaViagem(local, horario)
}

else if ((opcao === 2)) {
  let enderecoNovo = rs.question('Qual o novo endereço? ')
   usuarioDeApp.editarEnderecoPrimario(enderecoNovo)
}

else if (opcao === 3) {
  let pagamento = rs.question("Qual a forma de pagamento? ")
  usuarioDeApp.adicionarFormaDePagamento(pagamento)
}

else if (opcao === 4) {
  console.log("[1] - Econômico")
  console.log("[2] - Black")
  console.log("[3] - Burguesinho")
  let opcaoClasse = rs.questionInt("Escolha uma opção: ")

  if (opcaoClasse === 1) {
      usuarioDeApp.solicitarClasseVeiculo(opcaoClasse)
  }

  else if (opcaoClasse === 2) {
    usuarioDeApp.solicitarClasseVeiculo(opcaoClasse)
  }

  else if (opcaoClasse === 3) {
    usuarioDeApp.solicitarClasseVeiculo(opcaoClasse)
  }
}



const email = 'italo@email.com'
function emailEhValido(email) {
    if(email.includes('@') && email.includes('.com')) {
        return true
    } else {
        return false
    }
}
