var rs = require("readline-sync");

var pergunta

while(pergunta !== "0") {
    pergunta = rs.question("Insira 0 para sair ou qualquer outra tecla para o continuar.")
}
console.log("Você saiu!")