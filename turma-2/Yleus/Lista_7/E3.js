let rs = require('readline-sync')

let lista = [25, 45, 65, 70, 95, 105, 304]

function detectarMaior(listaNumeros) {

    for(let i = 0; i < listaNumeros.length; i++) {

        let numeroAvaliado = listaNumeros[i]
        let numeroMaior = true

        for(let j = 0; j < listaNumeros.length; j++) {

            if (listaNumeros[j] > numeroAvaliado) {
                numeroMaior = false
            }
        }
        if (numeroMaior) {
            console.log(numeroAvaliado)
            break
        }
    }
}
detectarMaior(lista)