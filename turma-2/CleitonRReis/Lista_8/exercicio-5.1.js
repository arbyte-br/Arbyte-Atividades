/*
5.(OBRIGATÓRIO)Crie um programa que:

a.Peça o login de um usuário;
b.Peça sua senha;
c.Caso usuário ou senha estejam incorretos, imprima na tela "LOGIN/SENHAINCORRETOS" e pare;
d.Caso o usuário e a senha estejam corretos, imprima na tela "USUÁRIOLOGADO" e continue;
e.Imprima na tela o seguinte catálogo de produtos:
_______________________________
|  Produtos   |   Valor       |
-------------------------------
| Computador: |  R$ 2000      |
| Impressora: |  R$ 200       |
| Mouse:      |  R$ 50        |
| Celular:    |  R$ 1500      |
| Carregador: |  R$ 50        |
_______________________________

f.Pergunte para o usuário qual produto ele deseja ou se quer sair;
g.Se o usuário escolher algum produto, imprimir na tela "Obrigado pela compra,<nome do usuário>! Você comprou um <nome do produto>", 
onde <nome dousuário> e <nome do produto> devem ser substituídos pelo nome do usuário real e o nome real do produto, respectivamente. 

Após isso, pare a execução.

h.Se o usuário escolher sair, pare a execução.

Neste exercício, o usuário deve ser representado por um objeto e o catálogo por uma lista de objetos, ou seja um Array de objetos. 

Cada objeto deste array será um dos produtos do catálogo, tendo seu nome e seu valor como propriedades.

*/

const rs = require('readline-sync');

let nomeDeUsuario = rs.question('\nInforme seu login de usuário: ');
let senhaDeUsuario = rs.question('Informe a sua senha de usuário: ');

let dadosUsuario = {};

dadosUsuario.nomeUsuario = nomeDeUsuario;
dadosUsuario.senhaUsuario = senhaDeUsuario;
dadosUsuario.loginDeAcesso = 'Cleiton';
dadosUsuario.senhaDeAcesso = '123';

let catalogoDeProdutos = [
    'Produto 0 - Computador:  R$ 2.000,00',
    'Produto 1 - Impressora:  R$ 200,00',
    'Produto 2 -      Mouse:  R$ 50,00',
    'Produto 3 -    Celular:  R$ 1.500,00',
    'Produto 4 - Carregador:  R$50,00'
]

if (dadosUsuario.nomeUsuario == dadosUsuario.loginDeAcesso && dadosUsuario.senhaUsuario == dadosUsuario.senhaDeAcesso) {
    console.log('\nUsuário Logado!\n');
    console.log(catalogoDeProdutos);
} else {
    console.log('Login ou Senha incorretos');
    return;
}
let compra = rs.question('\nDeseja adquirir algum produto acima? Digite: S == Sim ou N == Não: ');

if (compra == 'S') {
    let numeroDoProduto = rs.question('\nPara facilitar a compra, informe o número do produto que deseja comprar: ');
    console.log(`\n${dadosUsuario.nomeUsuario}, você comprou: ${catalogoDeProdutos[numeroDoProduto]}.\n`);
} else {
    console.log('\nOk! Obrigado!');
    console.log('\nUsuário deslogado!\n')
}