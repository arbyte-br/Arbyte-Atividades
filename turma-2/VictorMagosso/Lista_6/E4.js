let rs = require('readline-sync')

let p = rs.question('Digite uma palavra para descobrir quantas vogais e consoantes: ').toLowerCase()
let palavra = p.split('')
let vogais = ['a','e','i','o','u']
let vogaisPalavra = []
let consoantesPalavra = []

for(let i = 0; i < palavra.length; i++){
    if(palavra.indexOf(vogais.indexOf(i)) > -1){
        vogaisPalavra.push(palavra[i])
    }else{
        consoantesPalavra.push(palavra[i])
    }
}
console.log(`A palavra possui ${vogaisPalavra.length} vogais e ${consoantesPalavra.length} consoantes.`)

