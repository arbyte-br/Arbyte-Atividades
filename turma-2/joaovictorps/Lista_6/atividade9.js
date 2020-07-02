let rs = require('readline-sync')

let frase = rs.question('Elabore uma frase que contenha a palavra "bosta".\n')

if (frase.includes('bosta')) {
    frase = frase.replace(/bosta/gi, 'estrume');
    console.log(frase)
}