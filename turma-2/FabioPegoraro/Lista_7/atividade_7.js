let rs = require("readline-sync")


let n1 = rs.questionFloat("Digite um numero Jogador 1:\n")
let n2 = rs.questionFloat("Digite um numero Jogador 2:\n")
let numCerto = 12

function detectarnumero(){
    if (n1 == numCerto){
       console.log("Jogador 1 você acertou");
    }else if (n2 == numCerto){
        console.log ("Jogador 2 você acertou")
    }else {
        console.log ("Nenhum jogador acertou")
    }
}
let resultado = detectarnumero (n1, n2)
