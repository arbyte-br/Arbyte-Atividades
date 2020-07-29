let rs = require('readline-sync')
let palavra = rs.question('Insira uma palavra: ')

// palavras como "conforto" não são processadas no código. ISSO É UM PROBLEMA

if (palavra.includes('np') || palavra.includes('nb')){
    console.log(`A palavra ${palavra} está errada`)
}
else {
    console.log (`A palavra '${palavra}' está correta`)
} 