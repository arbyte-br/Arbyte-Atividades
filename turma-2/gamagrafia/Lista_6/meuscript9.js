// recebe uma frase
// troca a palavra bosta por estrume


let rs= require('readline-sync')

let frase= rs.question ('Qual sua frase? \n')

console.log (frase.replace(/bosta/g, "estrume"))


