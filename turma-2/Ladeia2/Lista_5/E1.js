

/* let rs = require('readline-sync')

let nomeUsuario = rs.question('Digite seu primerio nome: ')

let primeiroCaractereDoNomeDoUsuario = nomeUsuario.charAt(0)
let primeiraLetraEmMaiusuclo = primeiroCaractereDoNomeDoUsuario.toUpperCase()

let restoDoNome = nomeUsuario.slice(1, nomeUsuario.length).toLowerCase()

console.log(primeiraLetraEmMaiusuclo + restoDoNome) */


//Faça um algoritmo que receba uma entrada do usuário e caso encontre ​uma vogal​ transforme ela 
//em maiúscula (obrigatório usar FOR)EX: abelhaO algoritmo imprimeAbElhA

let rs= require("readline-sync")

    let palavra = rs.question("Escreva seu nome: ").toLowerCase()
    let vogais = "aeiou"
    let tamanho = palavra.length

    for(let i = 0; i < tamanho; i++) {
        let vogal = palavra.charAt(i)
    
        if(vogais.includes(vogal)) {
            let antesDavogal = palavra.slice(0, i)
            let depoisDaVogal = palavra.slice(i + 1)
            palavra = antesDavogal + vogal.toUpperCase() + depoisDaVogal
        }
    }console.log(palavra)
