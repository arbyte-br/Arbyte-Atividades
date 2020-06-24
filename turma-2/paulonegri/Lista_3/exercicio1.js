//Faça um programa que recebe um número de entrada e repita amensagem “BIP BIP” de 
//acordo com o número inserido.EX: usuário inseriu 3O programa imprime: BIP BIP BIP BIP BIP BIP

let rs = require("readline-sync")
console.log("Bem vindo!")
let bip = rs.questionInt("Digite o numero de BIP BIP que gostaria que fosse exibido!")
console.log("##############################################")
let contador = 0

while(contador < bip) {
   console.log("BIP BIP")
    contador++
    
}
