let rs = require('readline-sync')

let numero = -1
while ( numero < 0 || numero > 100) {
    numero = rs.questionInt('Digite um número de 1 a 100: ')
}

let numero2 = -1
while( numero2 < numero || numero2 > 100) {
    numero2 = rs.questionInt(`Digite outro numero de ${numero} a 100: ` )
}
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