let rs = require('readline-sync')

let palavra = rs.question('Digite uma palavra: \n')

if(palavra.includes('mb') || palavra.includes('mp')){
 console.log('A palavra está correta: ' + palavra)
} else {
    console.log('A palavra está errada, antes de P e B vem o M')
}