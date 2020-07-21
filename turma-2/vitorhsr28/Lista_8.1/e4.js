const rs = require('readline-sync')

let user = {}

user.login = rs.question('Login: ')
user.password = rs.question('Senha: ')

if (user.login !== 'vitorhsr' || user.password !== 'arbyte') {
    console.log('LOGIN/SENHA INCORRETOS')
} else {
    console.log('USUÁRIO LOGADO')
}
