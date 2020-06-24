/*Exercicio 02* no 07 usar questionfloat*/ 

var rs = require("readline-sync")
var numero = rs.question("Insira um numero")

if (numero %2 === 0 ){
    console.log("É par!")
} else {
    console.log("É impar!")
}
