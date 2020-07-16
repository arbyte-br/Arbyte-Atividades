let rs = require('readline-sync')

let question = rs.question('Digite uma palavra: ')

let verificaPalavra = question.includes('mp','mb')

if(verificaPalavra){
    console.log('A palavra esta escrita corretamente')
} else {
    console.log('Antes de “p” ou “b” devemos usar M')
}