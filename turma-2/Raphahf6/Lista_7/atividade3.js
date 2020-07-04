numbers = [1,2,3,4,5,100]

function Maior(listaDeNumeros){
    

    for(i = 0 ; i < numbers.length; i++){
        let numeroSendoAvaliado = listaDeNumeros[i]
        let numeroMaiorEncontrado = true
        for(j = 0; j < listaDeNumeros.length; j++){
            if(listaDeNumeros[j] > numeroSendoAvaliado){
                numeroMaiorEncontrado = false
            }
        }

        if (numeroMaiorEncontrado){
            console.log(numeroSendoAvaliado)
            break
        }
    }
}

Maior(numbers)