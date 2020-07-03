let rs = require('readline-sync')



let limite = rs.questionInt('Digite um número par \n')
for (let contador = 0; contador <= limite ; contador++) {
    console.log('Numero ' + contador + 'támbem é par')
    } 

// while

    let contador = 0
    let limite = rs.questionInt('Digite um número par \n')
    
    
    while (contador <= limite) {
        if (contador % 2 === 0) {
        console.log('Numeros pares ' + contador)
        } 
        contador++ // mesmacoisa que contador = contador + 1      
    }