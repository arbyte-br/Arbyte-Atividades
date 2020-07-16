//Faça um programa que leia dois números, o primeiro é o valor inicial de um contador, e o segundo é
// o valor final do contador (verifique se o valor inicial fornecido é inferior ao valor final). 
//Usando o comando For, escreva na tela uma contagem que comece no primeiro número lido, escreva os 
//números seguintes colocando apenas um número em cada nova linha da tela, até chegar ao valor final 
//indicado.

let rs= require("readline-sync")
console.log("Seja bem vindo!")
pergunta = rs.question("Gostaria de ver a sequencia desses numeros?")

for(null;pergunta !== "nao";null){
    let numero1 = rs.questionInt("Digite o valor inicial = ")
    let numero2 = rs.questionInt("Digite o valor final = ")

    if(numero1 >= numero2){
    
    console.log(" O numero inicial deve ser menor que o numero final.")

    }else if(numero1 < numero2){
    
        for(null; numero1 <= numero2; numero1++){
        console.log(numero1)        
        
        }
    }
pergunta = rs.question("Gostaria de fazer uma nova sequencia?")    
}