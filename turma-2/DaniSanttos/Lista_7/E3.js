let rs = require('readline-sync')
let lista = []

for(let i = 0; i < 5; i++){
    let numeros = rs.questionInt('Digite um numero: ')
    lista.push(numeros)
}

console.log(lista)

function detectaMaior(lista) {
    for(let i = 0; i < lista.length; i++) {
        let numeroSendoAvaliado = lista[i]
        let numeroMaiorEncontrado = true
        for(let j = 0; j < lista.length; j++) {
            if (lista[j] > numeroSendoAvaliado) {
                numeroMaiorEncontrado = false
            }
        }
        if (numeroMaiorEncontrado) {
            console.log(numeroSendoAvaliado)
            break
        }
    }
}
detectaMaior(lista)