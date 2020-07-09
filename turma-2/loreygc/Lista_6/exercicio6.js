let rs = require('readline-sync')

let palavra = rs.question('Insira uma palavra: ').toLowerCase()

let resultado = palavra.endsWith('al')

if (resultado){
    console.log(palavra)
}else{
    console.log('Sua palavra não foi encontrada')
}