let readlineSync = require('readline-sync')
console.log('Vamos fazer a multiplacação de dois fatoers')
let numero1 = readlineSync.questionInt('Digite um dos fatores ')
let numero2 = readlineSync.questionInt('Digite o outro fator ')
let contador = 0
let resultado = 0

if (numero1 > 0 && numero2 > 0) {
    while (contador < numero1) {
        resultado += numero2;
        contador++;
    }
    console.log(resultado)
    console.log('=============')
}else {
    console.log('Um ou mais dos fatores não é positivo')
}