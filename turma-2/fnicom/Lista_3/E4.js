let rs = require('readline-sync')

let number = rs.questionInt('Insira o numero: ')
let par = 0

while (par <= number){
    console.log(par)
    par = par + 2
}
console.log('FINAL')