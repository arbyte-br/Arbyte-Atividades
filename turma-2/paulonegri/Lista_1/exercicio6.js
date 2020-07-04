/*Tendo como entrada a altura e o sexo codificado da seguinte forma:
Valor 1 para feminino
Valor 2 para masculino
de uma pessoa, construa um programa que calcule e imprima o valor de peso sugerido,
utilizando as seguintes fórmulas:
- para homens: (72.7 * Altura) – 58
- para mulheres: (62.1 * Altura) – 44.7*/

let rs = require('readline-sync')
let sexo = rs.questionInt('Digite 1 para Masculino ou 2 para Feminino)> ')
let altura = rs.questionFloat('Digite sua altura> ')
let peso

if(sexo == 1){
   peso = ((altura * 72.7) - 58)
   console.log(`Seu peso sugerido é ${peso}`)
}else{
    peso = ((altura * 69.1) - 44.7) 
    console.log(`Seu peso sugerido é ${peso}`)
}