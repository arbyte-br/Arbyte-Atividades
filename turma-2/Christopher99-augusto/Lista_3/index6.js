let readline = require("readline-sync")

let pergunta = readline.question("Insira alguma coisa ")

while (pergunta != 0) {
    pergunta = readline.question("Insira 0 para sair ou qualquer outro número para continuar ")
}
console.log("Programa encerrado")