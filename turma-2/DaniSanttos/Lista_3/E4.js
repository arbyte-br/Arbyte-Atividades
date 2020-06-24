let rs = require("readline-sync")

let inp = rs.questionInt("Insira um numero: ")
contador = 0

while (contador <= inp){
    console.log(contador)
    contador = contador + 2
}
