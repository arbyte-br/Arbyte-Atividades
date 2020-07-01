let rs = require('readline-sync')

let numero = rs.questionInt('Digite um número negativo para receber o seu triplo ou um número positivo para receber o seu dobro: ')

if (numero < 0){
    resultado = numero * 3
    console.log(`O triplo de ${numero} é igual a ${resultado}`)
}else {
    resultado = numero * 2
    console.log(`O dobro de ${numero} é igual a ${resultado}`)
}