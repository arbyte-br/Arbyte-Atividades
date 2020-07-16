let rs = require('readline-sync')

let base = rs.questionFloat('Por favor insira o número base: ')
let potencia = rs.questionInt('Por favor digite a potencia: ')
let result
while(potencia > 0){
    result = base * base
    potencia--
}
console.log(result)
console.log("Obrigado!!!!")