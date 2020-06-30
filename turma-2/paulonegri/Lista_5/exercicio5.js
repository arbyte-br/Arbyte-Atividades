//Fazer um programa que calcule e imprima o fatorial de um número fornecido pelo usuário, usando o 
//comando For.. Perguntar ao usuário se ele deseja calcular o fatorial de outro número e repetir a 
//execução do programa tantas vezes quantas o usuário indicar.

let rs = require("readline-sync")
let numero 


    for(let pg; pg!=="nao"; ){
        numero = rs.questionInt("Digite um numero: ")
        let numeroDaConta = numero
        for(let i=1; i<=numero; i++){
            
            numeroDaConta = (numeroDaConta * i)
                   
        }
    console.log("o fatorial do seu numero é " + numeroDaConta)  
    pg = rs.question("Gostaria de saber o fatorial deum novo numero?(sim ou nao) ").toLowerCase()
    
    }
