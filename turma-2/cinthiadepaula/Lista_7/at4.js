let rs = require('readline-sync')

let numero = rs.questionInt('digite um numero para calcular o valor da tabuada \n');


function calculando(numero) {

    for (let i = 0; i <= 10; i++) {
        let result = numero * i;
        console.log(`${i} x ${numero} = ${result}`);
    }



}

let resultado = calculando(numero);
console.log(resultado);