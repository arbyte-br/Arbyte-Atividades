// // 1. (OBRIGATÓRIO) Faça uma programa que receba 4 notas e calcule a mediana e
// // apresente ao usuário o resultado.
// Utilize o pacote : https://www.npmjs.com/package/median

let rs = require  ('readline-sync')
let median = require ('median')

let listaNumeros = []

console.log('Insira até 4 números:')

for (let i = 1; i <= 4; i++) {
    let respostaUsuario = rs.questionInt('')
    listaNumeros.push(respostaUsuario)    
}

let mediana = median(listaNumeros)
    console.log('Mediana: '+ mediana);
