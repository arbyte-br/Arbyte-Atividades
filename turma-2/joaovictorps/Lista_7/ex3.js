let lista = [89, 87, 26,919,03,38,233,3112]
function detectarMaior(listaDeNumeros) {
    for(let i = 0; i < listaDeNumeros.length; i++) {
        let numeroAvaliado = listaDeNumeros[i]
        let numeroMaior = true
        for(let j = 0; j < listaDeNumeros.length; j++) {
            if (listaDeNumeros[j] > numeroAvaliado) {
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