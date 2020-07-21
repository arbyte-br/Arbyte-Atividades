let rs = require("readline-sync")

console.log('========= CRIE SUA CONTA =========')
let login = {
    usuario: usuario = rs.question ('Digite um nome de usuario: '),
    senha: senha = rs.question ('Digite uma senha: ')
}
//Pedindo Usuario e Senha
let contaUsuario = rs.question('Digite seu login:') 
let senhaUsuario = rs.question('Digite sua senha:') 

//Confirmando Usuario e Senha 
let loginConfirmado = 0
if(login.usuario === contaUsuario && senhaUsuario === senha) {
    loginConfirmado = true    
}else{
    loginConfirmado = false 
    console.log( 'LOGIN/SENHA INCORRETOS')
}

//Catalogo de Produtos
let computador = { produto: 'Computador', valor: 2000 }
let impressora = { produto: 'Impressora', valor: 200}
let mouse = { produto: 'Mouse', valor: 50}
let celular = {produto: 'Celular', valor: 1500}
let carregador = {produto: 'Carregador', valor: 50,}

let catalogo = [computador, impressora, mouse, celular, carregador]
let produtosNoCatalogo = []


for(let i = 0; i < catalogo.length; i++){
    produtosNoCatalogo.push(`${catalogo[i].produto} - R$${catalogo[i].valor}`)
}

//Caso o login estiver certo, mostra o catalogo e pergunta para o usuario qual o produto ele quer.
if(loginConfirmado){
    console.log('Usuario logado')
    console.log('Escolha um produto')
    let escolhaProduto = rs.keyInSelect(produtosNoCatalogo, "Escolha um produto:")
        if(escolhaProduto > 0 && escolhaProduto < catalogo.length){
        console.log(`${login.usuario} obrigado pela compra, você comprou um(a) ${catalogo[escolhaProduto].produto}.`)
        }else{
        console.log(`Usuário deslogado!`)
        }
    } 
    



