let rs = require("readline-sync")

let palavra = rs.question("Digite uma palavra: ")

console.log("=============================================")

let vogais = "aeiou"

let vogaisMaiusculas = vogais.toUpperCase()

let consoantes = "bcdfghjklmnpqrstvwxyz"

let consoantesMaiusculos = consoantes.toUpperCase()

let numeros = "123456789"


let totalCaracteres = palavra.length

for (let posicao = 0; posicao < totalCaracteres; posicao++) {

    let caracterAtual = palavra.charAt(posicao)

    if (vogais.includes(caracterAtual) || vogaisMaiusculas.includes(caracterAtual)) {
        console.log(`Vogal: ${caracterAtual}`)
    } else if (consoantes.includes(caracterAtual) || consoantesMaiusculos.includes(caracterAtual)) {
        console.log(`Consoante: ${caracterAtual}`)
    } else if (numeros.includes(caracterAtual)) {
        console.log(`Número: ${caracterAtual}`)
    } 
}

console.log("=============================================")