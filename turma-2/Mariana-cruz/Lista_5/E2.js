let rs = require('readline-sync')

console.log('Insira um valor: ')
let valorInicial = rs.questionInt('')

console.log('Insira outro valor: ')
let valorFinal = rs.questionInt('')

for( valorInicial; valorInicial <= valorFinal; valorInicial++){
    console.log(valorInicial)
}

console.log(">> Esse é o final da contagem")


