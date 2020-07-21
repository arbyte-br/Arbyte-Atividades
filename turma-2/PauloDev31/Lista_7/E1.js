let rs = require('readline-sync')

function usuario(){
    let nome = rs.question('Digite seu nome: \n')
        return nome
}
let nomeUsuario = usuario();
    console.log(`Bem vindo ${nomeUsuario}!`)
