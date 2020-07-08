let readline = require("readline-sync")

let senha = readline.question("Qual a sua senha ? ")

if (senha == "batatafrita") {
    console.log("Acesso permitido. ")
} 
else {
    console.log("Acesso negado. ")
}