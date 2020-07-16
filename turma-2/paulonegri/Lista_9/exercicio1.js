/*Faça uma programa que receba 4 notas e calcule a mediana e
apresente ao usuário o resultado*/

const rs = require(`readline-sync`)
const mediana = require(`median`)
const media = []

media.push(rs.questionInt(`Digite um numero: `))
media.push(rs.questionInt(`Digite um numero: `))
media.push(rs.questionInt(`Digite um numero: `))
media.push(rs.questionInt(`Digite um numero: `))
const valor = mediana(media)
console.log(`O valor medio é ${valor}`)