let rs = require("readline-sync")

let par = rs.questionInt("Digite um numero ")

if (par % 2 === 0){
    console.log("Este numero é par")
}

else{
    console.log("Este numero é impar")
}