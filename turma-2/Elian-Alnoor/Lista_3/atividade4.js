let rs = require("readline-sync")

let Num = rs.questionInt("Insira um número inteiro: \n")

let cont = 0

while (cont <= Num){
    console.log (cont)
    cont = cont + 2
}