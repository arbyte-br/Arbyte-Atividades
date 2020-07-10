let rs = require('readline-sync')

let dadosCorretos = {
    usuario: 'paulocnunes',
    senha: 12345
}

let dadosUsuario = {
    usuario: rs.question('Digite o usuário: \n'),
    senha: rs.questionInt('Digite sua senha: \n')
}

if (dadosUsuario.usuario === dadosCorretos.usuario && dadosUsuario.senha === dadosCorretos.senha) {
    console.log('USUÁRIO LOGADO.')
} else {
    console.log('LOGIN/SENHA INCORRETOS.')
}