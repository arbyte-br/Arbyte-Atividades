let rs = require('readline-sync')

let anoDeNascimento = rs.questionInt('Qual seu ano de nascimento ? ')

if(anoDeNascimento <= 2002){
    console.log('Voce pode votar')
} else {
    console.log('Voce nao pode votar')
}