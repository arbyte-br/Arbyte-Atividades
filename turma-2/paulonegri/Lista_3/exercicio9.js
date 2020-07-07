/*Faça um algoritmo que receba uma palavra e imprima cada caractere da palavra em
uma linha.
EX: usuário informou MAÇÃ
O algoritmo imprime:
M
A
Ç
Ã*/

let rs = require(`readline-sync`)
let palavra = rs.question(`Digite uma palavra >`)
let i = 0

while(i < palavra.length){
    console.log(palavra.charAt(i))
    i++
}