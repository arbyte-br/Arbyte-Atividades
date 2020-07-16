let rs = require ("readline-sync")

let dadosCorretos = {
    login: 1234,
    senha: 9876
}

let usuario = {
    login: rs.question("digite seu login> "),
    senha: rs.question("digite sua senha> ")
}

if (usuario.login == dadosCorretos.login && usuario.senha == dadosCorretos.senha){
    console.log("USUARIO LOGADO")
    console.log(produtos)
    console.log("Qual produto deseja?\n")
    console.log("Se deseja sair, digite: 0")
} else {
    console.log("LOGIN/SENHA INCORRETOS")
}

let produtos = {
    computador: 2000,
    impressora: 200,
    mouse: 50,
    celular: 1500,
    carregador: 50
}

var respostaUsuario = 0

if (respostaUsuario == 0){
    console.log("voce saiu!")
}