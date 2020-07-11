let rs = require('readline-sync')

function pegaNome(nome) {
    nome = rs.question(`(Usuário ${nome} )Qual o seu nome ?\n >`)
    return nome
}

function pegaNumero(numero) {
    numero = rs.questionInt(`${numero}, digite um número? \n >`)
    return numero
}

let usuario1 = pegaNome(1)
let numeroUsuario1 = pegaNumero(1)
let usuario2 = pegaNome(2)
let numeroUsuario2 = pegaNumero(2)

let dadosUsuario1 = {
    nome: usuario1,
    numero: numeroUsuario1
}

let dadosUsuario2 = {
    nome: usuario2,
    numero: numeroUsuario2
}

if (dadosUsuario1.numero > dadosUsuario2.numero ) {
    console.log(`${dadosUsuario1.nome} digitou um número maior.\nNúmero digitado: ${dadosUsuario1.numero}`)
} else {
    console.log(`${dadosUsuario2.nome} digitou um número maior. \n Número digitado: ${dadosUsuario2.numero}`)
}
