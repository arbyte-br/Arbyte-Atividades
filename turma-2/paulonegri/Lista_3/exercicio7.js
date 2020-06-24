//Faça um programa que calcule a potência (potenciação) de um número.Para isso ele deve receber 
//dois números de entrada: o primeiro número é a base da potência, o segundo número será a
//potência

let rs = require("readline-sync")
console.log("Seja bem vindo!")
let numero1
let numero2
let contador = 0
let resul = 1
let pergunta
while(pergunta !== "exit"){
    
    numero1 = rs.questionInt("Digite o numero base da potecia!")
    numero2 = rs.questionInt("Digite o numero exponecial da potecia!")
    
    while(numero2 > contador){
        resul = (resul * numero1)
        contador++
    }
    console.log(resul)
    pergunta = rs.question("Gostaria de fazer uma nova potenciacao?Caso nao queira resposda exit\n")
}
