let rs = require("readline-sync")

let macas = rs.questionInt("Quantas maçãs você vai comprar? ")

if (macas < 12){
    macas = macas * 0.30
    console.log('As maçãs sairão no valor de R$0.30 centavos e vai ficar no total de R$' + macas + ' Reais')
}else {
    macas = macas * 0.25
    console.log("As maçãs sairão no valor de R$0.25 centavos e vai ficar no total de R$" + macas + " reais")
}