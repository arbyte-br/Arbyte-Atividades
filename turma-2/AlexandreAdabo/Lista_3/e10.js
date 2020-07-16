let rs = require('readline-sync')

let numero = rs.questionInt('Digite um numero: ')

let i = 1

while(numero >= i){
    if(numero % i ===  0){
    console.log(i)
}
    i++
}
