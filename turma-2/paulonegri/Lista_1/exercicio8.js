/*Escreva um programa que leia as medidas dos lados de um triângulo e escreva se ele é
Equilátero, Isósceles ou Escaleno. Sendo que:
− Triângulo Equilátero: possui os 3 lados iguais.
− Triângulo Isóscele: possui 2 lados iguais.
− Triângulo Escaleno: possui 3 lados diferentes*/

let rs = require('readline-sync')
let catopt = rs.questionInt('Escreva o tamanho do cateto oposto do seu triangulo> ')
let catadj = rs.questionInt('Escreva o tamanho do cateto adjacente do seu triangulo> ')
let hip = rs.questionInt('Escreva o tamanho da hipotenusa do seu triangulo> ')

if(catopt == catadj && catopt == hip){
    console.log(`Seu triângulo é Equilátero!`)
}else if(catopt !== catadj && catopt !== hip){
    console.log(`Seu triângulo é Escaleno!`)
}else{
    console.log(`Seu triângulo é Isóscele!`)
}