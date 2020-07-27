let rs = require('readline-sync')
const calcular = require('./calcula-media')
let array = []
let numero = null
console.log('PROGRAMA PARA CALCULAR MEDIA, DIGITE 0 PARA PARAR')
do{
     numero = rs.questionInt('Digite um numero: ')
    if (numero != 0) {
        array.push(numero)
    }
} while (numero != 0)
console.log(calcular(array));