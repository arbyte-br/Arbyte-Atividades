// 3(OBRIGATÓRIO) - Usando a classe do exercício anterior,
// crie métodos que representem possíveis ações do usuário no aplicativo.
//EXERCÍCIO SUGERIDO EM AULA:

  const rs = require('readline-sync')
  class Usuario {
    constructor() {
      this.nome = 'Pedro'
      this.categoria = 'passageiro'
      this.email = 'pedro@pedro.com.vc'
      this.celular = '19999999999'
      this.enderecoPrimario = 'Rua dos Bobos, 0'
      this.pagamento = 'Vale-Refeição'
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
    adicionarFormaDePagamento(novaFormaDePagamento) {
      console.log(`Além da forma de pagamento ${this.pagamento}, você está adicionando a forma de pagamento ${novaFormaDePagamento}`)
      // quando eu adicionar uma forma de pagamento
      // eu quero ter a forma de pagamento original disponível MAAAAIS
      // a nova forma de pagamento
    }
    meioDeTransporte(transporte) {
      console.log(`Sua viagem será feita de ${transporte}`)
     
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
  console.log('[4] - Escolha o tipo de transporte')
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
  else {
      if (opcao === 3) {
        let novaFormaDePagamento = rs.question('Adicione mais uma forma de pagamento:');
        usuarioDeApp.adicionarFormaDePagamento(novaFormaDePagamento)
      }
  else {
        if (opcao === 4) {
          let transporte = rs.question('Você deseja fazer sua viagem de Carro ou de Moto?')
          usuarioDeApp.meioDeTransporte(transporte)
        

        }
      }
      // aqui irei adicionar uma forma de pagamento!!!!
      // Fazer a parte 3 e inventar mais duas funções
    }
  }