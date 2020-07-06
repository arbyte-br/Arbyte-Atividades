let rs = require('readline-sync')

console.log('insira 2 numeros e informaremos qual eh o menor')

let numero1 = rs.questionInt('digite um numero \n');
let numero2 = rs.questionInt('digite outro numero \n');


function calculando(numero1, numero2) {

    if (numero1 < numero2)
        [
            console.log(`${numero1} eh menor que o numero ${numero2}`)
        ]
    else console.log(`${numero2} eh menor que o numero ${numero1}`)


}

console.log(calculando(numero1, numero2));