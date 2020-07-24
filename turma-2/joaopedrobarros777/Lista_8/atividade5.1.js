let rs = require ("readline-sync")

let dadosCorretos = {
    login: 1234,
    senha: 9876
}

let computador = {
    nome: "computador",
    valor: "R$ 2.000,00"
}
let impressora = {
    nome: "impressora",
    valor: "R$ 200,00"
}
let mouse = {
    nome: "mouse",
    valor: "R$ 50,00"
}
let celular = {
    nome: "celular",
    valor: "R$ 1.500,00"
}
let carregador = {
    nome: "carregador",
    valor: "R$ 50,00"
}

let catalogo = [computador, impressora, mouse, celular, carregador]

let catalogoEmString = []

for (let i = 0; i < catalogo.length; i++){
    catalogoEmString.push(`${catalogo[i].nome} ${catalogo[i].valor}`)
}

let usuario = {
    login: rs.question("digite seu login> "),
    senha: rs.question("digite sua senha> ")
}

if (usuario.login == dadosCorretos.login && usuario.senha == dadosCorretos.senha){
    console.log("USUARIO LOGADO")
    console.log(catalogo)
    let produtoEscolhido = rs.keyInSelect(catalogoEmString, "O que deseja comprar?")
    if (produtoEscolhido + 1 == 0){
        console.log("voce saiu!")
    }else {
        console.log(`Voce comprou ${catalogoEmString[produtoEscolhido]}!`)
    }
} else {
    console.log("LOGIN/SENHA INCORRETOS")
}