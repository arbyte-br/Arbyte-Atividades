let rs = require('readline-sync')

let user = rs.question('Digite uma palavra: ')

let vogais = ['a', 'A', 'e', 'E', 'i', 'I', 'o', 'O' ,'u', 'U']
let contador = 0
let procuraVogais = user.length
let numVogais = 0


for (contador; contador < procuraVogais; contador++) {
    let caracter = user[contador];
    let temVogal = vogais.indexOf(caracter) > -1

    if (temVogal) {
        numVogais++
    }
}

if (numVogais > 0) {
    console.log('Temos Vogais ')
} else {
    console.log('Nao temos vogais')
}