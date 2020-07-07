let rs = require("readline-sync")

let perguntaUsuario = rs.questionInt("Descubra um país pelo DDI dele: ")


if (perguntaUsuario == 1) {
    console.log(`${perguntaUsuario} é o DDI dos Estados Unidos.`)
} else if (perguntaUsuario == 49) {
    console.log(`${perguntaUsuario} é o DDI da Alemanha.`)
} else if (perguntaUsuario == 54) {
    console.log(`${perguntaUsuario} é o DDI da Argentina.`)
} else if (perguntaUsuario == 55) {
    console.log(`${perguntaUsuario} é o DDI do Brasil.`)
} else if (perguntaUsuario == 35) {
    console.log(`${perguntaUsuario} é o DDI de Portugal.`)
} else {
    console.log("DDI não cadastrado.")
}

