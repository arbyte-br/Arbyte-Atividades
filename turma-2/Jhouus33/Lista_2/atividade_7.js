// Elabore um programa para testar se uma senha digitada é igual a “batatafrita”.
// Se a senha estiver correta escreva
// “Acesso permitido”,
// do contrário emita a mensagem
// “Você não tem acesso ao sistema”.

let rs = require('readline-sync')

let senhaCorreta = 'batatafrita'

let senha = rs.question('Digite sua senha \n')

if(senha === senhaCorreta){
    console.log('Acesso permitido')
}else {
    console.log('Você não tem acesso ao sistema')
}
