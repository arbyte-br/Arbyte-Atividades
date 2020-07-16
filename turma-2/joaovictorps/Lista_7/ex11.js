function tabuada(numero) {
    let resultado = ''
    for ( let i = 1; i < 10; i++) {
        resultado = `${i} x ${numero} = `+ numero * i
        console.log(resultado)
    }
}

let rs = require('readline-sync')

let n = rs.questionInt('Digite um numero para ver a tabuada dele. \n')

tabuada(n)