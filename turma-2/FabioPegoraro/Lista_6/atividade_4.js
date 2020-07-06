//​Crie um programa que receba uma palavra e exiba quantas consoantes e vogais essa palavra tem. 
//EX : saúde 2 consoantes 3 vogais 

let rs = require("readline-sync")

let respostaUsuario = rs.question("Digite uma palavra:")
let vogais = "aAeEiIoOuU"
let totalCaracteres = respostaUsuario.length
let vogal = []
let consoante = []

for(let posicao = 0; posicao < totalCaracteres; posicao++){
    let caractereAtual = respostaUsuario.charAt(posicao)
   
    if (vogais.includes(caractereAtual)) {
        vogal.push(caractereAtual)
        } else{
        consoante.push(caractereAtual)
    }
}

    console.log(respostaUsuario + " tem " + vogal.length + " vogais e " + consoante.length + " consoantes")
    