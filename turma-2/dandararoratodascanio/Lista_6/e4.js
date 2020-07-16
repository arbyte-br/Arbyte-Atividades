

let rs = require('readline-sync')

let palavra = rs.question("Digite uma palavra: \n")

let vogais = "aeiouAEIOU"
let numeroVogais = []
let numeroConsoantes = []

for (let i = 0; i < palavra.length; i++) {
    if (vogais.includes(palavra[i])) {
        numeroVogais.push(palavra[i])
    }
    else {
        numeroConsoantes.push(palavra[i])
    }
}
console.log(`A palavra ${palavra} tem ${numeroVogais.length} vogais e ${numeroConsoantes.length} consoantes. `)
