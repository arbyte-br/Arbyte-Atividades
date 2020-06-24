let rs = require('readline-sync')

let contador = 0
let limite = rs.questionInt('Digite um número par \n')


while (contador <= limite) {
    if (contador % 2 === 0) {
    console.log('Numeros pares ' + contador)
    } 
    contador++ // mesmacoisa que contador = contador + 1      
}
