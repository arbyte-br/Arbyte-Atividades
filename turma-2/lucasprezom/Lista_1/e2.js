let rs = require ('readline-sync')

numero = rs.questionInt ('Digite um numero:\n')
if (numero%2 === 0) {
    console.log ('O numero é par!')
} else {
    console.log ('O numero é impar!')
}
