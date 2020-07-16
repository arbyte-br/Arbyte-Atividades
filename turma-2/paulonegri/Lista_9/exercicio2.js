/*Faça um algoritmo que receba peso e altura do usuário e calcule o
IMC.*/

const rs = require(`readline-sync`)
const fi = require(`fasam-imc-calc`)

const peso = rs.questionFloat(`Digite seu peso: `)
const altura = rs.questionFloat(`Digite sua altura: `)
const imc = new fi(peso, altura)

console.log(imc.calc())
