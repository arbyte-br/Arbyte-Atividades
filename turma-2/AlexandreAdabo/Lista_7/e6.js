let rs = require('readline-sync')

let numero = rs.questionFloat('Digite um numero entre 1 e 10: ')

function num(numero){
    if(numero <= 10 && numero > 0){
        console.log('Numero OK!')
    } 
    if(numero > 10){
        console.log('O numero deve ser de 1 a 10')
    }
}
console.log(num(numero))