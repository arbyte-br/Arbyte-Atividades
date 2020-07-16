let rs = require("readline-sync")

let corXicara = rs.question("Qual será a cor da xícara? ")
let perguntaQuantidade = rs.question("A xícara está cheia ou não?(Coloque sim ou não) ")


let xicaraQuantidade = ""

if (perguntaQuantidade == "sim") {
    xicaraQuantidade = "cheia."
} else {
    xicaraQuantidade = "não está cheia."
}

let xicara = {Cor: corXicara, Quantidade: xicaraQuantidade}


console.log(xicara)





