let rs = require("readline-sync")


let perguntaSexo = rs.question("Qual o seu sexo? ")

perguntaSexo.toLowerCase()

let altura = rs.questionInt("Qual sua altura?(Ex: 1.75) ")


if (perguntaSexo === "masculino") {
    let sugestaoPeso = (72.7 * altura) - 58
    console.log('Sugestão de paso: ', sugestaoPeso)
    
} else if (perguntaSexo === "feminino") {
    let sugestaoPeso2 = (62.1  * altura) - 44.7
    console.log('Sugestão de paso: ', sugestaoPeso2)
}


    // tenho q ver oq kraias ta acontecendo