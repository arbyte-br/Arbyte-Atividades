let rs = require('readline-sync')

let senha = rs.question('Digite a senha correta: ')


if (senha === '1234') {
    console.log('ACESSO PERMITIDO!')
} else {
    console.log('ACESSO NEGADO!')
}