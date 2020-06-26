let rs = require("readline-sync")

console.log("Por favor, insira um número: ")
let numero1 = rs.questionInt()

console.log("Agora inira um número maior que o numero anterior: ")
let numero2 = rs.questionInt()

if (numero1 <= numero2) {
    for(numero1; numero1 <= numero2; numero1++)
        console.log(numero1)
}

else { 
    for(numero2; numero2 <= numero1; numero2++)
        console.log(numero2)
}