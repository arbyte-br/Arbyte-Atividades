let rs = require("readline-sync")

senha = rs.questionInt("Digite a senha: ")

if (senha === 1234){
    console.log("ACESSO PERMITIDO")
}else {
    console.log("ACESSO NEGADO")
}