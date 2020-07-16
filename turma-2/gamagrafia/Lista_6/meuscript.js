
let rs= require ('readline-sync')

let nomeJogadorA = rs.question ('Qual o seu nome?')
let nomeJogadorB = rs.question ('Qual o seu nome?')


let listaJogadorA = []
let listaJogadorB = []
let valoresIguais = []
// Incluindo valores nas listas
for ( let contador = 0; contador < 5; contador++) {

    let numeroJogadorA = rs.questionInt('Insira um número de 1 a 10: ')
    listaJogadorA.push(numeroJogadorA)

    let numeroJogadorB = rs.questionInt('Insira um número de 1 a 10: ')
    listaJogadorB.push(numeroJogadorB)
    
}

console.log (listaJogadorA)
console.log (listaJogadorB)

//Comparando as listas
for (let contador=0; contador < listaJogadorA.length; contador++) {
let elemento= listaJogadorA[contador]
if (listaJogadorB.includes(elemento)){
    valoresIguais.push(elemento)
}
 }

console.log (valoresIguais)