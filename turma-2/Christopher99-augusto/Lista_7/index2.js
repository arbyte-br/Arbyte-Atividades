let lista = [1, 2, 3, 4, ]

function detecteomaior(listadenumeros) {

    for(let i = 0; i < listadenumeros.length; i++) {

        let numeroavaliado = listadenumeros[i]

        let numeromaior = true

        for(let j = 0; j < listadenumeros.length; j++) {

            if (listadenumeros[j] > numeroavaliado) {

                numeromaior = false
            }
        }
        if (numeromaior) {

            console.log(numeroavaliado)

            break
        }
    }
}
detecteomaior(lista)