let lista = [3, 12, 42, 190, 21, 0, 05]

function numeroMaior(numerosDaLista) {
    for (let i = 0; i < lista.length; i++){
        let numeroAtual = lista[i]
        let numeroMaiorEncontrado = true
        for (let j = 0; j < lista.length; j++){
            if (lista[j] > numeroAtual){
                numeroMaiorEncontrado = false
            }
        }
        if (numeroMaiorEncontrado){
            console.log(numeroAtual)
            break
        }
}
}
numeroMaior(lista)