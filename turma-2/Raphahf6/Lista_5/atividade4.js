let rs = require('readline-sync')
let limite = rs.questionInt('Digite um numero: ')


for(counter = 0; counter <= limite; counter++){
    if(counter % 2 === 0){
        console.log('O numero ' + counter + ' é PAR!')
    } 
}