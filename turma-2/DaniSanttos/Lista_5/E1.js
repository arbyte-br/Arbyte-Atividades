let rs = require('readline-sync')
let palavra = rs.question('Digite uma palavra: ').toLowerCase()
let palavraContada = palavra.length
let vogais = "aeiou"

for (posicao = 0; posicao < palavraContada; posicao++){
    caractereAtual = palavra.charAt(posicao)

    if(vogais.includes(caractereAtual)){

        antesDaVogal = palavra.slice(0, posicao)
        vogal = caractereAtual
        depoisDaVogal = palavra.slice(posicao + 1)
        
        palavra = antesDaVogal + vogal.toUpperCase() + depoisDaVogal

        console.log(palavra)
    //console.log(antesDaVogal)
    //console.log(vogal)
    //console.log(depoisDaVogal)
    // console.log(caractereAtual.toUpperCase())   
    break;
    }
    
}