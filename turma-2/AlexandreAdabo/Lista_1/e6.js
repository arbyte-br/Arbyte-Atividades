let rs = require('readline-sync')

let sexo = rs.questionInt('Qual seu sexo ? Digite 1 para Feminino ou 2 para Masculino: \n')
let altura = rs.questionFloat('Qual a sua altura ? \n')
let pesosugerido = 0

if(sexo ===1){
    pesosugerido = (62.1 * altura) - 44.7
    console.log('Seu peso sugerido é: ' + pesosugerido)
} else if (sexo ===2){
    pesosugerido = (72.7 * altura) - 58
    console.log('Seu peso sugerido é: ' + pesosugerido)
}