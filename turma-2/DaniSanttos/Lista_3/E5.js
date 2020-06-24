let rs = require("readline-sync")

let inp = rs.questionInt("Insira 0 para sair ou qualquer outro numero para continuar: ")
sair = 0
while (sair != inp ) {
    inp = rs.questionInt("Insira 0 para sair ou qualquer outro numero para continuar: ")
}