let rs = require('readline-sync')

let login = 'douglas'
let pass = '12345'

let item1 = { item: ['Computador'], preco: parseFloat([2000.00]) }
let item2 = { item: ['Impressora'], preco: parseFloat([200.00]) }
let item3 = { item: ['Mouse'], preco: parseFloat([50.00]) }
let item4 = { item: ['Celular'], preco: parseFloat([1500.00]) }
let item5 = { item: ['Carregador'], preco: parseFloat([50.00]) }

let dadosUser = {
    loginUser: rs.question('Insira seu login: '),
    passUser: rs.question('Insira sua senha: ')
}

if (dadosUser.loginUser === login && dadosUser.passUser === pass) {
    console.log('USUÁRIO LOGADO')

    let escolhaProd = rs.questionInt('Digite o produto que deseja comprar: 1-COMPUTADOR - R$2.000,00 | 2-IMPRESSORA - R$200,00 | 3-MOUSE - R$50,00 | 4-CELULAR - R$1.500,00 | 5-CARREGADOR - R$50,00 | 6 - SAIR (INFORME SOMENTE OS NÚMEROS): ')

    switch (escolhaProd) {
        case 1:
            console.log(`Obrigado pela compra, ${login}! Você comprou um ${item1.item} no valor de R$${item1.preco}`)
            break
        case 2:
            console.log(`Obrigado pela compra, ${login}! Você comprou um ${item2.item} no valor de R$${item2.preco}`)
            break
        case 3:
            console.log(`Obrigado pela compra, ${login}! Você comprou um ${item3.item} no valor de R$${item3.preco}`)
            break
        case 4:
            console.log(`Obrigado pela compra, ${login}! Você comprou um ${item4.item} no valor de R$${item4.preco}`)
            break
        case 5:
            console.log(`Obrigado pela compra, ${login}! Você comprou um ${item5.item} no valor de R$${item5.preco}`)
            break
        case 6:
            console.log('Que pena, volte sempre!')
            break
        default:
            console.log('Número inválido')
    }
} else {
    console.log('LOGIN/SENHA INCORRETOS.')
}


