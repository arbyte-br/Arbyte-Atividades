let readline = require("readline-sync")

let salarioMinimo = 1045

let kilowvalor = ((salarioMinimo / 7) / 100).toFixed(2)

console.log("O valor de cada Kilowatts é de R$", kilowvalor)

let quantidade = readline.questionInt("Quantos Kilowatts foi gastos ? ")

let pergunta = readline.question("Deseja ver o valor com desconto ? S/N ").toLowerCase()

if (pergunta == "s") {
    var desconto = (quantidade * kilowvalor) / 10
    console.log("O valor a ser pago com 10% de desconto é de R$", (quantidade * kilowvalor) - desconto)
}
else {
    console.log("O valor a ser pago é de R$", quantidade * kilowvalor )
}
