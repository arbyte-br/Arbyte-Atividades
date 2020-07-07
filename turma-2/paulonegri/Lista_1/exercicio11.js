/*Encontrar o dobro de um número caso ele seja positivo e o seu triplo caso seja
negativo, imprimindo o resultado*/

let rs = require('readline-sync')
let numero = rs.questionFloat('Digite um numero> ')
let resultado

if(numero > 0){
    resultado = numero * 3
    console.log(`${resultado}`)    
}else if(numero < 0){
    resultado = (numero) * 3
    console.log(`${resultado}`)
}else{
    console.log(`O numero nao pode ser 0.`)
}