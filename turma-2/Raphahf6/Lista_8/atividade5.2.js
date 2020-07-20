let rs = require('readline-sync')

let computador = {
    nome: 'computador',
    valor: 'R$ 200'
}

let impressora = {
    nome: 'impressora',
    valor: 'R$ 200'
}

let mouse = {
    nome: 'mouse',
    valor: 'R$ 50'
}

let celular = {
    nome: 'celular',
    valor: 'R$ 1500'
}

let carregador = {
    nome: 'carregador',
    valor: 'R$ 50'
}


let catalogo = [computador, impressora, mouse, celular, carregador]

let loginAdm = {
    login: 'admin',
    senha: 'admin'
}

function cadastrarProduto() {
    console.log('bem vindo ao sistema modo adm')
    let sair = false
    let cadastrarProduto = rs.questionInt('Gostaria de cadastrar um produto?: Digite 1 para sim e 2 para não')

    if(cadastrarProduto == 2){
        loginUsuario()
    }

    while (cadastrarProduto == 1) {
        let produto = rs.question(`Digite o nome do produto a ser cadastrado: `)
        let valor = rs.question(`Digite o valor do ${produto}:`)
        let cadastrarOutroProduto = rs.questionInt('Deseja cadastrar outro produto? digite 1 para sim e 2 para sair: ')

        let produtoCadastrado = {
            nome: produto,
            valor: valor
        }

        catalogo.push(produtoCadastrado)

        if (cadastrarOutroProduto == 1) {
            sair == false
        } else if (cadastrarOutroProduto == 2) {
            sair = true
        }

        if (sair == true){
            loginUsuario()
        }
    }

    
}

function loginUsuario() {
    console.log('Bem vindo ao sistema!')
    let login = rs.question('Digite o seu login: ')
    let senha = rs.question('Defina a sua senha: ')

    if(login == loginAdm.login && senha == loginAdm.senha){
        cadastrarProduto()
    } 

    console.log('BEM VINDO AO SISTEMA !')

    console.log(catalogo)

    let produtoDesejado = rs.question('Qual produto você deseja? Digite sair caso não queira nenhum: ')

    if (produtoDesejado == catalogo.includes(nome)) {

        console.log(`Obrigado pela compra ${login} você comprou um ${produtoDesejado} !`)

    } else if (produtoDesejado === 'sair') {
        loginUsuario()
    } else{
        
    }

}

loginUsuario()




