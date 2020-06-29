/* Faça um programa onde o usuário irá escolhe se que Converte graus Celsius
para Fahrenheit ou Fahrenheit para Celsius. */

// Variável onde chamamos o 'readline-sync'.
var readline = require('readline-sync')

// Variável que perguntamos ao usuário qual conversão ele deseja fazer, sendo que 1 é de Celsius para Fahrenheit e 2 de Farenheit para Celsius.
// Utilizamos o \n para ter uma quebra de linha na hora de apresentar a informação no console.
var pergunta = readline.question('O que você deseja converter? \nEscreva 1 para converter Celsius para Fahrenheit \nEscreva 2 para converter Fahrenheit em Celsius')

// Condição, aqui verificamos se a variável 'pergunta' é igual (==) a 1, se sim, sabemos que será uma conversão de Celsius para Farenheit.
// Criamos a variável de 'celsius' para pedir quantos Celsius o usuário deseja converter.
// Após isso criamos outra variável com o nome de 'resultado', dentro dela fazemos o cálculo da conversão de Celsius para Farenheit.
// A fórmula de conversão é a quantidade de Celsius vezes (*) 9 dividido (/) por 5 mais (+) 32.
// Depois imprimimos no console a variável 'celsius', seguido por 'Celsius são', a variável resultado e 'Farenheit'.
if (pergunta == 1) {
    var celsius = readline.questionInt('Quantos Celsius? ')
    var resultado = ((celsius * 9) / 5) + 32
    console.log(celsius, 'Celsius são', resultado, 'Farenheit')
}
// Condição, caso a variável 'pergunta' seja igual (==) a 2, isso significa que a conversão será de Fahrenheit para Celsius.
// Criamos a variável de 'Farenheit' para pedir quantos Celsius o usuário deseja converter.
// Após isso criamos outra variável com o nome de 'resultado', dentro dela fazemos o cálculo da conversão de Fahrenheit para Celsius.
// A fórmula de conversão é a quantidade de Fahrenheit menos (-) 32 vezes (*) 5 dividido (/) por 9.
// Depois imprimimos no console a variável 'fahrenheit', seguido por 'Farenheit são', a variável resultado e 'Celsius'
else if (pergunta == 2) {
    var fahrenheit = readline.questionInt('Quantos Fahrenheit? ')
    var resultado = ((fahrenheit - 32) * 5) / 9
    console.log(fahrenheit, 'Farenheit são', resultado, 'Celsius')
}
// Caso a variável 'pergunta' não seja 1 nem 2, iremos imprimir no console 'Opção não disponível'.
else {
    console.log('Opção não disponível')
}