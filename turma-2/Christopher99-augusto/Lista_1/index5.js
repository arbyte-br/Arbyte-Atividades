let readline = require("readline-sync")

console.log("Digite o 1º número inteiro: ")

let numero1 = readline.questionInt()

console.log("Digite o 2º número inteiro: ")

let numero2 = readline.questionInt()

console.log("Digite o 3º número inteiro: ")

let numero3 = readline.questionInt()

if (numero1 < numero2 && numero1 < numero3) {
    
    if (numero2 < numero3) {
        
        console.log(numero1, numero2, numero3)
    } 
    else {
        console.log(numero1, numero3, numero2)
    }
}


if (numero2 < numero1 && numero2 < numero3) {
    
    if (numero1 < numero3) {
        
        console.log(numero2, numero1, numero3)
    } 
    else {
        console.log(numero2, numero3, numero1)
    }
}

if (numero3 < numero1 && numero3 < numero2) {
    
    if (numero1 < numero2) {
        
        console.log(numero3, numero1, numero2)
    } 
    else {
        
        console.log(numero3, numero2, numero1)
    }
}