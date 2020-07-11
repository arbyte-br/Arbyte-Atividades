let rs = require("readline-sync")


let anoAtual = 2020

let nomeUsuario = rs.question("Digite seu nome: ")

let dataNascimentoUsuario = rs.question("Digite sua data de nascimento (DD/MM/AAAA): ")

let dia = dataNascimentoUsuario.slice(0, 2)
let mes = dataNascimentoUsuario.slice(3, 5)
let ano = dataNascimentoUsuario.slice(6, 10)

let idadeUsuario = anoAtual - ano

let dadosUsuario = {

    Nome: nomeUsuario,
    Nascimento: dataNascimentoUsuario,
    Idade: idadeUsuario,
    
}


console.log(dadosUsuario)