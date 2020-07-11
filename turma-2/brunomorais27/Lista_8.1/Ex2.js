let rs = require("readline-sync")

let anoAtual = 2020

let nomeUsuario = rs.question("Digite seu nome: ")

let dia = rs.questionFloat("Digite seu dia de nascimento: ")

let mes = rs.questionFloat("Digite seu mes de nascimento: ")

let ano = rs.questionFloat("Digite seu ano de nascimento: ")

let dataNascimentoUsuario = `${dia}/${mes}/${ano}`

let resultado = anoAtual - ano
let dadosUsuario = {
    Nome: nomeUsuario,
    Nascimento: dataNascimentoUsuario,
    Idade: resultado,
}
console.log(dadosUsuario)