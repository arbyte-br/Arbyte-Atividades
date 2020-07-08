let rs = require('readline-sync')

let senhaDigitada = rs.questionInt('Digite a senha: ')
let senhaCorreta = 1234

if(senhaDigitada === senhaCorreta){
    console.log('ACESSO PERMITIDO')
} else {
    console.log('ACESSO NEGADO')
}