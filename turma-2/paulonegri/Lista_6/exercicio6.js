//Faça um programa que receba uma palavra e verifica se ela termina
//com “al” se termina com “al” então imprime a palavra se não imprime “palavra não
//identificada”.
//Utilize o método endsWith()

let rs = require('readline-sync')
let palavra = rs.question(`Digite uma palavra aqui: `)

palavra.endsWith('al') ? console.log(`Palavra identificada -> ${palavra}`) 
: console.log(`palavra não identificada`)


let i = rs.question(`Gostaria de tentar novamente?(Responda com sim ou nao)`).toLowerCase()
for(i; i !== 'nao'; null){
    palavra = rs.question(`Digite uma palavra aqui: `)
    palavra.endsWith('al') ? console.log(`Palavra identificada -> ${palavra}`) 
    : console.log(`palavra não identificada`)
    i = rs.question(`Gostaria de tentar novamente?(Responda com sim ou nao)`).toLowerCase()
}
