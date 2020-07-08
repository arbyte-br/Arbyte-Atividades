let rs = require ('readline-sync')
let senha = 1234
let digite = rs.questionInt('Digite a senha correta: ')

if (senha == digite){
    console.log('ACESSO PERMITIDO')
} else{
    console.log('ACESSO NEGADO')
}