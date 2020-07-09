let rs = require('readline-sync')

let palavra = rs.question (' Insira uma palavra: ')

if (palavra.includes('np') || palavra.includes('nb')){
    console.log('Está errado')
}else{
    console.log('Está Certo')
} 