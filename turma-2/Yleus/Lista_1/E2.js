let rs = require('readline-sync')

let pergunta = rs.questionInt("Digite um numero!\n>>")
let variavel = 2


if (Number.isInteger(pergunta / variavel)){
    console.log("O numero digitado e par")
}
else {
    console.log("O numero digitado e impar")
}
    
    

