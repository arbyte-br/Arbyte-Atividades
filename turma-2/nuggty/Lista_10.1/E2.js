// 2(OBRIGATÓRIO) - Usando a classe do exercício anterior,
// crie métodos que representem possíveis ações do usuário no aplicativo.
let rs = require('readline-sync')
class Usuario {
  constructor() {
    this.nome = 'Robert';
    this.categoria = 'passageiro';
    this.email = 'robert.pdj@outlook.com';
    this.celular = '11977637839';
    this.enderecoPrimario = 'Rua dos Bobos, 0';
    this.pagamento = 'Cartão de Crédito';
    this.transporte = 'Bicicleta';
    this.paradas = 1;
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
    // quando eu adicionar uma forma de pagamento
    // eu quero ter a forma de pagamento original disponível MAAAAIS
    // a nova forma de pagamento
    console.log('Você alterou '+ this.pagamento +' para '+ novaFormaDePagamento +'!')
    this.pagamento = novaFormaDePagamento
  }
  // adicionar mais opções de ações que o usuário
  // uma idéia só: escolher forma de transporte. ex: carro, avião, moto, triciclo
  // adicionem mais informações ao usuário
  tipoDeTransporte(novoMeioDeTransporte) {
      console.log('Seu transporte: '+ this.transporte +' foi alterado para:'+ novoMeioDeTransporte);
  }
  totalParadas(novoNumeroParadas) {
      console.log('Suas paradas: '+ this.paradas +' foi alterado para: '+ novoNumeroParadas);
  }
}
let usuarioDeApp = new Usuario()
console.log("Bem vindo, " + usuarioDeApp.nome + "!")
console.log("O que você deseja fazer?")
console.log("[1] - Desejo solicitar nova viagem")
console.log("[2] - Desejo alterar meu endereço")
console.log("[3] - Desejo adicionar forma de pagamento")
console.log('[4] - Desejo mudar o meio de transporte.')
console.log('[5] - Desejo alterar o número de paradas.')
let opcao = rs.questionInt("Escolha uma opção: \n")

if (opcao === 1) {
  let local = rs.question("Qual o seu destino? ")
  let horario = rs.questionInt("Que horas? ")
  usuarioDeApp.solicitarNovaViagem(local, horario)
}
else {
  if (opcao === 2) {
    let enderecoNovo = rs.question('Qual o novo endereço? ')
    usuarioDeApp.editarEnderecoPrimario(enderecoNovo)
  }
  else if (opcao === 3) {
    let novaFormaDePagamento = rs.question('Adicione nova forma de pagamento! ');
    usuarioDeApp.adicionarFormaDePagamento(novaFormaDePagamento);
  }
  else if (opcao === 4) {
      let novoMeioDeTransporte = rs.question('Qual o novo meio de transporte? ');
      usuarioDeApp.tipoDeTransporte(novoMeioDeTransporte);
  }
  else {
      let novoNumeroParadas = rs.questionInt('Quantas paradas você deseja? ');
      usuarioDeApp.totalParadas(novoNumeroParadas);
  }
}