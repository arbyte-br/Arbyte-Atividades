let rs = require("readline-sync")


let login = "Bruno"
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

// ===================================================

let produto1 = {
    CodigoDeProduto: "1",
    Produto: "AirPod",
    Valor: "R$2000"
}

let produto2 = {
    CodigoDeProduto: "2",
    Produto: "Iphone 7 PLus 128gb",
    Valor: "R$2000"
}

let produto3 = {
    CodigoDeProduto: "3",
    Produto: "Iphone 8 256gb",
    Valor: "R$5000"
}

let produto4 = {
    CodigoDeProduto: "4",
    Produto: "Iphone X 512gbr",
    Valor: "R$7500"
}

let produto5 = {
    CodigoDeProduto: "5",
    Produto: "Iphone Xs Max 512gb",
    Valor: "R$10000"
}

let listaProdutos = [produto1, produto2, produto3, produto4, produto5]


if (perguntaLogin === login && perguntaSenha === senha) {
    console.log(dadosCorretos)
    console.log("\n=============================================================\n")
    console.log(listaProdutos)
    console.log("\n=============================================================\n")
    console.log("Digite o código do produto que deseja para comprá-lo, ou digite 0 para sair.")
    let perguntaCompra = rs.questionInt("")
    if (perguntaCompra === 0) {

    } else if (perguntaCompra === 1) {
        console.log(`Obrigado pela compra ${login}! Você comprou um ${produto1.Produto}, pelo valor de ${produto1.Valor}`)
    } else if (perguntaCompra === 2) {
        console.log(`Obrigado pela compra ${login}! Você comprou um ${produto2.Produto}, pelo valor de ${produto2.Valor}`)
    } else if (perguntaCompra === 3) {
        console.log(`Obrigado pela compra ${login}! Você comprou um ${produto3.Produto}, pelo valor de ${produto3.Valor}`)
    } else if (perguntaCompra === 4) {
        console.log(`Obrigado pela compra ${login}! Você comprou um ${produto4.Produto}, pelo valor de ${produto4.Valor}`)
    } else if (perguntaCompra === 5) {
        console.log(`Obrigado pela compra ${login}! Você comprou um ${produto5.Produto}, pelo valor de ${produto5.Valor}`)
    } else {
        console.log("Código inválido.")
    }


} else {
    console.log(dadosIncorretos)
}
