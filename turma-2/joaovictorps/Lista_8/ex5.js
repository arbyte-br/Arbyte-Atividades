let rs = require('readline-sync')

function pegarNumero(numero) {
    numero = rs.questionFloat(`Olá ${nome}, digite o ${numero}° numero: \n >`)
    return numero
}

let nome = rs.question('Qual o seu nome ? \n >')
let num1 = pegarNumero(1)
let num2 = pegarNumero(2)
let num3 = pegarNumero(3)

let nomeEnumeros = {
    nome,
    numeros: [num1, num2, num3]
}

console.log(nomeEnumeros)