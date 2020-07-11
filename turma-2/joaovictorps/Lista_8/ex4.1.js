let rs = require('readline-sync')

let loginSenhaCorretos = {
    login: 'joaovictor',
    senha: '434546'
}
let loginSenha = {
    login: rs.question('Digite um login: '),
    senha: rs.question('Digite uma senha: ')
}

console.log(loginSenhaCorretos.login == loginSenha.login && loginSenhaCorretos.senha == loginSenha.senha
    ? 'USUÁRIO LOGADO' : 'LOGIN/SENHA INCORRETOS')