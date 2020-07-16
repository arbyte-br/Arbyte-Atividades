let rs = require('readline-sync')

let palavra = rs.question('Digite uma palavra: \n')

if(palavra.endsWith('al')){
    console.log(palavra)
} else {
    console.log('palavra não identificada')
}