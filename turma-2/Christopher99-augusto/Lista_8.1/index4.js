let rs = require('readline-sync')

let usuario = {
    login: 'danidani',
    senha: 'arbyte'
}

let login = rs.question('Login: ')
let senha = rs.questionNewPassword('senha: ')

if(login === usuario.login && senha === usuario.senha){
    console.log('USUÁRIO LOGADO')
}else {
    console.log('LOGIN/SENHA INCORRETOS')
}