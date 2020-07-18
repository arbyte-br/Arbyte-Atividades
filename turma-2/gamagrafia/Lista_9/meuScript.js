let media= require ('median')
let rs= require ('readline-sync')
const median = require('median')

let listaNumeros=[]

for (i=0; i<4; i++){

    let nota= rs.questionInt('Qual nota você dá?')
    listaNumeros.push(nota)


}

media= median(listaNumeros)

console.log ('Sua média é ' + media)
