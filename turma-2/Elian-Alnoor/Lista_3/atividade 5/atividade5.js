let rs = require("readline-sync")

let Num = rs.question("Insira 0 para sair ou qualquer outra tecla para continuar: \n")



while(Num !== 0){
    Num = rs.questionInt("Insira 0 para sair ou qualquer outra tecla para continuar: \n")
}