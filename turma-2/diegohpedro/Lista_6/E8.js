// (OBRIGATÓRIO) Faça um programa que receba uma palavra e diga se há vogais ou
// não.
// Utilize o método indexOf()

let rs = require('readline-sync')

let palavra = rs.question('Insira uma palavra: ')

if(palavra.indexOf('a', 'e', 'i', 'o', 'u')){
    console.log('Sua palavra possui vogal')
    
}else {
    console.log('Sua palavra não possui vogais')
}
// arrumar exercicio 8 



let rs = require('readline-sync');
let palavra = rs.question("Digite uma palavra: ").toLowerCase()
let temVogal = false;
let vogais = ['a','e','i','o','u']
for (let i = 0; i < vogais.length;i++){
    if (palavra.indexOf(vogais[i]) !== -1) {
        temVogal = true;
    }
}
temVogal ? console.log('Existem vogais nesta palavra.') : console.log('Não existem vogais nesta palavra.');


// if (palavra == palavra.indexOf('a') || palavra == palavra.indexOf('e') || palavra == palavra.indexOf('i') || palavra == palavra.indexOf('o') || palavra == palavra.indexOf('u')){
//     console.log(`Sua palavra ${palavra} possui vogais`)
// } else {
//     console.log(`Sua palavra ${palavra} não possui vogais`)
// }
// }

