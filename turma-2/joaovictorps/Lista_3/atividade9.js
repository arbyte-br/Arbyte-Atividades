let rs = require('readline-sync')

let palavra = rs.question('Digite uma palavra : ')

for(let i = 0; i < palavra.length;i++) {
    console.log(palavra.charAt(i))
}