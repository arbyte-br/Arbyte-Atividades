// Faça um programa onde o usuário irá escolhe se que Converte graus Celsius
// para Fahrenheit ou Fahrenheit para Celsius.

let rs = require('readline-sync')
let valor = 0
let escolha = rs.questionInt('Digite 1 para Converte graus Celsius para Fahrenheit OU 2 para converter de Fahrenheit para Celsius \n')
if(escolha == 1){
    valor = rs.questionFloat('Digite o valor em Celsius para conversão \n')
    soma = (valor * 9/5) + 32
    console.log(`${valor}º Celsius siginificam ${soma} em Fahrenheit`)
}else if(escolha == 2){
    valor = rs.questionFloat('Digite o valor em Fahrenheit para conversão \n')
    soma = (valor - 32) * 5 / 9
    console.log(`${valor}º Fahrenheit siginificam ${soma}º Celsius`)
}else{
    console.log('Não, não, você não entendeu, responda 1 ou 2')
  
}