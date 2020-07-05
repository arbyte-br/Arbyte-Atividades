let rs = require('readline-sync')

let palavra = rs.question('Digite  uma palavra?: ')

let tamanhoPalavra = palavra.length

let palavraAlterada = ""

for(let i = 0; i <= tamanhoPalavra; i++){
    switch(palavra.charAt(i)){

        case "a":
        palavraAlterada = palavraAlterada + palavra.charAt(i).toUpperCase()
        break
        
        case "e":
            palavraAlterada = palavraAlterada + palavra.charAt(i).toUpperCase()
        break

        case "i":
            palavraAlterada = palavraAlterada + palavra.charAt(i).toUpperCase()
        break

        case "o":
            palavraAlterada = palavraAlterada + palavra.charAt(i).toUpperCase()
        break

        case "u":
            palavraAlterada = palavraAlterada + palavra.charAt(i).toUpperCase()
        break

        default:

        palavraAlterada = palavraAlterada + palavra.charAt(i).toLocaleLowerCase()
        break



    }
}
console.log(palavraAlterada)