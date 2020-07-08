let lista = [27, 44, 112, 547, 647, 82, 1201, 12457, 98747, 125457, 95784514]

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