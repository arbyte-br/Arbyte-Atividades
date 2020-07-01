let rs = require('readline-sync')

function potencia (base, expoente){
    base = rs.questionInt('Digite a base: ')
    expoente = rs.questionInt('Digite o expoente: ')
    let resultado = console.log(`${base} elevado a ${expoente} e igual a ${Math.pow(base, expoente)}`)

    return resultado
}
potencia()

