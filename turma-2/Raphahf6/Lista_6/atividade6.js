let rs = require('readline-sync')

let question = rs.question('Digite uma palavra: ')

let verificaPalavra = question.endsWith('al')

if(verificaPalavra){
    console.log(question)
} else{
    console.log('Palavra não identificada')
}