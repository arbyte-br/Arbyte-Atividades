let rs = require('readline-sync')
let isOdd = require('is-odd')

let numero = isOdd(rs.questionInt('Digite um número para saber se é par ou impar: '))

if(numero === false){
    console.log('Seu número é par.')
}else{
    console.log('Seu número é impar.')
}



