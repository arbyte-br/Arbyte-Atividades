let rs = require("readline-sync")

let valor1 = rs.question("Digite um numero!\n")
let valor2 = rs.question("Digite outro numero!\n")

let contador = valor1

for (let contador = valor1; contador <= valor2; contador++){
    console.log(contador)
}