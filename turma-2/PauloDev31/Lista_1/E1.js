let rs = require('readline-sync')
let entradaUsuario = rs.questionInt('Qual o seu ano de nascimento?')
let anoAtual = new Date().getFullYear();

let idadeUsuario = anoAtual - entradaUsuario
    if(idadeUsuario < 16){
        console.log('Você não pode votar esse ano')
    }else{
        console.log('Você pode votar esse ano')
    }
