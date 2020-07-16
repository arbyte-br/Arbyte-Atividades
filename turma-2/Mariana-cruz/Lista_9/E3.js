// // 3. (OBRIGATÓRIO) Faça um algoritmo que receba um número e diga se ele é par ou
// // ímpar
// // Utilize o pacote : https://www.npmjs.com/package/is-odd


let isOdd = require('is-odd');
let rs = require('readline-sync') 

let respostaUsuario = rs.questionFloat('Insira um numero: ')

let numeroOdd = isOdd(respostaUsuario)

if (numeroOdd === true){
    console.log(`Este número '${respostaUsuario}' é: ÍMPAR!`)
}
else { console.log(`Este número '${respostaUsuario}' é: PAR!`)}
