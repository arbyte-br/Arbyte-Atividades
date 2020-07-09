let rs = require('readline-sync')

let palavraUsuario = rs.question('Digite uma palavra: ')

let vogais = 'aeiou'

let numVogais = []
let numConsoantes = []

for(let i = 0; i < palavraUsuario.length; i++){
    if( vogais.includes(palavraUsuario.charAt(i))){
        numVogais.push(palavraUsuario.charAt(i))

    }else {
        numConsoantes.push(palavraUsuario.charAt(i))
    }
}
console.log(`A sua palavra: ${palavraUsuario}, possui ${numVogais.length} vogais e ${numConsoantes.length} consoantes` )