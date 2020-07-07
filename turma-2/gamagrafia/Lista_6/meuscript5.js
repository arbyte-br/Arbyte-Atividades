// Recebe um nome
// imprime a terceira letra do nome

let rs= require ('readline-sync')

let nome= rs.question ("Qual seu nome?")

console.log ( nome.charAt(2) )