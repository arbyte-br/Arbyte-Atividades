let rs = require('readline-sync')

console.log('Crie o seu login')
let login = rs.question('Digite o seu login: ')
let senha = rs.question('Defina a sua senha: ')



let userLogin = rs.question('Digite o seu login: ')
let senhaLogin = rs.question('Digite a sua senha: ')


if (userLogin == login && senhaLogin == senha) {
    console.log('BEM VINDO AO SISTEMA !')

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
    console.log('CATALOGO')
    let catalogo = [computador, impressora, mouse, celular, carregador]
    console.log(catalogo)


    let produtoDesejado = rs.question('Qual produto você deseja? Digite sair caso não queira nenhum: ')

    if (produtoDesejado == computador.nome || produtoDesejado == impressora.nome ||
         produtoDesejado == mouse.nome || produtoDesejado == celular.nome ||
          produtoDesejado == carregador.nome) {

            console.log(`Obrigado pela compra ${userLogin} você comprou um ${produtoDesejado} !`)

    }else if(produtoDesejado === 'sair'){
        
    }
}
else {
    console.log('FALHA NO LOGIN ! USUARIO OU SENHA INCORRETOS.')

    let userTentandoLogar = {
        login: userLogin,
        senha: senhaLogin
    }

    console.log(userTentandoLogar)
}