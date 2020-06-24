//​Criar um algoritmo que realize a multiplicação de dois números maiores que 
//zero SEM usar o operador de multiplicação (*)

let rs = require("readline-sync")
console.log("Bem vindo!")
let numero1 = rs.questionInt("digite um numero\n")
let numero2 = rs.questionInt("digite outro numero\n")

contador=0
resul=0

while(contador<numero1){
    contador++
    resul = resul + numero2
}

console.log("sua resposta é " + resul)