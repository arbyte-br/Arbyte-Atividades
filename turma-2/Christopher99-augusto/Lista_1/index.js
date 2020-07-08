let readline = require("readline-sync")

console.log("Qual o ano você nasceu? ")

let anodenascimento = readline.question()

console.log("Qual o ano estamos? ")

let Queanoestamos = readline.question()

let idade = Queanoestamos - anodenascimento

if (idade >= 17) {
    console.log("Sim, você já tem idade para votar")
} else {
    console.log("Não, você não tem idade para votar")
}