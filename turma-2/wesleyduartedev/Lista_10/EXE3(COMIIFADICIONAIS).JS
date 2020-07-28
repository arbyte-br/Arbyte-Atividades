// 2(OBRIGATÓRIO) - Usando a classe do exercício anterior,
// crie métodos que representem possíveis ações do usuário no aplicativo.
let rs = require('readline-sync')
class Usuario {
    constructor() {
        this.nome = 'Wesley'
        this.categoria = 'passageiro'
        this.email = rs.question(`Digite o seu email: `) ;
        this.celular = rs.question(`Digite seu numero de telefone: `) 
        this.enderecoPrimario = 'Rua dos Bobos, 0'
        this.pagamento = 'Vale-Refeição'
        this.tipodouber = 'Uber X'
        this.rota  = "Sim"
        this.transporte ="Carro"
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
    adicionarFormaDePagamento(novopagamento) {
        console.log(`Sua forma de pagamento era ${this.pagamento} foi alterado por: ${novopagamento}`)
        this.pagamento = novopagamento

        // quando eu adicionar uma forma de pagamento
        // eu quero ter a forma de pagamento original disponível MAAAAIS
        // a nova forma de pagamento
    }
    adicionarTipoDoUber(novotipoUber) {
        console.log(`Seu tipo do uber é ${this.tipodouber} foi alterado para : ${novotipoUber}`)
        this.tipodouber = novotipoUber;
    }
    adicionarRota(novaRota){
         if (novaRota === "Sim"){
        console.log(`Voce adicionou sua rota como preferencial`);
         this.rota = novaRota;
         
         }
         else {
             console.log("Voce adicinou como preferencia a rota do motorista");
             this.rota = novaRota;
             
             

         }
    }
    // adicionar mais opções de ações que o usuário
    // uma idéia só: escolher forma de transporte. ex: carro, avião, moto, triciclo
    // adicionem mais informações ao usuário
}
let usuarioDeApp = new Usuario()

console.log(`O uso de mascara é obrigatória para seguir viagem!!`)
let mascara = rs.question("Você esta usando mascarca? ")
if (mascara === 'Sim' || mascara === 'sim' || mascara ==='ok')  {
    console.log("Bem vindo, " + usuarioDeApp.nome + "!")
    console.log("O que você deseja fazer?")
    console.log("[1] - Desejo solicitar nova viagem")
    console.log("[2] - Desejo alterar meu endereço")
    console.log("[3] - Desejo adicionar forma de pagamento")
    console.log("[4] - Informe qual tipo de uber que você quer ");
    console.log('[5] - Alterar o tipo de rota (de sua preferencia ou não)');

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
                let novopagamento = rs.question(`Qual o novo pagamento?`)
                usuarioDeApp.adicionarFormaDePagamento(novopagamento);
                // aqui irei adicionar uma forma de pagamento!!!!
                // Fazer a parte 3 e inventar mais duas funções
            }

            else {
                if (opcao === 4) {
                    let novotipoUber = rs.question('Digite seu novo tipo de uber: ')
                    usuarioDeApp.adicionarTipoDoUber(novotipoUber);
                }

                else {
                    if (opcao === 5){
                        let novaRota = rs.question('Voce tem rota preferencial? (Sim ou Não): ') 
                        usuarioDeApp.adicionarRota(novaRota);
    
                    }
                }
    
            }

           
        }
         


    }
   

}

else {
     if(mascara === 'Não'){
    
     }
     console.log("Favor utilize sua mascara e pessa nova viagem")
}
//console.log('-------------Ultimas alterasoes de usuário---------------');
//console.log(usuarioDeApp);