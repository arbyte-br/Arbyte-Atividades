let rs = require('readline-sync')

function numero(n1) {
    if (n1 > 0 && n1 <= 10){
        return console.log('Número OK!')
    }else {
        return console.log('O número deve ser de 1 a 10!')
    }
}