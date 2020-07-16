// 4. (OBRIGATÓRIO) Faça um algoritmo que receba um número e diga se ele é primo ou
// não
// Utilize o pacote : https://www.npmjs.com/package/prime-number

let isPrime = require('prime-number')
let rs = require('readline-sync') 

let respostaUsuario = rs.questionFloat('Insira um numero: ')

let numeroPrimo = isPrime(respostaUsuario)

if (numeroPrimo === true){
    console.log(`Este número '${respostaUsuario}' é: PRIMO!`)
}
else { console.log(`Este número '${respostaUsuario}' é: COMPOSTO!`)}

