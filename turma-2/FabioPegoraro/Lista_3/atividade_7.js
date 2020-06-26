let rs = require("readline-sync")

let numero = rs.questionInt("Qual numero sera elevado?\n")
let potencia = rs.questionInt("Elevado a qual potencia?\n")

let contador = 1;
let potencia = 0;


while(contador !== numero){
    potencia = potencia * numero
    contador = contador + 1
}

