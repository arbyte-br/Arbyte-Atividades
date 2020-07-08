let rs = require("readline-sync")

let maças = rs.questionInt("Quantas maças vai querer?")

let preçoMaças = 0.3

let preçoPromoçao = 0.25

if (maças < 12) {
    console.log("Sao " + preçoMaças * maças + "reais.")
} else {
    console.log("Sao " + preçoPromoçao * maças + "reais.")
}