let rs = require ('readline-sync')
let contador = 0
let limite = rs.questionInt (console.log('Digite um número: '))

while (contador <= limite) {
    if (contador % 2 === 0) {
    console.log (contador)
}
contador ++
}