let rs = require('readline-sync')

let counter = 0
let limite = rs.questionInt('Digite um numero: ')

while(counter <= limite){
    if(counter % 2 === 0){
        console.log('O numero ' + counter + ' é PAR!')
    } 
    counter++
}