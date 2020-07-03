let rs = require('readline-sync')

let palavra = rs.question('Digite uma palavra: ')
let consoantes = 'bcdfghjklmnpqrstvwxyz'
let vogais = 'aeiou'
let totalConsoantes = []
let totalVogais = []
palavra = palavra.toLowerCase()

for(let i = 0; i<palavra.length;i++) {
    if (consoantes.includes(palavra[i])) {
        totalConsoantes.push(palavra[i])
    } else if (vogais.includes(palavra[i])) {
        totalVogais.push(palavra[i])    
    } else {
        continue
    }
}

console.log(`${totalConsoantes.length} consoante(s)`)
console.log(`${totalVogais.length} vogais`)