let rs = require("readline-sync")

let nomeUsuario = rs.question("Qual é o seu nome?\n>>")
let loginCadastrado = rs.question("Digite seu login para cadastro\n>>")
let senhaCadastrada = rs.questionInt("Digite sua senha para cadastro\n>>")

let loginCorreto = "facebookarbyte"
let senhaCorreta = 333555666

var usuario = {
    login : loginCadastrado,
    senha : senhaCadastrada,
    nome : nomeUsuario
}

if(usuario.login !==loginCorreto){
    if(usuario.senha !==senhaCorreta){
        console.log("LOGIN/SENHA INCORRETOS")
        return;
    }
    }
    else{
        console.log("USUARIO LOGADO")
    }



var catalogo = {
    computador : 2000,
    impressora : 200,
    mouse : 50,
    celular : 1500,
    carregador : 50,
}

let usuarioCompra = rs.question(`Você deseja comprar algum produto do nosso catalogo? ${catalogo} Se sim, digite o nome do produto\n>>`)

if(usuarioCompra == "computador"){
    produtoEscolhido = catalogo.computador
}
else if(usuarioCompra == "impressora"){
    produtoEscolhido = catalogo.impressora
}
else if(usuarioCompra == "mouse"){
    produtoEscolhido = catalogo.mouse
}
else if(usuarioCompra == "celular"){
    produtoEscolhido = catalogo.celular
}
else if(usuarioCopra == "carregador"){
    produtoEscolhido = catalogo.carregador
}
else{
    console.log("Esperamos que você volte outro dia para comprar um de nossos produtos")
    return;
}
console.log(`Obrigado pela compra,${usuario.nome}! Você comprou um ${usuarioCompra} por ${produtoEscolhido} reais`)