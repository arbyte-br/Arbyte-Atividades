let rs = require("readline-sync")

let maçã = rs.questionInt ("Quantas maças voce vai querer?")

let preçoMacã = 0.30

let maçãComDesconto = 0.25

if (maçã < 12) {
    console.log("Custa "  + preçoMacã * maçã + " reais")

} else {
    console.log("Custa "  + maçãComDesconto * maçã + " reais")
}

