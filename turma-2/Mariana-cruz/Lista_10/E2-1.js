// 2 (OBRIGATÓRIO) - Usando a classe do exercício anterior, crie métodos
// que representem possíveis ações do usuário no aplicativo.
// ex: solicitarNovaViagem(local), editarEnderecoPrimario(endereco),
// adicionarFormaDePagamento(pagamento)

const User = require('./usuarioAppTransporte');
let rs = require('readline-sync');

let user = new User();

console.log('Bem vindo, ' + user.categoria + ' ' + user.nome + '!');
console.log('O que você deseja fazer?');
console.log('[1] - Desejo solicitar nova viagem.');
console.log('[2] - Desejo alterar meu endereço.');
console.log('[3] - Desejo adicionar forma de pagamento.');
console.log('[4] - Desejo adicionar outro usuário para compartilhamento.');
console.log('[5] - Desejo enviar um objeto.');

let opcao = rs.questionInt('Escolha uma opção: ');

switch (opcao) {
  case 1:
    let destinoViagem = rs.question('Para onde vamos?\n');
    user.solicitarNovaViagem(destinoViagem);
    break;
  case 2:
    let enderecoNovo = rs.question('Qual o novo local?\n');
    user.editarEnderecoPrimario(enderecoNovo);
    break;
  case 3:
    let pagamento = rs.question('Qual a nova forma de pagamento?\n');
    user.adicionarFormaDePagamento(pagamento);
    break;
  case 4:
    let novoUsuario = rs.question(
      'Insira um nome de usuário que vai compartilhar sua viagem:\n'
    );
    user.compartilharRota(novoUsuario);
    break;
  case 5:
    let objeto = rs.question('Qual objeto deseja que seja entregue?\n');
    user.levarobjeto(objeto);
    break;

  default:
    console.log('Insira um numero válido');
    break;
}
