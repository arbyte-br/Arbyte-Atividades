let rs = require("readline-sync")


let listaUsuarios = []

let anoAtual = 2020

console.log("\n================================ USUARIO 1 ================================\n")

let nomeUsuario1 = rs.question("Digite seu nome: ")
let dataNascimentoUsuario1 = rs.question("Digite sua data de nascimento (DD/MM/AAAA): ")
let diaUsuario1 = dataNascimentoUsuario1.slice(0, 2)
let mesUsuario1 = dataNascimentoUsuario1.slice(3, 5)
let anoUsuario1 = dataNascimentoUsuario1.slice(6, 10)

console.log("\n================================ USUARIO 2 ================================\n")

let nomeUsuario2 = rs.question("Digite seu nome: ")
let dataNascimentoUsuario2 = rs.question("Digite sua data de nascimento (DD/MM/AAAA): ")
let diaUsuario2 = dataNascimentoUsuario2.slice(0, 2)
let mesUsuario2 = dataNascimentoUsuario2.slice(3, 5)
let anoUsuario2 = dataNascimentoUsuario2.slice(6, 10)


let idadeUsuario1 = anoAtual - anoUsuario1
let idadeUsuario2 = anoAtual - anoUsuario2


let dadosUsuario1 = {

    Nome: nomeUsuario1,
    Nascimento: dataNascimentoUsuario1,
    Idade: idadeUsuario1,
    
}

listaUsuarios.push(dadosUsuario1)

let dadosUsuario2 = {

    Nome: nomeUsuario2,
    Nascimento: dataNascimentoUsuario2,
    Idade: idadeUsuario2,
    
}

listaUsuarios.push(dadosUsuario2)


console.log(listaUsuarios)