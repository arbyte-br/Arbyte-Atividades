let rs = require('readline-sync')

let numero = rs.question("Digite um numero")
let contador = 1
let asterisco = "*"

if(numero >0){
    while (contador <= numero){
        console.log(asterisco.repeat(contador))
        contador++
    }}
    else{
        console.log("Numero precisa ser maior que 0")
    }



