function validarLogin() {
    loginSenha = {
        login: rs.question('Digite um login: '),
        senha: rs.question('Digite uma senha: ')
    }
    return loginSenha 
}

let rs = require('readline-sync')

let loginSenhaCorretos = {
    nome: 'João Victor',
    login: 'joaovictor',
    senha: '1234'
}

let loginSenha = {}
let catalogo = 
    [
        {computador:'R$ 2.000'},
        {impressora:'R$ 200'},
        {mouse: 'R$ 50'},
        {celular: 'R$ 1500'},
        {carregador:'R$ 50'},
    ]

loginSenha = validarLogin(1)
if(loginSenhaCorretos.login == loginSenha.login && loginSenhaCorretos.senha == loginSenha.senha) {
    console.log('LOGADO.')
    console.log(catalogo)
    let produto = rs.question('Qual produto deseja comprar ? \n Se deseja sair, digite 1. \n')
    switch (produto) {
        case "computador" :
            console.log(`Obrigado pela compra, ${loginSenhaCorretos.nome}. Você comprou um computador.`)
            break;
        case "impressora" :
            console.log(`Obrigado pela compra,${loginSenhaCorretos.nome}. Você comprou uma impressora.`)
            break;
        case "mouse" :
            console.log(`Obrigado pela compra, ${loginSenhaCorretos.nome}. Você comprou um mouse.`)
            break;
        case "celular" :
            console.log(`Obrigado pela compra, ${loginSenhaCorretos.nome}. Você comprou um celular.`)
            break
        case "carregador" :
            console.log(`Obrigado pela compra, ${loginSenhaCorretos.nome}. Você comprou um carregador.`)
            break
        case 1 :
            console.log(`Volte sempre!`)
            break
        default:
            console.log(`Você não digitou um produto ou 1 para sair, por isso o programa encerrará.`)
    }
} else {
    console.log('LOGIN/SENHA INCORRETOS.')
}




