let rs = require('readline-sync')

let limite = rs.questionInt("Digite um número")
let contador = 0

while (contador <= limite) {
   if (contador % 2 ===0) {
    console.log(contador)
}
contador++
}
