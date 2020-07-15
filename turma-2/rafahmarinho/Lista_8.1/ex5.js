// (OBRIGATÓRIO) Crie um programa que:
// a. Peça o login de um usuário;
// b. Peça sua senha;
// c. Caso usuário ou senha estejam incorretos, imprima na tela "LOGIN/SENHA
// INCORRETOS" e pare;
// d. Caso o usuário e a senha estejam corretos, imprima na tela "USUÁRIO
// LOGADO" e continue;
// e. Imprima na tela o seguinte catálogo de produtos:
// Produto Valor
// Computador R$ 2000
// Impressora R$ 200
// Mouse R$ 50
// Celular R$ 1500
// Carregador R$ 50
// f. Pergunte para o usuário qual produto ele deseja ou se quer sair;
// g. Se o usuário escolher algum produto, imprimir na tela "Obrigado pela compra,
// <nome do usuário>! Você comprou um <nome do produto>", onde <nome do
// usuário> e <nome do produto> devem ser substituídos pelo nome do usuário
// real e o nome real do produto, respectivamente. Após isso, pare a execução.
// h. Se o usuário escolher sair, pare a execução.
// Neste exercício, o usuário deve ser representado por um objeto e o catálogo por uma
// lista de objetos, ou seja um Array de objetos. Cada objeto deste array será um dos
// produtos do catálogo, tendo seu nome e seu valor como propriedades.

let rs = require('readline-sync')

let login = {
    user: '',
    pass: '',
}
console.log('========= CRIANDO SUA CONTA =========')
login.user = rs.question ('Digite um nome de úsuario: ')
login.pass = rs.question ('Digite uma senha: ')

console.clear()

console.log('========= FAÇA SEU LOGIN =========')
let user = rs.question('Login: ')
let pass = rs.question('Senha: ')

let loginOk = (login.user === user && login.pass === pass)

let computador = {
    produto: 'Computador',
    valor: 2000 ,
}
let impressora = {
    produto: 'Impressora',
    valor: 200,
}
let mouse = {
    produto: 'Mouse',
    valor: 50,
}
let celular = {
    produto: 'Celular',
    valor: 1500, 
}
let carregador = {
    produto: 'Carregador',
    valor: 50,
}

let catalogo = [computador, impressora, mouse, celular, carregador]
let nomesCatalogo = []
for (let i = 0; i < catalogo.length; i++) {
    nomesCatalogo.push(`${catalogo[i].produto} -> R$${catalogo[i].valor}`)
}

if (loginOk){
    console.log('USUÁRIO LOGADO')
    let escolhaProduto = rs.keyInSelect(nomesCatalogo,'Oque deseja comprar?')
        if(escolhaProduto > 0 && escolhaProduto < catalogo.length){
            console.log(`"Obrigado pela compra ${login.user}! Você comprou um(a) ${catalogo[escolhaProduto].produto}. "`)
        }else{
            console.log(`Usuário deslogado!`)
        }
} else{
    console.log('LOGIN/SENHA INCORRETOS')
}