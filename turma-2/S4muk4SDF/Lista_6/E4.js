let rs = require("readline-sync")

let palavra = rs.question("Digite uma palavra: ")

console.log("=============================================")

let vogais = "aeiou"

let consoantes = "bcdfghjklmnpqrstvwxyz"

let numeros = "123456789"

let vogaisContagem = []

let consoantesContagem = []


let totalCaracteres = palavra.length

for (let posicao = 0; posicao < totalCaracteres; posicao++) {

    let caracterAtual = palavra.charAt(posicao)

    if (vogais.includes(caracterAtual)) {
        vogaisContagem.push(caracterAtual)

    } else if (consoantes.includes(caracterAtual)) {
        consoantesContagem.push(caracterAtual)
    } else {

    }
}

console.log("Vogais: " + vogaisContagem)

console.log("Consoantes: " + consoantesContagem)

console.log("=============================================")