let rs = require("readline-sync")


let numPar = rs.questionInt("Por favor insira um numero, vou te informar todos os numeros pares ate o seu numero: \n")
let numero = 0

while(numero <= numPar){ 
    console.log(numero) 
    numero = (numero + 2)
    
} 

