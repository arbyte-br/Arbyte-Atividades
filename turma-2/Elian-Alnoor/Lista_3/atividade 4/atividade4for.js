let rs = require("readline-sync")

let Num = rs.questionInt("Insira um número inteiro: \n")

for (cont = 0; cont <= Num; cont = cont + 2){
    console.log (cont)
}