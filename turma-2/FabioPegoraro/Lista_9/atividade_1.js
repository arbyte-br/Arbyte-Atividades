//Faça uma programa que receba 4 notas e calcule a mediana e apresente ao usuário o resultado. 


let rs = require ('readline-sync')

let md = require('median')

let listadeNumero = []

let n1 = rs.questionInt('Insira um numero:')
let n2 = rs.questionInt('Insira outro numero:')
let n3 = rs.questionInt('Insira outro numero:')
let n4 = rs.questionInt('Insira outro numero:')

listadeNumero.push(n1, n2, n3, n4)

let mediana = md(listadeNumero) 

console.log("Essa é a média entre os 4 numeros: " + mediana)