let rs = require('readline-sync')

let anoNascimento = rs.questionInt('Por favor, digite o ano do seu nascimento para saber se você já pode votar: ')

if (anoNascimento <= 2004) {
    console.log('Você já pode votar! ')
} else {
    console.log('Você ainda não tem a idade necessária para votar! ')
} 