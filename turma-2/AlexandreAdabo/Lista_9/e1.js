var rs= require ('readline-sync')
var median = require('median')
var arr = []
var num1 = rs.questionInt('Digite o primeiro numero: ')
arr.push(num1)
var num2 = rs.questionInt('Digite o segundo numero: ')
arr.push(num2)
var num3 = rs.questionInt('Digite o terceiro numero: ')
arr.push(num3)
var num4 = rs.questionInt('Digite o quarto numero: ')
arr.push(num4)
var value = median(arr)
 
console.log("A media dos numeros é " + value)