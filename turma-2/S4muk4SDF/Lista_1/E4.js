let rs = require("readline-sync")

let perguntaUsuario = rs.questionInt("Quantas maçãs deseja comprar? \n")

if (perguntaUsuario < 12) {
    perguntaUsuario = perguntaUsuario * 0.30
    console.log("Deu R$" + perguntaUsuario)
} else {
    perguntaUsuario = perguntaUsuario * 0.25
    console.log("Deu R$" + perguntaUsuario)
}