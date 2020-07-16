
function detectaMaior(n1=0, n2=0) {
    for(let i = 0; i < detectaMaior.length; i++) {
        let numeroSendoAvaliado = detectaMaior(i)
        let numeroMaiorEncontrado = true
        for(let j = 0; j < detectaMaior.length; j++) {
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
detectaMaior(5, 7)