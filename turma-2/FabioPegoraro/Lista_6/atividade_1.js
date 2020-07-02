
let rs = require("readline-sync")

let NomeJogadorA = rs.question("Jogador 'A' Qual o seu nome?\n")
let NomeJogadorB = rs.question("Jogador 'B' Qual o seu nome?\n")

let numerodeperguntas = 5

let numerosiguais = []

let listadenumerosjogadorA = []
console.log("_____________________\n")
console.log(NomeJogadorA, "é a sua vez!")
for (let i = 0; i < numerodeperguntas; i++){
    let numerosjogadorA = rs.questionFloat("Digite um numero de 1 a 10:")
    listadenumerosjogadorA.push(numerosjogadorA)
}
let listadenumerosjogadorB = []
console.log("_____________________\n")
console.log(NomeJogadorB, "é a sua vez!")
for (let i = 0; i < numerodeperguntas; i++){
    let numerosjogadorB = rs.questionFloat("Digite um numero de 1 a 10:")
    listadenumerosjogadorB.push(numerosjogadorB)
}

console.log("_____________________\n")
for(let i = 0; i < 5; i++) {
      let condition = listadenumerosjogadorB.indexOf(listadenumerosjogadorA[i]) > -1;
        if(condition) {
           numerosiguais.push(listadenumerosjogadorA[i]);
    }
}
console.log("Os numeros iguais entre "+ NomeJogadorA + " e " + NomeJogadorB + " são: " + numerosiguais); 
console.log("_____________________")

