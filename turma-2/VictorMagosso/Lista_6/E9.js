let rs = require('readline-sync')

let frase = rs.question('Digite uma frase: ')

if (frase.includes('bosta')){
    console.log(frase.replace('bosta' , 'estrume'))

}
