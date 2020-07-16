let isOdd = require('is-odd');
let rs = require('readline-sync')

let numero = rs.questionInt('Digite qual número deseja saber se é par ou impar: \n')

if (isOdd(numero) === true) {
    console.log(numero + (' é IMPAR!'))
} else {
    console.log(numero + ' é PAR!')
}