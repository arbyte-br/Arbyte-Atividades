// Escreva uma aplicação em JS que receba dois
// usuários. De cada usuário, a aplicação deve receber um número de 1 a 100. A
// aplicação deve informar qual dos usuários chegou mais perto do número correto. (Você
// pode escolher qual vai ser o número correto)

let rs = require("readline-sync")

function numeroEhValido(numero) {
    if ( numero < 0 || numero > 100) {
        return false
    } else {
        return true
    }
}

let numeroCorreto = 42

let nomeUsuario1 = rs.question("Digite o nome do usuário 1: ")
let nomeUsuario2 = rs.question("Digite o nome do usuário 2: ")

let numeroUsuario1 = rs.questionInt(`${nomeUsuario1}, digite um numero de 1 a 100: `)

let numeroUsuario2 = rs.questionInt(`${nomeUsuario2}, digite um número de 1 a 100: `)

let distanciaUsuarioRespoataCorreta = 0

if (numeroUsuario1 > numeroCorreto) {
    distanciaUsuarioRespoataCorreta = numeroUsuario1 - numeroCorreto
} else {
    distanciaUsuarioRespoataCorreta = numeroCorreto - numeroUsuario1
}

let distanciaUsuario2RespoataCorreta = 0

if (numeroUsuario2 > numeroCorreto) {
    distanciaUsuario2RespoataCorreta = numeroUsuario2 - numeroCorreto
} else {
    distanciaUsuario2RespoataCorreta = numeroCorreto - numeroUsuario2
}

if (distanciaUsuarioRespoataCorreta < distanciaUsuario2RespoataCorreta) {
    console.log(`${nomeUsuario1} GANHOU, SUA RESPOSTA FOI: ${numeroUsuario1}`)
} else if (distanciaUsuario2RespoataCorreta < distanciaUsuarioRespoataCorreta) {
    console.log(`${nomeUsuario2} GANHOU, SUA RESPOSTA FOI: ${numeroUsuario2}`)
} else {
    console.log("EMPATOU MISERÁVEL!")
}



