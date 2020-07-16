function validarNumero(numero) {
    if (numero < 0 || numero > 100) {
        return false
    } else {
        return true
    }
}
function pegarNumero(numeroUsuario) {
    let nomeUsuario = rs.question(`(Usuário ${numeroUsuario})Digite um nome. \n`)
    return nomeUsuario
}

function distanciaEntreNumeroCorreto(numero) {
    let numeroCorreto = 47
    let distancia = 0
    if (numero > numeroCorreto) {
        distancia = numero - numeroCorreto
    } else {
        distancia = numeroCorreto - numero
    }
    return distancia
}

let rs = require('readline-sync')

let nome1 = pegarNumero(1)
let nome2 = pegarNumero(2)

let numeroUsuario1 = -1
while (!validarNumero(numeroUsuario1)) {
    numeroUsuario1 = rs.questionInt(`${nome1}, digite um número de 1 a 100. \n`)
}

let numeroUsuario2 = -1
while (!validarNumero(numeroUsuario2)) {
    numeroUsuario2 = rs.questionInt(`${nome2}, digite um número de 1 a 100. \n`)
}
let distanciaUsuario1 = distanciaEntreNumeroCorreto(numeroUsuario1)
let distanciaUsuario2 = distanciaEntreNumeroCorreto(numeroUsuario2)

if (distanciaUsuario1 < distanciaUsuario2) {
    console.log(`${nome1} GANHOU, SUA RESPOSTA FOI: ${numeroUsuario1}`)
} else if (distanciaUsuario2 < distanciaUsuario1) {
    console.log(`${nome2} GANHOU, SUA RESPOSTA FOI: ${numeroUsuario2}`)
} else {
    console.log('EMPATOU')
}

