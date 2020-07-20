const rs = require('readline-sync')

let palavra = rs.question ('Informe uma palavra: ')

if (palavra.includes('a') || palavra.includes('e') || palavra.includes('i') || palavra.includes('o'|| palavra.includes('u') ) ) {
    console.log (`A palavra ${palavra} possui vogal(is)`)
} else {console.log(`A palavra ${palavra} não possui vogal(is)`)}