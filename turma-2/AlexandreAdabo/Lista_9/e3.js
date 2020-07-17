const isOdd = require('is-odd');
const rs= require ('readline-sync')

const numero = rs.questionInt('Digite um numero e direi se ele e par ou impar: ')
if(isOdd(numero)){
    console.log('O numero é impar')
} else {
    console.log('O numero é par')
}
