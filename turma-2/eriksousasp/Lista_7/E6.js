let rs = require('readline-sync')

function potencia(baixo, cima) {
    baixo = rs.questionInt('Digite a base: ')
    cima = rs.questionInt('Digite o expoente: ')
    let resultado = console.log(`${baixo} elevado a ${cima} é igual a: ${Math.pow(baixo, cima)}`)

    return resultado
}
potencia()