let rs = require('readline-sync');

class User {
    constructor() {
        this.nome = rs.question('Digite seu nome: ')
        this.email = rs.question('Digite seu email: ')
        this.celular = rs.questionInt('Digite seu número de celular: ')
        this.localDePartida = rs.question('Digite o local de partida: ')
        this.numeroPessoas = rs.question('Digite o número de pessoas para essa viagem: ')
    }

      solicitarNovaViagem(local, horario) {
        console.log(`Você vai de ${this.localDePartida} para ${local} às ${horario}.`)
      }
    
      editarlocalDePartida(enderecoNovo) {
        console.log(`Seu local de partida foi alterado para: ${enderecoNovo}`)
        this.localDePartida = enderecoNovo
        acoesUsuario()
      }
    
      adicionarFormaDePagamento(pagamento) {
        console.log(`Forma de pagamento: ${pagamento}`)
        acoesUsuario()
      }
    
      solicitarClasseVeiculo(classe){
        console.log(`Classe definida com sucesso: ${classe}`)
        
      }

      cancelarViagem (){
        console.log('Fechando o programa...');
      }
}

function validacaoEmail (email){
    if(email.includes('@') && email.includes('.com')) {
        return true
    } else {
        return false
    }
}

function meiosDeTransporte (numeroPessoas){

  if (numeroPessoas == 1) {
      console.log('Transportes disponíveis:')
      console.log("[1] - Carro - R$50,00")
      console.log("[2] - Ônibus - R$30,00")
      console.log("[3] - Moto - R$40,00")
      console.log("[4] - Metrô - R$25,00")
      console.log("[5] - Avião - R$100,00")
      let opcaoVeiculo = rs.questionInt("Escolha uma opção: ")

      switch (opcaoVeiculo) {

          case 1:

            console.log('\n======================================\n')
            console.log("[1] - Econômico")
            console.log("[2] - Black")
            console.log("[3] - Burguesinho")
            let opcaoClasse = rs.questionInt("Escolha uma opção: ")

            switch(opcaoClasse){
                case 1:
                 user.solicitarClasseVeiculo('Econômico')
                 break;
                case 2:
                 user.solicitarClasseVeiculo('Black')
                 break;
                case 3:
                 user.solicitarClasseVeiculo('Burguesinho')
                 break;
            }

            console.log('Passagem de Carro comprada pelo valor de R$50,00.');
            break;
  
          case 2:
            console.log('Passagem de Ônibus comprada pelo valor de R$30,00.');
            break;

          case 3:
            console.log('Passagem de Moto comprada pelo valor de R$40,00.');
            break;

          case 4:
            console.log('Passagem de Metrô comprada pelo valor de R$25,00.');
            break;

          case 5:
            console.log('Passagem de Avião comprada pelo valor de R$100,00');
            break;
      }
  
  } else if (numeroPessoas <= 4) {
      console.log('Transportes disponíveis:')
      console.log("[1] - Ônibus - R$30,00")
      console.log("[2] - Metrô - R$25,00")
      console.log("[3] - Avião - R$100,00")
      console.log("[4] - Carro - R$50,00")
      let opcaoVeiculo = rs.questionInt("Escolha uma opção: ")

      switch (opcaoVeiculo) {
        
        case 1:
          console.log(`Valor das passagens: ${`R$${numeroPessoas * 30},00.`}`);
          break;
        
        case 2:
          console.log(`Valor das passagens: ${`R$${numeroPessoas * 25},00.`}`);
          break;

        case 3:
          console.log(`Valor das passagens: ${`R$${numeroPessoas * 100},00.`}`);
          break;

        case 4:
          console.log(`Valor das passagens: ${`R$${numeroPessoas * 50},00.`}`);
          break;

    }
  }
}

function acoesUsuario (){
    console.log('\n======================================\n')
    console.log(`Bem vindo ${user.nome}!\n`)
    console.log("O que você deseja fazer?")
    console.log("[1] - Desejo solicitar nova viagem")
    console.log("[2] - Desejo alterar meu endereço")
    console.log("[3] - Desejo adicionar forma de pagamento")
    console.log("[4] - Desejo escolher a classe do veículo")
    console.log("[5] - Cancelar viagem")
    let opcao = rs.questionInt("Escolha uma opção: \n")

    switch(opcao) {
        case 1:
         console.log('\n======================================\n')
         let local = rs.question("Digite seu destino: ")
         let horario = rs.questionInt("Digite o horário de partida (Ex: 12:00): ")
         console.log('\n======================================\n')
         meiosDeTransporte(user.numeroPessoas)
         user.solicitarNovaViagem(local, horario)
         break;
         
        case 2:
         console.log('\n======================================\n')
         let enderecoNovo = rs.question('Digite o novo endereço: ')
         user.editarlocalDePartida(enderecoNovo)
         break;

        case 3:
         console.log('\n======================================\n')
         let pagamento = rs.question("Digite a forma de pagamento: ")
         user.adicionarFormaDePagamento(pagamento)
         break;

        

         case 5:
           user.cancelarViagem()
      }
   }

console.log('================= PREENCHA TODAS AS INFORMAÇÕES CORRETAMENTE! =================\n')

let user = new User()

if (validacaoEmail(user.email) === true) {
  acoesUsuario()
} else {
  console.log('Email inválido!');
}
