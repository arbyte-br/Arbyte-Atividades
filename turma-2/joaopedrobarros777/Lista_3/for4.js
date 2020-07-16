let rs = require("readline-sync")

let limite = rs.questionInt("Digite um número: ")

for (contador = 0; contador <= limite; contador++){
    if (contador % 2 === 0) {
        console.log("Número " + contador + " é par.")
        }
        
}
