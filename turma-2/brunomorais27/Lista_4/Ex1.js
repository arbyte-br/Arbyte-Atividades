let rs = require('readline-sync')

let valor1 = rs.questionInt('Digite um numero entre 1 e 100: ')
let valor2 = rs.questionInt('Digite outro numero entre 1 e 100: ')

if(valor1 < valor2){
    while (valor1 < valor2){
        if (valor1 % 5 == 0 && valor1 % 7 == 0) {
            console.log(`${valor1} PING PONG`)
        } else if (valor1 % 7 == 0){
            console.log(`${valor1} PING`)
        } else if (valor1 % 5 == 0){
            console.log (`${valor1} PONG`)
        } else{
            console.log(valor1)
        }
        valor1++
    } 
}else{
    while (valor1 > valor2){
        
        if (valor2 % 5 == 0 && valor2 % 7 == 0) {
            console.log(`${valor2} PING PONG`)
        } else if (valor2 % 7 == 0){
            console.log(`${valor2} PING`)
        } else if (valor2 % 5 == 0){
            console.log (`${valor2} PONG`)
        } else{
            console.log(valor2)
        }
        valor2++
    } 
}