// Usando a classe do exercício anterior, crie métodos
// que representem possíveis ações do usuário no aplicativo.

    // quando eu adicionar uma forma de pagamento
    // eu quero ter a forma de pagamento original disponível MAAAAIS
    // a nova forma de pagamento

  // adicionar mais opções de ações que o usuário
  // uma idéia só: escolher forma de transporte. ex: carro, avião, moto, triciclo
  // adicionem mais informações ao usuário

const rs = require('readline-sync');

let dadosUsers = rs.question('Login: ')
let passwordUsers = rs.questionInt('Password: ')

if(dadosUsers == 'Bruno' && passwordUsers == '123456') {    
    class Usuario {
        constructor() {
          this.nome = 'Bruno'
          this.categoria = 'passageiro'
          this.email = 'bruno@bruno.com'
          this.celular = '19999999999'
          this.enderecoPrimario = 'Rua dos Bobos, 0,'
          this.pagamento = 'Dinheiro | Débito | Crédito | Uber Cash'
          this.carro = 'carro'
          this.onibus = 'onibus'
        }
    
        solicitarNovaViagem (local, hora) {
            console.log(`Você vai de ${this.enderecoPrimario} para ${local} as ${hora}`);
            this.editarEnderecoPrimario(local);
        }
    
        editarEnderecoPrimario (endereco) {
            console.log(`Seu local: ${this.enderecoPrimario} foi alterado para: ${endereco}`);
            this.enderecoPrimario = endereco;
        }
    
        adicionarFormaDePagamento (pagamento){
            console.log(`A forma de pagamento aceita é ${this.pagamento}. E a forma de pagamento selecionada é ${pagamento}`);
            this.pagamento = pagamento;
        }
        
        selecioneOCarro (onibus) {
            console.log(`O meio de transporte selecionado é ${this.carro}`);
            this.carro = onibus;
        }

        selecioneOOnibus (carro) {
            console.log(`O meio de transporte selecionado é ${this.onibus}`)
            this.onibus = carro;
        }
    
    }
    
    let usuario = new Usuario();
    console.log('Bem vindo usuario ' + usuario.nome + '!');
    
    console.log('Selecione uma das opções abaixo: ');
    console.log('[1] - Solicitar nova viagem');
    console.log('[2] - Alterar endereço');
    console.log('[3] - Adicionar forma de pagamento');
    
    let opcao = rs.questionInt('Escolha uma opcao: ')
    
    if (opcao == 1) {
        console.log('[4] - Pedir um carro')
        console.log('[5] - Pedir um onibus')
        let transporte = rs.question('Selecione o meio de transporte: ')

        let local = rs.question('Qual o destino: ');
        let hora = rs.questionInt('Qual o horario: ');
        usuario.solicitarNovaViagem(local, hora);
        if (transporte == 4) {
            usuario.selecioneOCarro(transporte)
    } else if(transporte == 5) {
            usuario.selecioneOOnibus(transporte);
    } else {
        console.log('erro')
    }
    } 
    else if (opcao == 2 ) {
        let endereco = rs.question('Qual o novo endereco: ');
        usuario.editarEnderecoPrimario(endereco);
    }
    else {
        let pagamento = rs.question('Qual a nova forma de pagamento: ');
        usuario.adicionarFormaDePagamento(pagamento)
    }
} else {
    console.log('Login or password invalid')
}

