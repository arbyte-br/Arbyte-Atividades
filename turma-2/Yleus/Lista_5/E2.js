let rs = require('readline-sync')

let pergunta1 = rs.questionInt("Digite um numero!\n>> ")
let pergunta2 = rs.questionInt("Digite outro numero!\n>> ")

for (pergunta1; pergunta1<=pergunta2; pergunta1++){
    console.log(pergunta1)
}