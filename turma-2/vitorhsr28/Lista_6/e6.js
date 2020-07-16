const rs = require('readline-sync')

let palavra = rs.question('Informe uma palavra. (Se ela terminar com "al", aparecerá na tela): ')

let resposta = palavra.endsWith('al') ? console.log(palavra) : console.log('Palavra não identificada.')