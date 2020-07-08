// Escreva um programa que leia as medidas dos lados de um triângulo e escreva se ele é
// Equilátero, Isósceles ou Escaleno.
// Sendo que:
// − Triângulo Equilátero: possui os 3 lados iguais.
// − Triângulo Isóscele: possui 2 lados iguais.
// − Triângulo Escaleno: possui 3 lados diferentes.

let readlineSync = require('readline-sync');
let num1 = readlineSync.questionInt('Insira o primeiro número: ');
let num2 = readlineSync.questionInt('Insire o segundo número: ');
let num3 = readlineSync.questionInt('Insira o terceiro número: ');

if ((num1 == num2) && (num2 == num3)) {
    console.log('O triângulo é do tipo equilátero pois os três lado são iguais.');
} else if ((num1 != num2) && (num2 != num3) && (num1 != num3)) {
    console.log('O triângulo é do tipo escaleno pois os três lados são diferentes.');
} else {
    console.log('O triângulo é do tipo isócele pois somente dois lados são iguais');
}