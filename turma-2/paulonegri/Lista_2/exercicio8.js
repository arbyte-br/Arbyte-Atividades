/*Faça um algoritmo que receba um texto de entrada e diga se a primeira letra é
maiúscula ou não*/

let rs = require(`readline-sync`)
let texto = rs.question(`Digite uma frase: `)
let minuscula = `qwertyuiopasdfghjklçzxcvbnm`
let primeiraLetra = texto[0]

if(minuscula.includes(primeiraLetra)){
    console.log(`A primeira letra não é maiúscula!`)
}else{
    console.log(`A primeira letra é maiúscula!`)
}