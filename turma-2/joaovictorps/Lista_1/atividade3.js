let rs = require('readline-sync')

let senha = rs.questionInt('Digite a senha numérica: ')

if (senha === 1234) {
    console.log('ACESSO PERMITIDO')
} else {
    console.log('ACESSO NEGADO')
}