let rs = require('readline-sync')

let loginCliente = new Object
loginCliente.usuario = rs.question('Cadastre um usuario para acesso: \n')
loginCliente.senha =  rs.question('Cadastre uma senha para acesso: \n')

let entradaLogin = rs.question('Digite seu usuario para acessar.\n')
while(entradaLogin != loginCliente.usuario){
    entradaLogin = rs.question('Digite seu usuario para acessar.\n')
    
}
let entradaSenha = rs.question('Digite sua senha para acessar.\n')
while(loginCliente.senha != entradaSenha){
    console.log('LOGIN/SENHA INCORRETOS.')
    entradaSenha = rs.question('Digite sua senha para acessar.\n')
}
    console.log('USUARIO LOGADO.')


console.log('Computador R$2000,00')
console.log('Impressora R$200,00')
console.log('Mouse R$ 50,00')
console.log('Celular R$1500,00')
console.log('Carregador R$50,00')
let entradaOpçao = rs.question(
     'Digite 1 para compurador\nDigite 2 para impressora \nDigite 3 para Mouse \nDigite 4 para Celular\nDigite 5 para carredor\ndigite 0 para Sair\n'
    )
    if(entradaOpçao == 1){
    console.log(`Obrigado pela compra, ${loginCliente.usuario}! Você comprou um computador `)
    }
    else if(entradaOpçao == 2){
        console.log(`Obrigado pela compra, ${loginCliente.usuario}! Você comprou uma impressora `)
    }
    else if(entradaOpçao == 3){
        console.log(`Obrigado pela compra, ${loginCliente.usuario}! Você comprou um mouse `)
    }
    else if(entradaOpçao == 4){
        console.log(`Obrigado pela compra, ${loginCliente.usuario}! Você comprou um celular `)
    }
    else if(entradaOpçao == 5){
        console.log(`Obrigado pela compra, ${loginCliente.usuario}! Você comprou um carregador `)
    }
    else if (entradaOpçao == 0){
        console.log(`Obrigado pela visita, ${loginCliente.usuario}!`)
    }
