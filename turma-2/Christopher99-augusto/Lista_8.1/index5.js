let rs = require('readline-sync')

function formatarValor(valor) {
    return valor.toLocaleString('pt-BR', { minimumFractionDigits: 2});
}

let usuario = {
    nome: 'Daniel',
    login: 'danidani',
    senha: 'arbyte'
}

let produtos = {
    carros: ['1 - Mercedes-Benz GLE 63 AMG - 2019', '2 - Mercedes AMG GT-R Pro - 2020', '3 - Porshe 911 GT3 RS - 2020', '4 - BMW X6 xDrive40i M Sport - 2020', '5 - Range Rover Evoque R-Dynamic HSE P300 - 2020'],
    precos: [729000, 1699000, 1242000, 514950, 322300]
}

let login = rs.question('Login: ')
let senha = rs.question('senha: ')

if(login === usuario.login && senha === usuario.senha){
    console.log('USUÁRIO LOGADO')
}else {
    console.log('LOGIN/SENHA INCORRETOS')
    return
}

let opcao = rs.questionInt('Digite 1 para ver a lista de carros ou 2 para sair: ')
while(opcao > 2 || opcao < 1){
    opcao = rs.question('Opção inválida. Digite 1 para ver a lista de carros ou 2 para sair: ')
}
if(opcao === 1){
    console.log(produtos.carros.join('\n'))
}else{
    return
}
let opcao2 = rs.questionInt('Selecione qual carro deseja conferir o valor: ')

while(opcao2 > 5 || opcao2 < 1){
    console.log('Opção inválida. Tente novamente')
    opcao2 = rs.questionInt('Selecione qual carro deseja conferir o valor: ')

}

console.log(`Você selecionou ${produtos.carros[opcao2 - 1].slice(3)} no valor de R$${formatarValor(produtos.precos[opcao2 - 1])}.`)

let opcao3 = rs.questionInt('Digite 1 para confirmar a compra, 2 para retornar para a lista de carros ou 3 para sair: ')

while (opcao3 > 3 || opcao3 < 1){
    console.log('Opção inválida. Tente novamente')
    opcao3 = rs.questionInt('Digite 1 para confirmar a compra, 2 para retornar para a lista de carros ou 3 para sair: ')

}

while(opcao3 === 2){
    console.log(produtos.carros.join('\n'))
    
    let opcao2 = rs.questionInt('Selecione qual carro deseja conferir o valor: ')
    
    while(opcao2 > 5 || opcao2 < 1){
        console.log('Opção inválida. Tente novamente')
        opcao2 = rs.questionInt('Selecione qual carro deseja conferir o valor: ')
    }
    
    console.log(`Você selecionou ${produtos.carros[opcao2 - 1].slice(3)} no valor de ${formatarValor(produtos.precos[opcao2 - 1])}.`)
    
    let opcao3 = rs.questionInt('Digite 1 para confirmar a compra, 2 para retornar para a lista de carros ou 3 para sair: ')



    if(opcao3 === 1){
        console.log(`Parabéns pela compra ${usuario.nome}!\nVocê acabou de adiquirir um ${produtos.carros[opcao2 - 1].slice(3)}.`)
        return
    }else if (opcao3 === 3){
        return
    }else{
        console.log('Opção inválida. Tente novamente')
    }
}

if(opcao3 === 1){
    console.log(`Parabéns pela compra ${usuario.nome}!\nVocê acabou de adiquirir um ${produtos.carros[opcao2 - 1].slice(3)}.`)
}