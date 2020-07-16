const impar = require('is-odd')
const isOdd = require('is-odd')
const rs = require('readline-sync')

let numero = rs.question('Digite um numero para verificar se é par ou impar: ')

if (isOdd(numero) == true){
    console.log(`O numero ${numero} é impar! `)
} else {
    console.log(`O numero ${numero} é par!`)
}