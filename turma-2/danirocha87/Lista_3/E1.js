//Faça um programa que recebe um número de entrada e repita a
//mensagem “BIP BIP” de acordo com o número inserido.

let rs = require("readline-sync")

let numerodousuario = rs.questionInt("Digite um numero!") 

let contador =0

while(contador< numerodousuario){
     console.log("BIP BIP BIP")
     contador ++
}


