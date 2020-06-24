let rs = require('readline-sync')

let base = rs.questionFloat('Digite a base de um numero: ')
let expoente = rs.questionInt('Digite o expoente: ')
let res
while(expoente > 0){
    res = base * base
    expoente--
}
console.log(res)
console.log("====================")