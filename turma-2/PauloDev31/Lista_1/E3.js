let rs = require('readline-sync')
let senhaValida = "1234"

let senhaUsuario = rs.question('Digite a senha para acessar: \n')
    if(senhaUsuario != senhaValida){
        console.log('ACESSO NEGADO.')
    }else{
        console.log('ACESSO PERMITIDO')
    }