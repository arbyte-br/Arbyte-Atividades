let rs = require ('readline-sync')

let valor1 = rs.questionInt ('Digite um número\n')
let valor2 = rs.questionInt ('Digite outro número\n')

let contador = 0
let resultado = 0 

while (contador !== valor2) {
 resutado = resultado  + valor1
 contador = contador + 1 

}

console.log ("O resultado é: " + resultado)