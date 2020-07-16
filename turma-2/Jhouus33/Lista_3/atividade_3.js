let rs = require('readline-sync')

let contador = 0
let limite = 100

while (contador <= limite) {
    if (contador % 2 !== 0) {
    console.log('Numeros ímpares ' + contador)
    } 
    contador++ // mesmacoisa que contador = contador + 1      
}
