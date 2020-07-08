let rs = require('readline-sync')

let numero = rs.questionFloat('Digite um numero entre 100 e 200: \n')

if(numero >= 100 && numero <= 200){
    console.log('Voce digitou um numero entre 100 e 200')
} else {
    console.log('Voce digitou um numero fora de 100 e 200')
}