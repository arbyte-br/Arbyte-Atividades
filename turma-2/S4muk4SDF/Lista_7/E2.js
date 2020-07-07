let listaDeNumeros = [9956, 321]

function Comparacao(numeros) {
  for (let i = 0; i < numeros.length; i++) {

      let numeroSendoAvaliado = numeros[i]
      let numeroMaiorEncontrado = true

        for (let j = 0; j < numeros.length; j++){
            
            if(numeros[j] > numeroSendoAvaliado) {
                numeroMaiorEncontrado = false
            }  
        }
        if (numeroMaiorEncontrado) {
            console.log(numeroSendoAvaliado)
            break
        }
  }
}

Comparacao(listaDeNumeros)


