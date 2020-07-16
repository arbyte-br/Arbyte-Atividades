
let rs = require("readline-sync")

let n = rs.questionInt("insira um número inteiro:\n")

let i = 1

str = ""

while(i<=n){
        str = str + " * "
        console.log(str)
        i++
}