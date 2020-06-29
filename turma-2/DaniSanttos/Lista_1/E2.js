let rs = require("readline-sync")

let n = rs.questionInt("Digite um numero para saber se ele é par ou impar: ")

if (n % 2 === 0){
    console.log("Seu número é par.")
}else{
    console.log("Seu número é impar.")
}