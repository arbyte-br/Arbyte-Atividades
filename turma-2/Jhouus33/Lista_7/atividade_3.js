let lista = [12, 51, 1231, 12,3,123,2,12,2,31,31,999999999,123,123,123123,1231233,12312]
function detectaMaior(listaDeNumeros) {
    for(let i = 0; i < listaDeNumeros.length; i++) {
        let numeroSendoAvaliado = listaDeNumeros[i]
        let numeroMaiorEncontrado = true
        for(let j = 0; j < listaDeNumeros.length; j++) {
            if (listaDeNumeros[j] > numeroSendoAvaliado) {
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