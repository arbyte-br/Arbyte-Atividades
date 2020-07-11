//a.Peça o login de um usuário;b.Peça sua senha;
//c.Caso o usuário e a senha estejam corretos, imprima na tela "USUÁRIOLOGADO";
//d.Caso usuário ou senha estejam incorretos, imprima na tela "LOGIN/SENHAINCORRETOS";e.Pare a execução.
let rs = require('readline-sync')

let loginCliente = new Object
loginCliente.usuario = rs.question('Cadastre um usuario para acesso: \n')
loginCliente.senha =  rs.question('Cadastre uma senha para acesso: \n')

let entradaLogin = rs.question('Dgite seu usuario para acessar.')
while(entradaLogin != loginCliente.usuario){
    entradaLogin = rs.question('Dgite seu usuario para acessar.')
    
}
let entradaSenha = rs.question('Digite sua senha para acessar.')
if(loginCliente.senha != entradaSenha){
    console.log('LOGIN/SENHA INCORRETOS.')
}else{
    console.log('USUARIO LOGADO.')
}