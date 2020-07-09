let rs = require('readline-sync')

let pergunta = rs.question('Digite uma palavra: \n')
let vogal = 'aeiou'

for (let i = 0; i <= pergunta.length; i++) {
    if (vogal.includes(pergunta.charAt(i))){
        let iniciodapalavra = pergunta.slice(0, i)
        let caracteratual = pergunta.charAt(i)  
        let finaldapalavra = pergunta.slice(i+1)
        pergunta = iniciodapalavra + caracteratual.toUpperCase() + finaldapalavra
    }
} 
console.log(pergunta)