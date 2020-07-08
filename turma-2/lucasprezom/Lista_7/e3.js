let lista = [12,28,10,20,21]
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