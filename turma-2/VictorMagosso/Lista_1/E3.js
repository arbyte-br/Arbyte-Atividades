let rs = require('readline-sync')

let senhaCadastro = rs.questionNewPassword('Digite uma nova senha (min 12 caracteres): ')

console.log('======================================')
console.log('Bem vindo ao programa!')

let senhaAcesso = rs.question('Digite sua senha para acessar a area privada: ')

if (senhaAcesso != senhaCadastro){
    console.log('Acesso negado.')
}else{
    console.log('Seu saldo e R$ 350,00')
}
