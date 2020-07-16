// Escreva uma aplicação em JS que receba dois usuários. 
// De cada usuário, a aplicação deve receber um número de 1 a 100. 
// A aplicação deve informar qual dos usuários chegou mais perto do número correto. 
// (Você pode escolher qual vai ser o número correto)let rs = require('readline-sync')function numeroEhValido(numero) {
    
if (numero < 0 || numero > 100) {
        return false
    } else {
        return true
    }
}

function distanciaEntreNumeroENumeroCorreto(numero) {
    let numeroCorreto = 42    
    let distancia = 0
    if (numero > numeroCorreto) {
        distancia = numero - numeroCorreto
    } else {
        distancia = numeroCorreto - numero
    }    return distancia
}function pegaNomeUsuario(numeroUsuario) {
    let nomeUsuario = rs.question(`Digite o nome do usuário ${numeroUsuario}: \n`)
    return nomeUsuario
}let nomeUsuario1 = pegaNomeUsuario(1)
let nomeUsuario2 = pegaNomeUsuario(2)
let numeroUsuario1 = -1
while (!numeroEhValido(numeroUsuario1)) {
   numeroUsuario1 = rs.questionInt(`${nomeUsuario1}, digite um número de 1 a 100: \n`) 
}let numeroUsuario2 = -1
while (!numeroEhValido(numeroUsuario2)) {
    numeroUsuario2 = rs.questionInt(`${nomeUsuario2}, digite um número de 1 a 100: \n`)
}
let distanciaUsuario1 = distanciaEntreNumeroENumeroCorreto(numeroUsuario1)
let distanciaUsuario2 = distanciaEntreNumeroENumeroCorreto(numeroUsuario2)
if (distanciaUsuario1 < distanciaUsuario2) {
    console.log(`${nomeUsuario1} GANHOU, SUA RESPOSTA FOI: ${numeroUsuario1}`)
} else if (distanciaUsuario2 < distanciaUsuario1) {
    console.log(`${nomeUsuario2} GANHOU, SUA RESPOSTA FOI: ${numeroUsuario2}`)
} else {
    console.log('EMPATOU MISERÁVEL!')
}