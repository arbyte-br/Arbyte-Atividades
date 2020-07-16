let rs = require('readline-sync')



let numeroRepeticoes = rs.question('Insira qualquer número: ')

let i = 0
let caracter = '*'


while (i <= numeroRepeticoes) {

    console.log(caracter)
    caracter = caracter + '*'
    i++
    
}