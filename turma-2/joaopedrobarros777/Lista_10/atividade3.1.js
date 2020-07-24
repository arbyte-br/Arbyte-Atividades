let rs = require('readline-sync')

class Usuario {
    constructor() {
      this.nome = 'Pedro'
      this.categoria = 'passageiro'
      this.email = 'pedro@pedro.com.vc'
      this.celular = '19999999999'
      this.enderecoPrimario = 'Rua dos Bobos, 0'
      this.pagamento = 'Vale-Refeição'
      this.carro = "corsa"
      this.drink = "O que voce quiser, temos tudo!"
      this.motorista = "Tia do uber"
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
      console.log(`Voce alterou a forma de pagamento de ${this.pagamento} para ${novaFormaDePagamento}.`)
      this.pagamento = novaFormaDePagamento
  }
  escolhaDoCarro(novoCarro) {
      console.log(`Voce alterou o carro de ${carro} para ${novoCarro}.`)
      this.carro = novoCarro
  }
  adicionarDrink(escolhaDoDrink) {      
    console.log(`Voce escolheu o drink ${escolhaDoDrink}`)
    this.drink = escolhaDoDrink
  }
  carroAutonomo(semMotorista) {
    console.log(`Voce alterou o motorista de ${this.motorista} para ${semMotorista}`)
  }
  }
  
  let usuarioDeApp = new Usuario()

  console.log("Bem vindo, " + usuarioDeApp.nome + "!")
  console.log("O que você deseja fazer?")
  console.log("[1] - Desejo solicitar nova viagem")
  console.log("[2] - Desejo alterar meu endereço")
  console.log("[3] - Desejo adicionar forma de pagamento")
  console.log("[4] - Desejo alterar o carro")
  console.log("[5] - Desejo drinks na corrida")
  console.log("[6] - Desejo carro sem motorista")
  
  let opcao = rs.questionInt("Escolha uma opçao: ")
  
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
      let novaFormaDePagamento = rs.question("Nova forma de pagamento:\n")
      usuarioDeApp.adicionarFormaDePagamento(novaFormaDePagamento)
    } else if (opcao === 4) {
      let novoCarro = rs.question("Qual carro deseja?\n")
      usuarioDeApp.escolhaDoCarro(novoCarro)
    } else if (opcao === 5) {
      let escolhaDoDrink = rs.question("Qual drink?")
      usuarioDeApp.adicionarDrink(escolhaDoDrink)
    } else {
      let semMotorista = "carro autonomo"
      usuarioDeApp.carroAutonomo(semMotorista)
    }
  }