const rs = require('readline-sync')

let palavra = rs.question('Informe uma palavra: ')

if (palavra.includes('nb') || palavra.includes('np')) {
    console.log(`Você escreveu a palavra ${palavra} incorretamente. Lembre-se: Antes de "p" e "b", se usa a letra "m"!`)
} else if (palavra.includes('mp') || palavra.includes('mb')) {
    console.log(`Você digitou a palavra ${palavra} corretamente!`)
} else {
    console.log (`A palavra ${palavra} não possui "mp" ou "mb". Não é possível testar outros erros de digitação além destes no momento.`)
}