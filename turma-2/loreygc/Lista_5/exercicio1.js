let readline = require("readline-sync")

let palavra = readline.question("Digite uma palavra : ")

let palavraFinal = ""

for(i = 0; i < palavra.length; i++){

    letra = palavra.charAt(i)

    if(letra == "a") {

        palavraFinal = palavraFinal + letra.toUpperCase()
    }
    else {
        palavraFinal = palavraFinal + letra
    }
} 