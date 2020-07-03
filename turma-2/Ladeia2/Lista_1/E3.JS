let rs = require('readline-sync')

var Senha= rs.question('Digite sua senha: ')

if (Senha == 1234 ) {
    console.log("ACESSO PERMITIDO")
}else{
    console.log("ACESSO NEGADO")
}
