let rs = require('readline-sync')

let numero = rs.questionInt('Digite um número de 1 a 100: ')
let numero2 = rs.questionInt(`Digite outro numero de ${numero} a 100: ` )
while(numero < numero2){
    if(numero % 5 === 0 && numero % 7 === 0) {
        console.log('PING PONG')
    } else if (numero % 5 === 0) {
        console.log('PONG')
    } else if (numero % 7 === 0) {
        console.log('PING')
    } else {
        console.log(numero)
    }
    numero++
}