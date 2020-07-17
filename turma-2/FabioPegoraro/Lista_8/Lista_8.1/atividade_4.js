//a. Peça o login de um usuário; 
//b. Peça sua senha; 
//c. Caso o usuário e a senha estejam corretos, imprima na tela "USUÁRIO LOGADO"; 
//d. Caso usuário ou senha estejam incorretos, imprima na tela "LOGIN/SENHA INCORRETOS"; 
//e. Pare a execução

let rs = require("readline-sync")

let usuario =  {
    login: nomeUsuario = rs.question("Digite seu Usuario?"),
    senha: senha = rs.questionInt("Digite a senha:")
}

let loginSenhaCorreta =  {
    loginCerto: "fabio",
    senhaCerta: "123456",
}

if(usuario.login == loginSenhaCorreta.loginCerto && usuario.senha == loginSenhaCorreta.senhaCerta) {
    console.log("USUÁRIO LOGADO")
}else{
    console.log( "LOGIN/SENHA INCORRETOS") 
}