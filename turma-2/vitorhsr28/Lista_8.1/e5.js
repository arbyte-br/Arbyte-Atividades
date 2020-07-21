const rs = require('readline-sync')

let user = {}
let produto = {}

user.login = rs.question('Login: ')
user.password = rs.question('Senha: ')
user.nome = 'Vitor'

produto.computador = 'R$ 2.000,00'
produto.impressora = 'R$ 200,00'
produto.mouse = 'R$ 50,00'
produto.celular = 'R$ 1.500,00'
produto.carregador = 'R$ 50,00'

if (user.login != 'vitorhsr' || user.password != 'arbyte') {
    console.log ('LOGIN/SENHA INCORRETOS')
} else {
    console.log ('USUÁRIO LOGADO')
    console.clear()
    console.log (produto)
    user.compra = rs.question (`Seja bem vindo, ${user.nome}. Escolha o produto da lista acima que deseja comprar ou digite "sair" para finalizar: `).toLowerCase()
    switch (user.compra) {
        case 'computador':
            console.log(`Obrigado pela compra, ${user.nome}! Você comprou um computador por ${produto.computador}!`)
            break
        case 'impressora':
            console.log(`Obrigado pela compra, ${user.nome}! Você comprou uma impressora por ${produto.impressora}!`)
            break
        case 'mouse':
            console.log(`Obrigado pela compra, ${user.nome}! Você comprou um mouse por ${produto.mouse}!`)
            break
        case 'celular':
            console.log(`Obrigado pela compra, ${user.nome}! Você comprou um celular por ${produto.celular}!`)
            break
        case 'carregador':
            console.log(`Obrigado pela compra, ${user.nome}! Você comprou um carregador por ${produto.carregador}!`)
            break
        case 'sair':
            console.log('Deslogando... Deslogado!')
            break
        default:
            console.log(`Produto ${user.compra} inválido.`)
    }    
}
