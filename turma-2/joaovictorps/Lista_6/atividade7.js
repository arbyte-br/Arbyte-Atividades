let rs = require('readline-sync')

let palavra = rs.question('Digite uma palavra: ')

if(palavra.includes('np')) {
    console.log('Palavra errada! Você digitou "n" antes de "p".')
} else if (palavra.includes('nb')) {
    console.log('Palavra errada! Você digitou "n" antes de "b".')
} else {
    console.log('Palavra correta!')
}