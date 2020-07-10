//Em construção.

let rs = require('readline-sync')

let dadosCorretos = {
    usuario: 'paulocnunes',
    senha: 12345
}

let dadosUsuario = {
    usuario: rs.question('Digite o usuário: \n'),
    senha: rs.questionInt('Digite sua senha: \n')
}

let produtos = {
    computador: 'R$ 2000,00',
    impressora: 'R$ 200,00',
    mouse: 'R$ 50,00',
    celular: 'R$ 1500,00',
    carregador: 'R$ 50,00'

}

if (dadosUsuario.usuario !== dadosCorretos.usuario || dadosUsuario.senha !== dadosCorretos.senha) {
    console.log('LOGIN/SENHA INCORRETOS.') 
} else {
    console.log('USUÁRIO LOGADO')
    console.log(produtos)

let pergunta = rs.question('Para realizar uma compra digite COMPRAR ou se deseja sair, digite SAIR. \n').toUpperCase


if (pergunta === 'COMPRAR') {
    console.log(rs.question('Digite qual produto deseja comprar: \n'))
}

} 
