// Escreva um programa que leia as medidas dos lados de um triângulo e escreva se ele é
// Equilátero, Isósceles ou Escaleno.
// Sendo que:
// − Triângulo Equilátero: possui os 3 lados iguais.
// − Triângulo Isóscele: possui 2 lados iguais.
// − Triângulo Escaleno: possui 3 lados diferentes.

let rs = require('readline-sync')

let lado1 = rs.questionFloat("Digite o 1º lado do triângulo: \n")
let lado2 = rs.questionFloat("Digite o 2º lado do triângulo: \n")
let lado3 = rs.questionFloat("Digite o 3º lado do triângulo: \n")

if(lado1 == lado2 && lado1 == lado3){
    console.log('Triângulo Equilátero') // − Triângulo Equilátero: possui os 3 lados iguais.
}else if(lado1 != lado2 && lado2 != lado3 && lado3 != lado1) {
    console.log('Triângulo Escaleno') // − Triângulo Escaleno: possui 3 lados diferentes.
}else {
    console.log('Triângulo Isóscele') // − Triângulo Isóscele: possui 2 lados iguais.
}
