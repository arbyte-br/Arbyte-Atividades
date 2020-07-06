let rs = require('readline-sync')

let anoNasc = rs.questionInt('Qual ano você nasceu? ')

if (2020 - anoNasc >= 16){
    console.log('Você poderá votar esse ano')
}else{
    console.log('Você NÃO poderá votar esse ano.')
}