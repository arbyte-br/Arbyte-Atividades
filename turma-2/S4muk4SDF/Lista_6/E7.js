let rs = require("readline-sync")


let palavra = rs.question("Digite uma palavra: ")

let caracteresTotais = palavra.length


for (let posicao = 0; posicao < caracteresTotais; posicao++) {

    let caracterAtual = palavra.charAt(posicao)

    if (palavra.includes("p")) {
        posicao--

            if (caracterAtual === "m") {
                console.log("A palavra esta correta.")
            } else if (caracterAtual === "n") {
                console.log("A palavra esta incorreta.")
            }

    } else if (palavra.includes("b")) {
        posicao--

            if(caracterAtual === "m") {
                console.log("A palavra esta correta.")
            } else if (caracterAtual === "n") {
                console.log("A palavra esta incorreta.")
            }

    }
}