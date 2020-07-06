let rs = require('readline-sync')

let pergunta = rs.questionInt("Digite sua senha.\n>>")
let senha = 1234

if (pergunta === senha){
    console.log("Acesso permitido")
}
else {
    console.log("Acesso negado")
}