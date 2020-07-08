//As maçãs custam R$ 0,30 cada se forem compradas menos do que 12, e R$ 0,25 se forem compradas 12 ou mais.
//Escreva um programa que leia o número de maçãs compradas, calcule e escreva o valor total da compra 

let rs = require("readline-sync")

let quantidade = rs.question("Quantas maças você quer?\n")

let valorMenor12 = 0.30
let valorMaior12 = 0.25
let valorMaca = 0

if(quantidade <= 12){
    valorMaca = valorMenor12
}else{
    valorMaca = valorMaior12
} 

let resultado = quantidade*valorMaca
let resultadoComCifrao = resultado.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });

console.log(`As ${quantidade} maças darão: ${resultadoComCifrao}`);


