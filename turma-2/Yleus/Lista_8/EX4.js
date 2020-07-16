let rs = require("readline-sync")

let loginCadastrado = rs.question("Digite seu login para cadastro")
let senhaCadastrada = rs.questionInt("Digite sua senha para cadastro")

let loginCorreto = "facebookarbyte"
let senhaCorreta = 333555666

var usuario = {
    login : loginCadastrado,
    senha : senhaCadastrada
}

if(usuario.login ==loginCorreto){
    if(usuario.senha ==senhaCorreta){
        console.log("USUARIO LOGADO")
    }
    else{
        console.log("LOGIN/SENHA INCORRETOS")
    }
}