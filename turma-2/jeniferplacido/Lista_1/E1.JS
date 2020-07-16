let rs = require("readline-sync")

let anoDeNascimento = rs.questionInt("Digite o ano em que voce nasceu!")

let ano = 2020

if (ano - anoDeNascimento >= 16){
    console.log("Voce podera votar esse ano!")
} else { 
    console.log("Cresça!")
}