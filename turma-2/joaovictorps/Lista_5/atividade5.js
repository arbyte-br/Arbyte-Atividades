let rs = require('readline-sync')
let resultado = 1
let resposta = true

while(resposta) {
    let numero = rs.questionInt('Fatorial de: ')
    for(let i = 1; i <= numero; i++ ) {
        resultado*= i
    }
    console.log(`!${numero} = ${resultado}`)
    resposta = rs.questionInt('Digite 1 para fazer o fatorial de outro numero. \n')
    if (resposta == 1) {
        resposta = true
        resultado = 1
    } else {
        resposta = false
    }
} 

console.log('Obrigado por usar o meu programa!')

