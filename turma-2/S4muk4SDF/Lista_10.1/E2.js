let rs = require('readline-sync');

class User {
    constructor() {
        // this.nome = rs.question('Digite seu nome: ')
        // this.email = rs.question('Digite seu email: ')
        // this.celular = rs.questionInt('Digite seu número de celular: ')
        // this.localDePartida = rs.question('Digite o local de partida: ')
        // this.numeroPessoas = rs.question('Digite o número de pessoas para essa viagem: ')
    }

      solicitarNovaViagem(local, horario) {
        console.log(`Você vai de ${this.localDePartida} para ${local} às ${horario}.`)
      }
    
      editarlocalDePartida(enderecoNovo) {
        console.log(`Seu local: ${this.localDePartida} foi alterado para: ${enderecoNovo}`)
        this.localDePartida = enderecoNovo
      }
    
      adicionarFormaDePagamento(pagamento) {
        console.log(`Forma de pagamento: ${pagamento}`)
      }
    
      solicitarClasseVeiculo(classe){
        console.log(`Classe definida com sucesso: ${classe}`)
      }
    
      transportes (){
        if (this.numeroPessoas == 1) {
            console.log('Transportes disponíveis:')
            console.log("[1] - Carro - R$50,00")
            console.log("[2] - ônibus - R$30,00")
            console.log("[3] - Moto - R$40,00")
            console.log("[4] - Avião - R$100,00")
            console.log("[4] - Avião - R$100,00")
            let opcaoVeiculo = rs.questionInt("Escolha uma opção: ")
            console.log('Opção selecionada com sucesso!')

            console.log()

            switch (opcaoVeiculo) {
                case 1:
                    console.log()
            }
        
        } else if (this.numeroPessoas > 3) {
            console.log('Transportes disponíveis:')
            console.log("[2] - ônibus - R$30,00")
            console.log("[4] - Avião - R$100,00")
            console.log("[4] - Avião - R$100,00")
            let opcaoVeiculo = rs.questionInt("Escolha uma opção: ")
        }
    }
}

function acoesUsuario (){
    console.log('\n======================================\n')
    console.log(`Bem vindo ${user.nome}!`)
    console.log("O que você deseja fazer?")
    console.log("[1] - Desejo solicitar nova viagem")
    console.log("[2] - Desejo alterar meu endereço")
    console.log("[3] - Desejo adicionar forma de pagamento")
    console.log("[4] - Desejo escolher a classe do veículo")
    let opcao = rs.questionInt("Escolha uma opção: ")


    switch(opcao) {
        case 1:
         console.log('\n======================================\n')
         let local = rs.question("Digite seu destino: ")
         let horario = rs.questionInt("Digite o horário de partida: ")
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

        case 4:
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
         break;
    }
}


console.log('================= PREENCHA TODAS AS INFORMAÇÕES CORRETAMENTE! =================')

let user = new User()
acoesUsuario()



