/*5. (OBRIGATÓRIO) Crie um programa que:
a. Peça o login de um usuário;
b. Peça sua senha;
c. Caso usuário ou senha estejam incorretos, imprima na tela "LOGIN/SENHA
INCORRETOS" e pare;
d. Caso o usuário e a senha estejam corretos, imprima na tela "USUÁRIO
LOGADO" e continue;
e. Imprima na tela o seguinte catálogo de produtos:
Produto Valor
Computador R$ 2000
Impressora R$ 200
Mouse R$ 50
Celular R$ 1500
Carregador R$ 50
f. Pergunte para o usuário qual produto ele deseja ou se quer sair;
g. Se o usuário escolher algum produto, imprimir na tela "Obrigado pela compra,
<nome do usuário>! Você comprou um <nome do produto>", onde <nome do
usuário> e <nome do produto> devem ser substituídos pelo nome do usuário
real e o nome real do produto, respectivamente. Após isso, pare a execução.
h. Se o usuário escolher sair, pare a execução.
Neste exercício, o usuário deve ser representado por um objeto e o catálogo por uma
lista de objetos, ou seja um Array de objetos. Cada objeto deste array será um dos
produtos do catálogo, tendo seu nome e seu valor como propriedades.
*/

let rs = require('readline-sync')

let user = {}
let produto = {}

let login = rs.question('Qual o seu login ? ')
let senha = rs.question('Qual a sua senha ? ')

produto.computador = 'R$ 2.000,00'
produto.impressora = 'R$ 200,00'
produto.mouse = 'R$ 50,00'
produto.celular = 'R$ 1.500,00'
produto.carregador = 'R$ 50,00'

if (login !== 'josiane-rocha' || senha !== 'arbyte') {
    console.log('LOGIN/SENHA INCORRETOS')
} else {
    console.log('USUÁRIO LOGADO')
    console.clear()
    console.log(produto)
    user.compra = rs.question ('Seja Bem Vindo, ${user.nome}. Escolha o produto da lista acima que deseja comprar ou digite "sair" para finalizar: ').toLowerCase()
switch (user.compra) {
    case 'computador' :
    console.log('Obrigado pela compra! Você comprou um computador por ${produto.computador}!')
    break
    case 'impressora' :
    console.log('Obrigado pela compra! Você comprou uma impressora por ${produto.impressora}!')
    break
    case 'mouse' :
    console.log('Obrigado pela compra! Você comprou um mouse por ${produto.mouse}!')
    break
    case 'celular' :
    console.log('Obrigado pela compra! Você comprou um celular por ${produto.celular}!')
    break
    case 'carregador' :
    console.log('Obrigado pela compra! Você comprou um carregador por ${produto.carregador}!')
    break
    case 'Sair' :
    console.log('Deslogando... Deslogado!')
('Produto ${user.compra} inválido.')

}

}
