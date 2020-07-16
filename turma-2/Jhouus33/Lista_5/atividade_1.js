// Faça um algoritmo que receba uma entrada do usuário e caso
// encontre uma vogal transforme ela em maiúscula (obrigatório usar FOR)
// EX: abelha
// O algoritmo imprime
// AbElhA


let rs = require('readline-sync')

let pergunta = rs.question('Digite uma palavra: \n')
let totalLetras = pergunta.length
let vogais = 'aeiou'
for(let i = 0; i < totalLetras; i++){
        let caractereAtual = pergunta.charAt(i)
        
        if (vogais.includes(caractereAtual.toLowerCase())){
                let antesDaVogal = pergunta.slice(0, i)
                let vogal = caractereAtual
                let depoisDaVogal = pergunta.slice(i + 1)

                pergunta = antesDaVogal + vogal.toUpperCase() + depoisDaVogal     
        } else {
                let antesDaConsoante = pergunta.slice(0, i)
                let Consoante = caractereAtual
                let depoisDaConsoante = pergunta.slice(i + 1)

                pergunta = antesDaConsoante + Consoante.toLowerCase() + depoisDaConsoante
        }
}        

console.log(pergunta)