let rs = require('readline-sync')

let n = rs.questionInt('Escreva um numero: ')

if (n%2 == 0){
    console.log(`O numero ${n} e par`)
}else{
    console.log(`O numero ${n} e impar`)
}