let rs = require("readline-sync")



let numero1 = rs.questionFloat("Digite o primeiro número: ")
let numero2 = rs.questionInt("Digite o segundo número: ")



let resultado = 0





for (contador = 0; contador < numero2; contador++){
    resultado = resultado + numero1
    
}

console.log("O resultado é: " + resultado)