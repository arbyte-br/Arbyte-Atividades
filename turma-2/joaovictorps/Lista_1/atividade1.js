let rs = require('readline-sync')

let ano = rs.questionInt('Em qual ano você nasceu ? \n')
let idade = 2020 - ano
if (idade >= 18 ) {
    console.log('Você deve votar.')
} else if (idade >=16 && idade <18){
    console.log('Você pode votar, mas não é obrigatório.')
} else {
    console.log('Você não pode votar.')
}