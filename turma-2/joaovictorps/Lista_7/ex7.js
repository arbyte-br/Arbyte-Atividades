let rs = require('readline-sync')

let n1 = rs.questionInt('(Usuario 1)Digite um numero de 1 a 100: ')
let n2 = rs.questionInt('(Usuario 2)Digite um numero de 1 a 100: ')
let numeroCerto = 47

function numeroCorreto(n1, n2) {
    if(n1 === numeroCerto && n2 === numeroCerto) {
        return 'Os dois acertaram o numero, Parabens!'
    } else if (n1 === numeroCerto) {
        return 'Usuario 1 acertou o numero, Parabens!'    
    } else if (n2 === numeroCerto) {
        return 'Usuario 2 acertou o numero, Parabens!'
    } else {
        return 'Ninguem acertou o numero.'
    }
}

console.log(numeroCorreto(n1, n2))