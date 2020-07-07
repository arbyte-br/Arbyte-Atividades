//recebe palavra
//diga se há vogais na palavra

let rs= require ('readline-sync')
let palavra = rs.question('Qual sua palavra?')

if (palavra.indexOf("a",'e','i','o','u')){
    console.log('Tem Vogal nessa palavra')
} else {
    console.log('não tem vogal nessa palavra')
}

///pedir ajuda