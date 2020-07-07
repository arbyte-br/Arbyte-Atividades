let rs = require("readline-sync")

let palavra = rs.question("Digite alguma palavra: ")
let perguntaModificada = ""

for (contador = 0; contador < palavra.length; contador++) {
    let letraAtual = palavra.charAt(contador).toLowerCase()
    if (letraAtual === "a" || letraAtual === "e" || letraAtual === "i" || letraAtual === "o" || letraAtual === "u") {
        perguntaModificada = perguntaModificada + letraAtual.toUpperCase()
    }else {
        perguntaModificada = perguntaModificada + letraAtual
    }
}

console.log(perguntaModificada)