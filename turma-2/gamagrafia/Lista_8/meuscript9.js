//Peça o login de um usuário
//Peça sua senha;
//Caso o usuário e a senha estejam corretos, imprima na tela "USUÁRIO LOGADO"; 
//Caso usuário ou senha estejam incorretos, imprima na tela "LOGIN/SENHA INCORRETOS"; 


let rs=require('readline-sync')

let login= rs.question ('Qual seu login?')
let senha= rs.question ('Qual sua senha?')

let usuarioCorreto= "Manilha"
let senhaCorreta= "truco"

let usuario= {login:usuarioCorreto, senha:senhaCorreta}

if(login===usuario.usuarioCorreto && senha===usuario.senha){
    console.log("USUÁRIO LOGADO")
}else{
    console.log("LOGIN/SENHA INCORRETOS")
}