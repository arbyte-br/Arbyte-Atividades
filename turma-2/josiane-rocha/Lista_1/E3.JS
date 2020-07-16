var rs = require("readline-sync");

var senhaUsuario = rs.questionInt(console.log("Por Favor, digite sua senha com 4 dígitos: "));

if (senha == 1234) {
    console.log('- ACESSO PERMITIDO')
} else {
    console.log('- ACESSO NEGADO')
}