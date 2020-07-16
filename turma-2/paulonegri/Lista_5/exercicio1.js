//Faça um algoritmo que receba uma entrada do usuário e caso encontre ​uma vogal​ transforme ela 
//em maiúscula (obrigatório usar FOR)EX: abelhaO algoritmo imprimeAbElhA
let rs= require("readline-sync")
let pg

for(let pg; pg !== "nao"; null){

    let palavra = rs.question("Digite qualquer palavra: ").toLowerCase()
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
    pg = rs.question("Gostaria de fazer novamente com outra palavra?(sim ou nao) ").toLowerCase()
}

