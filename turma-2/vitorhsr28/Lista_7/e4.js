const rs = require('readline-sync')

const numero = rs.questionInt('Informe o número que deseja saber a tabuada: ')
let resultado

function tabuada() {
    for (i = 0; i <= 10; i++) {
        resultado = numero * i
        console.log (`${numero} x ${i} = ${resultado}`)
    }    
    return resultado
}

console.log (tabuada())