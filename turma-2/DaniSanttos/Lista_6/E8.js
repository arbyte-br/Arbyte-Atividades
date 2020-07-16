let rs = require('readline-sync')
let palavra = rs.question('Insira uma palavra: ')
let palavraContada = palavra.length

for(let i = 0; i < palavraContada; i++){
    let localizacao = palavra.charAt(i)
    if(localizacao === "a" || "e" || "i" || "o" || "u"){
    console.log("Sua palavra contém vogal.")
    }
    break
}
