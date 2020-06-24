let rs = require ('readline-sync')

let NumeroPar = rs.questionInt ('Digite um número par: ')
let contador = 0

while (contador < NumeroPar) {
    console.log (contador)
    contador = contador + 2
}

