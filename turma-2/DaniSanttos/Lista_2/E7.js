let rs = require('readline-sync')

let senha = rs.question('Digite a senha para ter acesso ao sistema: ')

if (senha == 'batatafrita'){
    console.log('ACESSO PERMITIDO')
}else{
    console.log('ACESSO NEGADO')
}