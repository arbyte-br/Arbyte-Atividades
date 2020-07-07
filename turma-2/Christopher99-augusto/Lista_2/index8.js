let readline = require("readline-sync")

let texto = readline.question("Escreva um texto ")

if (texto[0] == texto[0].toUpperCase()) {
    console.log("A primeira letra é maiúscula")
}
else {
    console.log("A primeira letra é minúscula")
}