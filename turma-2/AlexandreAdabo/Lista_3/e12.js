let rs = require('readline-sync')
let numeros = []
let numero = rs.questionInt('Digite um numero: ')
let limite = 15
let soma = 0
let media = 0
while(numeros.length < limite){
    numero = rs.questionInt('Digite um numero: ')
    numeros.push(numero)
    soma = soma + numero
    media = (soma/limite)
}
console.log('Os 15 numeros digitados sao: ', numeros)
console.log('A soma dos 15 numeros e: ', soma)
console.log('A media dos 15 numeros digitados e: ', media)