let rs = require("readline-sync")



let numero1 = rs.questionFloat("Digite o primeiro número: ")
let numero2 = rs.questionInt("Digite o segundo número: ")

let contador = 0

let resultado = 0

while(contador < numero2){
    resultado = resultado + numero1
    contador++
}  

console.log("O resultado é: " + resultado)