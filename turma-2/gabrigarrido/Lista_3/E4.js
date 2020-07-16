var rs = require("readline-sync");

var numero = rs.questionInt("Informe um número:");
contador = 0

while(contador < numero){
    if(contador % 2 == 0){
        console.log(contador)
        
    }
    contador++
    
}