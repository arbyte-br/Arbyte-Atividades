// recebe uma frase
// imprima a frase em letras maiusculas


let rs= require('readline-sync')

let frase= rs.question ('Qual sua frase? \n')

console.log (frase.toUpperCase())