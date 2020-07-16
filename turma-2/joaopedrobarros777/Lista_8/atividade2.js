let rs = require ("readline-sync")

let resposta = rs.question("A xicara esta cheia ou nao?")

function estaCheia(cheia){
    if (cheia === "sim"){
        return true
    } else {
        return false
    }
}

let xicara = {cheia: estaCheia(resposta), cor: "branca"}

console.log (xicara)