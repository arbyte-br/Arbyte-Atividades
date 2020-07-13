/*Crie um programa que:
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
produtos do catálogo, tendo seu nome e seu valor como propriedades.*/

let rs = require(`readline-sync`)
let usuario = {}
let catalogo = []
let produto = {}
usuario.login = rs.question(`Login: `)
usuario.senha = rs.question(`Senha: `,{hideEchoBack: true})

if(usuario.login == `antonio` && usuario.senha == `nunes`){
    console.log(`USUÁRIO LOGADO`)
    var nome = rs.question(`Insira seu nome: `)
    console.clear()
    console.log(produto = {nome:`computador`, valor:`R$2000,00`})
    console.log(produto = {nome:`impressora`, valor:`R$200,00`})
    console.log(produto = {nome:`mouse`, valor:`R$50,00`})
    console.log(produto = {nome:`celular`, valor:`R$1500,00`})
    console.log(produto = {nome:`carregador`, valor:`R$50,00`})
    let escolha = rs.question(`Deseja algum produto?Caso sim informe qual, do contrario digite sair\n`)
        
    if(escolha == `sair`){
        process.exit()

    }else if(escolha == `computador`){
        produto.nome = `computador`
        catalogo.push(produto.nome)

    }else if(escolha == `impressora`){
        produto.nome = `impressora`
        catalogo.push(produto.nome)

    }else if(escolha == `mouse`){
        produto.nome = `mouse`
        catalogo.push(produto.nome)

    }else if(escolha == `celular`){
        produto.nome = `celular`
        catalogo.push(produto.nome)

    }else if(escolha == `carregador`){
            produto.nome = `carregador`
            catalogo.push(produto.nome)
    }
        
}else{
    console.log(`LOGIN/SENHA INCORRETOS`)
}
console.clear()
console.log(`Obrigado pela compra, ${nome}!
Você comprou um ${catalogo}.`)
 