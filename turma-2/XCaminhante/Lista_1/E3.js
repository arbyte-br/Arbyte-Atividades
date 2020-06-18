const rs = require('readline-sync')
var r = rs.question('Senha: ', {hideEchoBack:true})
console.log( ( r == '1234' ? 'ACESSO PERMITIDO' : 'ACESSO NEGADO' ) )
