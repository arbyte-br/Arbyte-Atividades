let rs = require('readline-sync');

class User {
  constructor() {
    this.nome = rs.question('Qual o seu nome?\n');
    this.categoria = 'passageiro';
    this.email = rs.questionEMail('Digite um endereço de e-mail:\n');
    this.celular = rs.question('Insira seu numero de celular:\n');
    this.enderecoPrimario = rs.question('Insira seu local de embarque:\n');
    this.formasPagamento = rs.question('Digite uma forma de pagamento:\n');
  }

  solicitarNovaViagem(destinoViagem) {
    let confirmacaoViagem = rs.question(
      `Voce deseja ir de ${this.enderecoPrimario} para ${destinoViagem}?\n`
    );
    if (confirmacaoViagem === 'sim') {
      console.log('Sua viagem foi confirmada. Aguardando motorista.');
    } else {
      console.log('Digite o endereço novamente.');
    }
  }

  editarEnderecoPrimario(enderecoNovo) {
    console.log(
      `Seu local: ${this.enderecoPrimario} foi alterado para: ${enderecoNovo}.`
    );
    this.enderecoPrimario = enderecoNovo;
  }

  adicionarFormaDePagamento(pagamento) {
    console.log(`Forma de pagamento escolhida foi -> ${this.formasPagamento}`);
    console.log(
      `Forma de pagamento -> ${this.formasPagamento} foi alterado para -> ${pagamento}.`
    );
    this.formasPagamento = pagamento;
  }

  compartilharRota(novoUsuario) {
    let destinoViagem = rs.question('Para onde vamos?\n');
    console.log(
      `Sua viagem será compartilhada com ${this.categoria} ${novoUsuario}, para ${destinoViagem}.`
    );
  }

  levarobjeto(objeto) {
    let destinoViagem = rs.question('Onde deseja entregar?\n');
    console.log(`O ${objeto} será entregue em ${destinoViagem}.`);
  }
}

module.exports = User;
