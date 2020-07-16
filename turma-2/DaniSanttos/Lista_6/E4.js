let rs = require('readline-sync')

let palavra = rs.question('Digite uma palavra: ').toLowerCase
let palavraContada = palavra.length

let vogais = []
let consoantes = []


for(i = 0; i < palavraContada; i++){
    letra = palavra.charAt(i)

    if (letra == "a"){
        vogais.push(letra)
    }else if  (letra == "e"){
        vogais.push(letra)
    }else if  (letra == "i"){
        vogais.push(letra)
    }else if  (letra == "o"){
        vogais.push(letra)
    }else if  (letra == "u"){
        vogais.push(letra)
    }else{
        consoantes.push(letra)
    }

}

console.log(`Na sua palavra há ${vogais.length} vogais e ${consoantes.length} consoantes`)