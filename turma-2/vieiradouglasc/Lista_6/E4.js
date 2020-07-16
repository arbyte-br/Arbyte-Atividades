let rs = require('readline-sync')

let palavra = rs.question('Digite uma palavra: ')
palavra = palavra.toLowerCase()

let vogais = ['a', 'e', 'i', 'o', 'u']

let numVogais = 0
let numConsoantes = 0

console.log(palavra)

for (let i = 0; i < palavra.length; i++) {
    let contVogal = vogais.indexOf(palavra[i]) > -1
    if (contVogal) {
        numVogais++
    } else {
        numConsoantes++
    }
}
console.log(`O número de consoantes é: ${numConsoantes}`)
console.log(`O número de vogais é: ${numVogais}`)
