//Crie um programa que receba uma palavra
// Exiba quantas consoantes e vogais essa palavra tem

let rs= require ('readline-sync')
let vogais= 'aeiou'

let listaVogais=[]
let listaConsoantes=[]
let palavra= rs.question ('Insira uma palavra \n').toLowerCase

for(i=0; i < palavra.length; i++){
    if(vogais.includes(palavra.charAt(i))) {
        listaVogais.push(palavra.charAt(i))

    } else{
        listaConsoantes.push(palavra.charAt(i))
    }

}

console.log ('O número de Vogais é: ' + listaVogais.length +" e o das Consoantes é: " + listaConsoantes.length)