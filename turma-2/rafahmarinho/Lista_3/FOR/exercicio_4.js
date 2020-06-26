let rs = require ('readline-sync')
let limite = rs.questionInt (console.log('Digite um número: '))

for (contador = 1; contador <= limite; contador ++) {
    if (contador % 2 === 0) {
    console.log (contador)
}
}