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
} else {
    console.log("LOGIN/SENHA INCORRETOS")
}