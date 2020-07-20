let rs = require('readline-sync')

// let palavra = rs.question ('Informe uma palavra para saber quantas vogais e quantas consoantes ela tem: ')

let palavra = rs.question('Informe uma palavra para saber quantas vogais e quantas consoantes ela tem: ').toLowerCase()
let vogais = 'aeiou'
let v = 0
let c = palavra.length

for (x = 0; x < palavra.length; x++) {
    for (y = 0; y < vogais.length; y++) {
        if (palavra.charAt([x]) === vogais.charAt([y])) {
            v = v + 1
            c = c - 1
        }
    }
}
console.clear()
console.log(`A palavra ${palavra} tem ${v} vogais e ${c} consoantes.`)