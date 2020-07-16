let rs= require('readline-sync')

let numero = rs.questionInt('Digite um número: ')

for(let contador= 0 ; contador <= numero; contador++) {
    if(contador % 2 === 0) {
        console.log(contador)
    }
} 