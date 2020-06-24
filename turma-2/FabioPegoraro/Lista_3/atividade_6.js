let rs = require("readline-sync")

let respostaUsuario = rs.question("Escreva uma palavra e receba ela ao contrario\n")

let respotainvertida = respostaUsuario.split("").reverse().join("");

console.log("==============================")
console.log(respotainvertida);
console.log("==============================")

