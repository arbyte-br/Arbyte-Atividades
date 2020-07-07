let rs = require("readline-sync")

let anoAtual = 2020

console.log("Descubra se este ano você pode votar")

console.log("\n===================================================\n")

let perguntaUsuario = rs.question("Em que ano você nasceu?\n")

console.log("\n===================================================\n")

perguntaUsuario = anoAtual - perguntaUsuario

if (perguntaUsuario >= 18) {
    console.log("Este ano você poderá votar.")
} else {
    console.log("Você não poderá votar este ano.")
}

