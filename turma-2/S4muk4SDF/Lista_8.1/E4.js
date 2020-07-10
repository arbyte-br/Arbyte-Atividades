let rs = require("readline-sync")


let login = "Samuel"
let senha = 1234

let perguntaLogin = rs.question("Digite seu login: ")
let perguntaSenha = rs.questionInt("Digite sua senha: ")

let dadosCorretos = {
    Login: perguntaLogin,
    Senha: perguntaSenha,
    Acesso: "Usuário logado."
}

let dadosIncorretos = {
    Login: perguntaLogin,
    Senha: perguntaSenha,
    Acesso: "Login/Senha incorretos."
}


if (perguntaLogin === login && perguntaSenha === senha) {
    console.log(dadosCorretos)
} else {
    console.log(dadosIncorretos)
}




