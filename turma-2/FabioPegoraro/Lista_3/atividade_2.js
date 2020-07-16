let rs = require("readline-sync")

let numero1 = rs.questionFloat("Digite um numero?\n")
let numero2 = rs.questionInt("Digite outro numero?\n")




let resultado = 0


for(let contador = 0; contador < numero2; contador++){
    resultado = resultado + numero1 
}
console.log("O resultado da multipicação é: " + resultado)