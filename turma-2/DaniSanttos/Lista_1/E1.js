let rs = require("readline-sync")
console.log("Vamos ver se você ja pode votar...\n")

console.log("Responda apenas com números\n")

let dia = rs.questionInt("Em que dia voce nasceu? ")
let mes = rs.questionInt("Em que mes voce nasceu? ")
let ano = rs.questionInt("Em que ano voce nasceu? ")

if (ano < 2004 && mes < 06){
    console.log("Sim, você já pode votar :)")
}else if (ano < 2004 ){
    console.log("Sim, você já pode votar :)")
}else{
    console.log("Infelizmente você ainda não pode votar :(")
}