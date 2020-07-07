let readline = require("readline-sync")

let produto = readline.questionInt("Qual o valor do produto que você quer comprar? ")

let real = readline.questionInt("Quantas moedas de 1 real você tem? ") * 1

let moedas50 = readline.questionInt("Quantas moedas de 50 centavos você tem? ") * 0.50

let moedas25 = readline.questionInt("Quantas moedas de 25 centavos você tem? ") * 0.25

let moedas10 = readline.questionInt("Quantas moedas de 10 centavos você tem? ") * 0.10

let moedas5 = readline.questionInt("Quantas moedas de 5 centavos você tem? ") * 0.5

let moedas1 = readline.questionInt("Quantas moedas de 1 centavo você tem? ") * 0.1

let porquinnho = real + moedas50 + moedas25 + moedas10 + moedas5 + moedas1

if (porquinho >= produto) {
    console.log("Você tem o valor nescessário")
}

else {
    console.log("Você não te o valor nescessário")
}