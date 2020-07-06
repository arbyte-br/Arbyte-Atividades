//Escreva uma função que recebe dois parâmetros numéricos e retorne o menor número. 
//Solicite dois números para o usuário e forneça como argumento para esta função. 
//Escreva o resultado da função na tela dizendo qual menor número. 

let rs = require("readline-sync")


let n1 = rs.questionFloat("Digite um numero Jogador 1:\n")
let n2 = rs.questionFloat("Digite um numero Jogador 2:\n")

function numero(n1=0,n2=0){
    if (n1 < n2){
         return n1
    }else {
       return n2
    }
 }

 let resultado = numero(n1,n2)
console.log(resultado + " é o menor")