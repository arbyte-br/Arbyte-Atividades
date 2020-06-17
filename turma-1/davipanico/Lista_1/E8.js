/* Escreva um programa que leia as medidas dos lados de um triângulo e escreva se ele é
Equilátero, Isósceles ou Escaleno.
Sendo que:
− Triângulo Equilátero: possui os 3 lados iguais.
− Triângulo Isóscele: possui 2 lados iguais.
− Triângulo Escaleno: possui 3 lados diferentes. */

// Variável onde chamamos o 'readline-sync'
var readline = require('readline-sync');

// Aqui temos medidas do triângulo que iremos armazenar nas variáveis 'lado1, 'lado2, 'lado3'.
var lado1 = readline.questionInt("Qual a medida do primeiro lado?  ");
var lado2 = readline.questionInt("Qual a medida do segundo lado?  ");
var lado3 = readline.questionInt("Qual a medida do terceiro lado?  ");

// Condição, se o 'lado1' for igual (==) ao 'lado2' e (&&) 'lado2' for igual (==) ao 'lado3' e (&&) o 'lado1' for igual (&&) ao 'lado3', iremos imprimir:
// 'Triângulo Equilátero', pois o Triângulo possui os 3 lados iguais.
// Caso a condição não sej atendida, vamos ao primeiro else if.
if(lado1 == lado2 && lado2 == lado3 && lado1 == lado3){
    console.log("Triângulo Equilátero");
}
// Condição, se o 'lado1' for igual (==) ao 'lado2' ou (||) 'lado2' for igual (==) ao 'lado3' ou (||) o 'lado1' for igual (==) ao 'lado3', iremos imprimir:
// 'Triângulo Isóscele', pois o Triângulo possui 2 lados iguais.
// Caso a condição não seja atendida, vamos para o segundo else if.
else if(lado1 == lado2 || lado2 == lado3 || lado1 == lado3){
    console.log("Triângulo Isóscele");
}
// Condição, se o 'lado1' for diferente (!=) do 'lado2' e (&&) o 'lado2' for diferente (!=) do 'lado3' e o 'lado1' for diferente (!=) do 'lado3', iremos imprimir:
// 'Triângulo Escaleno', pois o Triângulo possui 3 lados diferentes.
// Caso a condição também não seja atendida, vamos para o else, onde iremos imprimir: 'Não compatível'
else if(lado1 != lado2 && lado2 != lado3 && lado1 != lado3){
    console.log("Triângulo Escaleno");
}
else{
    console.log("Não compativel");
}

// PONTO DE ATENÇÃO: Nesse exercício usamos a prioridade de condições.
// Nossa primeira condição (IF) compara se todos os lados são iguais, assim quando chegarmos na segunda condição (ELSE IF)
// já teremos descartado a hipotese do Triângulo possuir três lados iguais, então só iremos comparar se algum dos lados são iguais,
// se sim, o Triângulo possui 2 lados iguais, se não, a terceira condição só vai confirmar se realmente todos os lados são diferentes.
