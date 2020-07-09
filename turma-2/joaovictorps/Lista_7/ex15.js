let rs = require('readline-sync')

function divisoresDeUmNumero(numero) {
    let divisoresEncontrados = []
    for (let i = 1; i < numero; i++) {
        if (numero % i === 0) {
            divisoresEncontrados.push(i)
            console.log(i)
        }  
    }
    let somaDivisores = 0
    for(let j = 0; j < divisoresEncontrados.length;j++) {
        somaDivisores+= divisoresEncontrados[j]
    }
    if (somaDivisores === numero) {
        return true 
    } else {
        return false
    }

}

let numero = rs.questionInt('Digite um número para saber se ele é perfeito ou não: \n')

console.log(divisoresDeUmNumero(numero) ? `${numero} é um número perfeito.` : `${numero} não é um número perfeito.`)
