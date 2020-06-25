let rs = require("readline-sync")

let Num = rs.question("Insira 0 para sair ou qualquer outra tecla para continuar: \n")

for(Num; Num !== 0; Num){
    Num = rs.questionInt("Insira 0 para sair ou qualquer outra tecla para continuar: \n")
}