/*Faça um programa onde o usuário irá escolher se quer Converte graus Celsius
para Fahrenheit ou Fahrenheit para Celsius.*/

let rs = require(`readline-sync`)
let pergunta = rs.questionFloat(`Responda "1" para converter graus Celsius para Fahrenheit ou "2" para o contrario!\n`)
let graus = rs.questionFloat(`Digite a temperatura> `)

if(pergunta == '2'){
   let convercao = ((graus - 32)/1.8)
    console.log(`${convercao}°F`)
}else if(pergunta == '1'){
   let convercao = (1.8 * graus ) + 32
    console.log(`${convercao}°C`)
} 