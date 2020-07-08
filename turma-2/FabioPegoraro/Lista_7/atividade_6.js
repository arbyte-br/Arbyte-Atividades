

let rs = require("readline-sync")


let num = rs.questionFloat("Digite um numero entre 1 e 10:\n")

function detectarnumero(){
    if (num > 1 && num <= 10){
    return console.log("Número OK");
    }else {
        console.log ("O número deve ser de 1 a 10!")
    }
}
