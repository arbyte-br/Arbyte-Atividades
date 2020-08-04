let rs = require('readline-sync')
let median = require('median')

let usuarioNota1 = rs.questionInt('Insira sua nota: ')
let usuarioNota2 = rs.questionInt('Insira sua nota: ')
let usuarioNota3 = rs.questionInt('Insira sua nota: ')
let usuarioNota4 = rs.questionInt('Insira sua nota: ')



let listaNota = [usuarioNota1, usuarioNota2, usuarioNota3, usuarioNota4]

let valor = median(listaNota)

console.log(`A sua media de notas é: ${valor}`)

// var median = require('median')
// var arr = [1, 15, 200, 30]
// var value = median(arr)

// console.log("median value is " + value)