
/* Usando a classe do exercício anterior, crie métodos que representem possíveis ações do usuário no aplicativo.ex: solicitarNovaViagem(local), editarEnderecoPrimario(endereco), adicionarFormaDePagamento(pagamento) */

const rs = require('readline-sync');
const {HorseApp} = require('./E1');

const appUser = new HorseApp('luigi sampaio', 'luigi@sampaio.com.br');

appUser.editEndPrimary('novo endereco');
appUser.edtiPayment('cartao');
appUser.editDestination('rua das gambiarras');

console.log(appUser);
